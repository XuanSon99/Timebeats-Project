<template>
    <div class="main">
        <section class="sign-up">
            <div class="container">
                <div class="content">
                    <div class="row">
                        <div class="col-xl-6">
                            <h2 class="form-title">Đăng Kí</h2>
                            <form class="register-form" @submit="checkForm">
                                <div class="form-group">
                                    <input type="text" v-model="username" class="form-control" id="user-name" placeholder="Họ và tên">
                                    <div class="icon">
                                        <svg width="1em" height="1em" viewBox="0 0 16 16" class="bi bi-person-fill" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                                            <path fill-rule="evenodd" d="M3 14s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1H3zm5-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6z"/>
                                        </svg>
                                    </div>
                                </div>
                                <div class="form-group">
                                    <div class="icon">
                                        <svg width="1em" height="1em" viewBox="0 0 16 16" class="bi bi-envelope-fill" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                                            <path fill-rule="evenodd" d="M.05 3.555A2 2 0 0 1 2 2h12a2 2 0 0 1 1.95 1.555L8 8.414.05 3.555zM0 4.697v7.104l5.803-3.558L0 4.697zM6.761 8.83l-6.57 4.027A2 2 0 0 0 2 14h12a2 2 0 0 0 1.808-1.144l-6.57-4.027L8 9.586l-1.239-.757zm3.436-.586L16 11.801V4.697l-5.803 3.546z"/>
                                        </svg>
                                    </div>
                                    <input type="text" class="form-control" v-model="email" id="email" aria-describedby="emailHelp" placeholder="Email">
                                </div>
                                <div class="form-group">
                                    <div class="icon">
                                        <svg width="1em" height="1em" viewBox="0 0 16 16" class="bi bi-lock-fill" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M2.5 9a2 2 0 0 1 2-2h7a2 2 0 0 1 2 2v5a2 2 0 0 1-2 2h-7a2 2 0 0 1-2-2V9z"/>
                                            <path fill-rule="evenodd" d="M4.5 4a3.5 3.5 0 1 1 7 0v3h-1V4a2.5 2.5 0 0 0-5 0v3h-1V4z"/>
                                        </svg>
                                    </div>
                                    <input type="password" v-model="password" class="form-control" id="password" placeholder="Mật khẩu">
                                </div>
                                <div class="form-group">
                                    <div class="icon">
                                        <svg width="1em" height="1em" viewBox="0 0 16 16" class="bi bi-lock" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                                        <path fill-rule="evenodd" d="M11.5 8h-7a1 1 0 0 0-1 1v5a1 1 0 0 0 1 1h7a1 1 0 0 0 1-1V9a1 1 0 0 0-1-1zm-7-1a2 2 0 0 0-2 2v5a2 2 0 0 0 2 2h7a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2h-7zm0-3a3.5 3.5 0 1 1 7 0v3h-1V4a2.5 2.5 0 0 0-5 0v3h-1V4z"/>
                                        </svg>
                                    </div>
                                    <input type="password" v-model="confirm_password" class="form-control" id="confirm-password" placeholder="Nhập lại mật khẩu">
                                </div>
                                <ul class="errors">
                                    <li v-for="error in errors" :key="error">{{ error }}</li>
                                </ul>
                                <div class="form-check">
                                    <input type="checkbox" v-model="check" class="form-check-input" id="check">
                                    <label class="form-check-label" for="check">Đồng ý với tất cả <a href="#">Chính sách</a> của chúng tôi</label>
                                </div>
                                <div class="form-group">
                                    <button type="submit" class="btn btn-primary">Đăng kí</button>
                                </div>
                            </form>
                        </div>
                        <div class="col-xl-6">
                            <div class="img">
                                <figure>
                                    <img src="../assets/image/signup-image.jpg" alt="sing up image">
                                </figure>
                               <router-link class="" tag="a" to="/login">Đăng nhập ngay</router-link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
    </section>
    </div>
</template>
<script src="https://unpkg.com/axios/dist/axios.min.js"></script>
<script>
export default {
    name: 'Register',
    data() {
        return {
            username: null,
            password: null,
            email: null,
            confirm_password: null,
            check: false,
            errors: [],
            users: [],
        }
    },
    mounted () {
    this.$axios 
      .post('http://192.168.60.69:3000/api/auth/login')
      .then(response => this.info = response.data)
    },
    methods: {
        checkForm: function(e) {
            this.errors = [];
            if (!this.username || !this.email || !this.password || !this.confirm_password) {
                this.errors.push("vui lòng điền đầy đủ thông tin");
            }
            else if (!this.validEmail(this.email)) {
                this.errors.push('Email phải có dạng abc123@gmail.com');
            }
            else if(!this.checkLocal(this.email) ) {
                this.errors.push('Email đã tồn tại');
            }
            else if(this.password && this.password != this.confirm_password) {
                this.errors.push("Mật khẩu không trùng khớp")
            }
            else if(this.check == false) {
                this.errors.push("Trường điều khoản thỏa thuận là bắt buộc.")
            }
            if (!this.errors.length) {
                this.users = JSON.parse(localStorage.getItem('users')) || [] // get storage
                this.setStorage(this.users,this.username,this.password,this.email)
                alert("Đăng kí thành công")
                console.log(this.info)
                return true
            }
            e.preventDefault();
        },
        validEmail: function (email) {
            var re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
            return re.test(email);
        },
        setStorage: function (users, username, password, email) {
            users.push({username: username, email: email, password: password})
            localStorage.setItem('users', JSON.stringify(users))
        },
        checkLocal: function(email) {
            this.users = JSON.parse(localStorage.getItem('users')) || [] // get storage
            for(let item of this.users) {
                if(email == item.email) {
                    return false
                }
            }
            return true
        }
    }
}
</script>

<style>
    body {
        background: #f8f8f8;
    }
    a {
        color: #2c3e50;
    }
    .sign-up {
        padding: 150px 0 200px 0;
    }
    .sign-up  .register-form > div {
        text-align: left;
    }
    .sign-up .form-check {
        padding-top: 15px;
        padding-bottom: 15px;
    }
    .sign-up .content {
        padding: 75px;
        margin: 0 120px;
        background: #fff;
        border-radius: 20px;
        box-shadow: 0 0 20px rgba(0, 0, 0, 0.1);
    }
    .sign-up .form-title {
        text-align: left;
        margin-bottom: 30px;
        font-weight: 700;
    }
    .form-control:focus {
        box-shadow: none;
    }
    .sign-up .form-group input {
        width: 100%;
        display: block;
        border: none;
        border-bottom: 1px solid #999;
        padding: 6px 30px;
        box-sizing: border-box;
        border-radius: 0;
    }
    .sign-up .form-group {
        position: relative;
        display: flex;
    }
    .sign-up .icon {
        position: absolute;
        line-height: 33px;
    }
    .sign-up button {
        padding: 10px 30px;
    }
    .errors {
        padding: 0;
        margin: 0;
    }
    .errors li {
        list-style: none;
        text-align: left;
        padding: 0;
        color: red;
    }
    .sign-up a {
        text-decoration:underline ;
    }
    a:hover {
        color: #2c3e50;
    }
</style>
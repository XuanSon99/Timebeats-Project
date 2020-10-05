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
                  <input
                    type="text"
                    v-model="username"
                    class="form-control"
                    id="user-name"
                    placeholder="Họ và tên"
                  />
                  <div class="icon">
                    <svg
                      width="1em"
                      height="1em"
                      viewBox="0 0 16 16"
                      class="bi bi-person-fill"
                      fill="currentColor"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fill-rule="evenodd"
                        d="M3 14s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1H3zm5-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6z"
                      />
                    </svg>
                  </div>
                </div>
                <div class="form-group">
                  <div class="icon">
                    <svg
                      width="1em"
                      height="1em"
                      viewBox="0 0 16 16"
                      class="bi bi-envelope-fill"
                      fill="currentColor"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fill-rule="evenodd"
                        d="M.05 3.555A2 2 0 0 1 2 2h12a2 2 0 0 1 1.95 1.555L8 8.414.05 3.555zM0 4.697v7.104l5.803-3.558L0 4.697zM6.761 8.83l-6.57 4.027A2 2 0 0 0 2 14h12a2 2 0 0 0 1.808-1.144l-6.57-4.027L8 9.586l-1.239-.757zm3.436-.586L16 11.801V4.697l-5.803 3.546z"
                      />
                    </svg>
                  </div>
                  <input
                    type="text"
                    class="form-control"
                    v-model="email"
                    id="email"
                    aria-describedby="emailHelp"
                    placeholder="Email"
                  />
                </div>
                <div class="form-group">
                  <div class="icon">
                    <svg
                      width="1em"
                      height="1em"
                      viewBox="0 0 16 16"
                      class="bi bi-lock-fill"
                      fill="currentColor"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M2.5 9a2 2 0 0 1 2-2h7a2 2 0 0 1 2 2v5a2 2 0 0 1-2 2h-7a2 2 0 0 1-2-2V9z"
                      />
                      <path
                        fill-rule="evenodd"
                        d="M4.5 4a3.5 3.5 0 1 1 7 0v3h-1V4a2.5 2.5 0 0 0-5 0v3h-1V4z"
                      />
                    </svg>
                  </div>
                  <input
                    type="password"
                    v-model="password"
                    class="form-control"
                    id="password"
                    placeholder="Mật khẩu"
                  />
                </div>
                <div class="form-group">
                  <div class="icon">
                    <svg
                      width="1em"
                      height="1em"
                      viewBox="0 0 16 16"
                      class="bi bi-lock"
                      fill="currentColor"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fill-rule="evenodd"
                        d="M11.5 8h-7a1 1 0 0 0-1 1v5a1 1 0 0 0 1 1h7a1 1 0 0 0 1-1V9a1 1 0 0 0-1-1zm-7-1a2 2 0 0 0-2 2v5a2 2 0 0 0 2 2h7a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2h-7zm0-3a3.5 3.5 0 1 1 7 0v3h-1V4a2.5 2.5 0 0 0-5 0v3h-1V4z"
                      />
                    </svg>
                  </div>
                  <input
                    type="password"
                    v-model="confirm_password"
                    class="form-control"
                    id="confirm-password"
                    placeholder="Nhập lại mật khẩu"
                  />
                </div>
                
                <div class="form-group">
                  <div class="icon">
                    <svg
                      width="1em"
                      height="1em"
                      viewBox="0 0 16 16"
                      class="bi bi-person-bounding-box"
                      fill="currentColor"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fill-rule="evenodd"
                        d="M1.5 1a.5.5 0 0 0-.5.5v3a.5.5 0 0 1-1 0v-3A1.5 1.5 0 0 1 1.5 0h3a.5.5 0 0 1 0 1h-3zM11 .5a.5.5 0 0 1 .5-.5h3A1.5 1.5 0 0 1 16 1.5v3a.5.5 0 0 1-1 0v-3a.5.5 0 0 0-.5-.5h-3a.5.5 0 0 1-.5-.5zM.5 11a.5.5 0 0 1 .5.5v3a.5.5 0 0 0 .5.5h3a.5.5 0 0 1 0 1h-3A1.5 1.5 0 0 1 0 14.5v-3a.5.5 0 0 1 .5-.5zm15 0a.5.5 0 0 1 .5.5v3a1.5 1.5 0 0 1-1.5 1.5h-3a.5.5 0 0 1 0-1h3a.5.5 0 0 0 .5-.5v-3a.5.5 0 0 1 .5-.5z"
                      />
                      <path
                        fill-rule="evenodd"
                        d="M3 14s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1H3zm5-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6z"
                      />
                    </svg>
                  </div>
                  <select v-model="gender" class="form-control select2 gender">
                    <option disabled value>Giới tính</option>
                    <option value="male">Nam</option>
                    <option value="female">Nữ</option>
                  </select>
                </div>
                <div class="form-group">
                  <div class="icon">
                    <svg
                      width="1em"
                      height="1em"
                      viewBox="0 0 16 16"
                      class="bi bi-telephone-fill"
                      fill="currentColor"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fill-rule="evenodd"
                        d="M2.267.98a1.636 1.636 0 0 1 2.448.152l1.681 2.162c.309.396.418.913.296 1.4l-.513 2.053a.636.636 0 0 0 .167.604L8.65 9.654a.636.636 0 0 0 .604.167l2.052-.513a1.636 1.636 0 0 1 1.401.296l2.162 1.681c.777.604.849 1.753.153 2.448l-.97.97c-.693.693-1.73.998-2.697.658a17.47 17.47 0 0 1-6.571-4.144A17.47 17.47 0 0 1 .639 4.646c-.34-.967-.035-2.004.658-2.698l.97-.969z"
                      />
                    </svg>
                  </div>
                  <input
                    type="number"
                    v-model="phone"
                    class="form-control"
                    placeholder="Số điện thoại"
                  />
                </div>
                <ul class="errors">
                  <li v-for="error in errors" :key="error">{{ error }}</li>
                </ul>
                <div class="form-check">
                  <input type="checkbox" v-model="check" class="form-check-input" id="check" />
                  <label class="form-check-label" for="check">
                    Đồng ý với tất cả
                    <a href="#">Chính sách</a> của chúng tôi
                  </label>
                </div>
                <div class="form-group">
                  <button type="submit" class="btn btn-primary">Đăng kí</button>
                </div>
              </form>
            </div>
            <div class="col-xl-6">
              <div class="img">
                <figure>
                  <img src="../assets/vendor/img/signup-image.jpg" alt="sing up image" />
                </figure>
                <router-link class tag="a" to="/login">Đăng nhập ngay</router-link>
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
  name: "Register",
  data() {
    return {
      username: null,
      gender: "",
      phone: null,
      password: null,
      email: null,
      confirm_password: null,
      check: false,
      errors: [],
      info: [],
    };
  },
  methods: {
    checkForm: function (e) {
      e.preventDefault();
      this.errors = [];
      if (
        !this.username ||
        !this.email ||
        !this.password ||
        !this.confirm_password ||
        !this.gender ||
        !this.phone
      ) {
        this.errors.push("Vui lòng nhập đầy đủ thông tin");
        return;
      }
      if (this.password.length < 6) {
        this.errors.push("Mật khẩu phải dài hơn 6 ký tự");
        return;
      }
      if (!this.validEmail(this.email)) {
        this.errors.push("Email không đúng hoặc đã tồn tại");
        return;
      }
      if (!this.validPhone(this.phone)) {
        this.errors.push("Số điện thoại không đúng");
        return;
      }
      if (this.password && this.password != this.confirm_password) {
        this.errors.push("Mật khẩu không trùng khớp");
        return;
      }
      if (this.check == false) {
        this.errors.push("Trường điều khoản thỏa thuận là bắt buộc");
        return;
      }
      this.$axios
        .post("http://192.168.60.69:3000/api/user/register", {
          display_name: this.username,
          email: this.email,
          gender: this.gender,
          password: this.password,
          phone: this.phone,
        })
        .then((response) => {
          this.$toast.success("Đăng kí thành công !", {
            position: "top-right",
            timeout: 5000,
            closeOnClick: true,
            pauseOnFocusLoss: true,
            pauseOnHover: true,
            draggable: true,
            draggablePercent: 0.85,
            showCloseButtonOnHover: true,
            hideProgressBar: false,
            closeButton: "button",
            icon: true,
            rtl: false,
          });
          this.username = "";
          this.email = "";
          this.gender = "";
          this.password = "";
          this.confirm_password = "";
          this.phone = "";
          this.check = false;
        })
        .catch((error, response) => {
          this.errors.push("Email đã tồn tại");
          return;
        });
    },
    validEmail: function (email) {
      const reg = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
      return reg.test(email);
    },
    validPhone: function (phone) {
      const reg = /((09|03|07|08|05)+([0-9]{8})\b)/g;
      return reg.test(phone);
    },
  },
};
</script>

<style>
body {
  background: #f8f8f8;
}
a {
  color: #2c3e50;
}
.sign-up {
  margin: 50px;
}
.sign-up .register-form > div {
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
  padding: 6px 0 6px 30px;
  box-sizing: border-box;
  border-radius: 0;
}
.sign-up .form-group {
  position: relative;
  display: flex;
  align-items: center;
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
  text-decoration: underline;
}
a:hover {
  color: #2c3e50;
}
.sign-up .gender {
  border: none;
  border-bottom: 1px solid #999;
  border-radius: 0;
  padding: 6px 27px;
}
.sign-up .img {
  float: right;
  padding-top: 75px;
  text-align: center;
}
.sign-up .img a {
  margin-top: 20px;
}
</style>
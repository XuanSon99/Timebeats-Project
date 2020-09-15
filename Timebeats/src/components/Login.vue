<template>
  <div class="signin">
    <vue-headful title="Đăng nhập" />
    <div class="container">
      <div class="row signin-content">
        <div class="col-6 signin-image">
          <img src="../assets/vendor/img/signin-image.jpg" alt />
          <router-link tag="a" to="/register">Tạo tài khoản</router-link>
        </div>
        <div class="col-6 signin-form">
          <h2 class="signin-title">Đăng nhập</h2>
          <form>
            <div class="form-group">
              <svg
                width="1em"
                height="1em"
                viewBox="0 0 16 16"
                class="bi bi-people-fill"
                fill="currentColor"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  d="M7 14s-1 0-1-1 1-4 5-4 5 3 5 4-1 1-1 1H7zm4-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm-5.784 6A2.238 2.238 0 0 1 5 13c0-1.355.68-2.75 1.936-3.72A6.325 6.325 0 0 0 5 9c-4 0-5 3-5 4s1 1 1 1h4.216zM4.5 8a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5z"
                />
              </svg>
              <input
                type="email"
                class="form-control"
                id="email"
                aria-describedby="emailHelp"
                placeholder="Nhập địa chỉ email"
                v-model="signin.email"
              />
            </div>
            <div class="form-group">
              <svg
                width="1em"
                height="1em"
                viewBox="0 0 16 16"
                class="bi bi-lock-fill"
                fill="currentColor"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M2.5 9a2 2 0 0 1 2-2h7a2 2 0 0 1 2 2v5a2 2 0 0 1-2 2h-7a2 2 0 0 1-2-2V9z" />
                <path
                  fill-rule="evenodd"
                  d="M4.5 4a3.5 3.5 0 1 1 7 0v3h-1V4a2.5 2.5 0 0 0-5 0v3h-1V4z"
                />
              </svg>
              <input
                type="password"
                class="form-control"
                id="password"
                placeholder="Mật khẩu"
                v-model="signin.password"
              />
            </div>
            <p class="text-danger" v-for="item in errors" :key="item">{{item}}</p>
            <button
              @click="checkFormSignin"
              type="submit"
              id="btn-signin"
              class="btn btn-primary"
            >Đăng nhập</button>
          </form>
          <div class="social-login">
            Hoặc đăng nhập bằng
            <a href="https://accounts.google.com/" target="_blank">
              <svg
                version="1.1"
                id="Layer_1"
                xmlns="http://www.w3.org/2000/svg"
                xmlns:xlink="http://www.w3.org/1999/xlink"
                x="0px"
                y="0px"
                viewBox="0 0 512 512"
                style="enable-background:new 0 0 512 512;"
                xml:space="preserve"
              >
                <path
                  style="fill:#FBBB00;"
                  d="M113.47,309.408L95.648,375.94l-65.139,1.378C11.042,341.211,0,299.9,0,256
	c0-42.451,10.324-82.483,28.624-117.732h0.014l57.992,10.632l25.404,57.644c-5.317,15.501-8.215,32.141-8.215,49.456
	C103.821,274.792,107.225,292.797,113.47,309.408z"
                />
                <path
                  style="fill:#518EF8;"
                  d="M507.527,208.176C510.467,223.662,512,239.655,512,256c0,18.328-1.927,36.206-5.598,53.451
	c-12.462,58.683-45.025,109.925-90.134,146.187l-0.014-0.014l-73.044-3.727l-10.338-64.535
	c29.932-17.554,53.324-45.025,65.646-77.911h-136.89V208.176h138.887L507.527,208.176L507.527,208.176z"
                />
                <path
                  style="fill:#28B446;"
                  d="M416.253,455.624l0.014,0.014C372.396,490.901,316.666,512,256,512
	c-97.491,0-182.252-54.491-225.491-134.681l82.961-67.91c21.619,57.698,77.278,98.771,142.53,98.771
	c28.047,0,54.323-7.582,76.87-20.818L416.253,455.624z"
                />
                <path
                  style="fill:#F14336;"
                  d="M419.404,58.936l-82.933,67.896c-23.335-14.586-50.919-23.012-80.471-23.012
	c-66.729,0-123.429,42.957-143.965,102.724l-83.397-68.276h-0.014C71.23,56.123,157.06,0,256,0
	C318.115,0,375.068,22.126,419.404,58.936z"
                />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
export default {
  name: "signin",
  data() {
    return {
      signin: {
        email: null,
        password: null,
      },
      status: false,
      token: String,
      errors: [],
      loggedUser: null,
    };
  },
  methods: {
    checkFormSignin(e) {
      e.preventDefault();
      this.errors = [];
      if (!this.signin.email || !this.signin.password) {
        this.errors.push("Tài khoản và mật khẩu không được để trống");
        return;
      }

      if (!this.validEmail(this.signin.email)) {
        this.errors.push("Email không đúng định dạng");
        return;
      }

      this.$axios
        .post("http://192.168.60.69:3000/api/auth/login", {
          email: this.signin.email,
          password: this.signin.password,
        })
        .then(
          (response) => {
              this.status = response.data.status;
              this.token = response.data.data[0].access_token;
              this.$store.state.token = this.token
              if (!this.status) {
                this.errors.push("Tài khoản hoặc mật khẩu không đúng");
                return false;
              }
              this.loggedUser = this.signin.email;
              this.SetStorage();
              this.$router.push({ name: "Home" }).catch((error) => {});
            }
        )
        .catch((error,response) => {
          this.status = error.response.data.status;
          if (!this.status) {
            this.errors.push("Tài khoản hoặc mật khẩu không đúng");
            return false;
          }
        });
    },
    validEmail(email) {
      const reg = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
      return reg.test(email);
    },
    SetStorage() {
      var jsonListAccount = JSON.stringify(this.loggedUser);
      localStorage.setItem("LoggedUser", jsonListAccount);
    },
  },
};
</script>

<style>
body {
  background: #f8f8f8;
  font-size: 14px;
}
.signin-content {
  width: 85%;
  margin: 50px auto;
  background: #fff;
  padding: 60px 0;
  border-radius: 15px;
  box-shadow: 0 0 20px rgb(0, 0, 0, 0.1);
}
.signin-image a {
  display: block;
  color: #333;
  margin-top: 30px;
  text-decoration: underline;
}
.signin-image,
.signin-form {
  padding: 0 80px;
}
.signin-form {
  text-align: left;
}
.signin-form .form-group {
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 1px solid #999;
}
.signin-form .form-group input {
  border: none;
  border-radius: 0;
  outline: 0;
  box-shadow: none;
}
.signin-form .signin-title {
  font-weight: bold;
  font-size: 36px;
}
.signin-form form {
  margin: 40px 0 60px 0;
}
.signin-form form #btn-signin {
  margin-top: 20px;
  opacity: 0.8;
  padding: 10px 30px;
}
.signin-form .social-login svg {
  height: 0.5cm;
  margin-left: 10px;
}
#header {
  display: none;
}
</style>
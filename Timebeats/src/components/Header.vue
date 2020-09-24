<template>
  <header id="header">
    <!-- Banner -->
    <div class="main-header nav nav-item hor-header">
      <div class="container">
        <div class="main-header-left">
          <a class="animated-arrow hor-toggle horizontal-navtoggle">
            <span></span>
          </a>
          <!-- sidebar-toggle-->
          <a class="header-brand" href="#">
            <img src="../assets/vendor/img/brand/logo-white.png" class="desktop-dark" />
            <h1>
              <router-link to="/">Timebeat</router-link>
            </h1>
            <img src="../assets/vendor/img/brand/favicon-white.png" class="desktop-logo-dark" />
          </a>
          <div class="main-header-center ml-4">
            <span id="myInput">https://timebeats.com/ref/y3pwnm</span>
            <span
              style="cursor: pointer;"
              onclick="copyToClipboard('#myInput')"
              class="tag tag-indigo ml-1"
            >Mời Bạn Bè</span>
          </div>
        </div>
        <div class="main-header-right">
          <div class="nav nav-item navbar-nav-right ml-auto">
            <div class="dropdown nav-item main-header-notification">
              <a class="new nav-link" href="#">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="header-icon-svgs feather feather-bell"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                >
                  <path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9" />
                  <path d="M13.73 21a2 2 0 0 1-3.46 0" />
                </svg>
                <span class="pulse"></span>
              </a>
              <div class="dropdown-menu">
                <div class="menu-header-content bg-primary text-left">
                  <div class="d-flex">
                    <h6 class="dropdown-title mb-1 tx-15 text-white font-weight-semibold">Thông báo</h6>
                    <span class="badge badge-pill badge-warning ml-auto my-auto float-right">
                      Đánh
                      dấu tất cả đã đọc
                    </span>
                  </div>
                  <p class="dropdown-title-text subtext mb-0 text-white op-6 pb-0 tx-12"></p>
                </div>

                <div class="dropdown-footer">
                  <a href="#">Xem tất cả</a>
                </div>
              </div>
            </div>
            <div class="dropdown main-profile-menu">
              <a
                class="dropdown-toggle profile-user d-flex"
                id="dropdownUser"
                data-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
              >
                <span><img alt :src="avatar"> {{name}}</span>
              </a>
              <div class="dropdown-menu" aria-labelledby="dropdownUser">
                <router-link tag="a" class="dropdown-item" to="/profile">Thôngtin cá nhân</router-link>
                <a class="dropdown-item" @click="logOut">Đăng xuất</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- Menu -->
    <div class="sticky sticky-pin" style="margin-bottom: 0px;">
      <div class="horizontal-main hor-menu clearfix side-header">
        <div class="horizontal-mainwrapper container clearfix">
          <!--Nav-->
          <nav class="horizontalMenu clearfix">
            <div class="horizontal-overlapbg active"></div>
            <ul class="horizontalMenu-list">
              <li aria-haspopup="true" v-for="item in menu" :key="item.index">
                <router-link class="sub-icon" tag="a" :to="item.link">
                  <div>
                    <i :class="item.icon">{{item.content}}</i>
                    <i :class="item.subIcon"></i>
                  </div>
                </router-link>
                <ul class="sub-menu">
                  <li aria-haspopup="true" v-for="p in item.sub" :key="p.index">
                    <router-link tag="a" :to="p.link">
                      <span>&gt;</span>
                      {{p.content}}
                    </router-link>
                  </li>
                  <li v-if="item.id == 'logout'">
                    <a class="logout" @click="logOut">
                      <span>&gt;</span> Đăng xuất
                    </a>
                  </li>
                </ul>
              </li>
            </ul>
          </nav>
          <!--Nav-->
        </div>
      </div>
    </div>
  </header>
</template>

<script>
export default {
  data() {
    return {
      avatar: 'http://192.168.60.69:3000/' + this.$store.getters.avatar,
      name: this.$store.getters.name,
      menu: [
        { content: " Trang chủ", link: "/", icon: "fa fa-home" },
        { content: " Nhận nhiệm vụ", link: "/task", icon: "fas fa-book-open" },
        { content: " Tạo chiến dịch", link: "/make-camp", icon: "fas fa-ad" },
        { content: " Số dư tài khoản", link: "/wallet", icon: "fas fa-wallet" },
        {
          content: " Thống kê",
          link: "",
          icon: "fas fa-clipboard-list",
          subIcon: "fas fa-angle-down",
          sub: [
            { content: "Thu nhập cá nhân", link: "/personal-income" },
            { content: "Thu nhập nhóm", link: "/group-income" },
          ],
        },
        { content: " Bạn bè", link: "/#", icon: "fas fa-users" },
        {
          content: " Tài Nguyên & Tải về",
          link: "/resource",
          icon: "fas fa-recycle",
        },
        { content: " Hỗ trợ", link: "/faq", icon: "fas fa-question-circle" },
        {
          id: "logout",
          content: " Cài đặt",
          link: "/#",
          icon: "fas fa-sliders-h",
          subIcon: "fas fa-angle-down",
          sub: [
            { content: "Thông tin cá nhân", link: "/profile" },
          ],
        },
      ],
    };
  },
  methods: {
    logOut() {
      localStorage.removeItem("LoggedUser");
      localStorage.removeItem("vuex");
      this.$router.push({ name: "Login" }).catch((error) => {});
      location.reload();
    },
  },
};
</script>

<style>
.logout {
  cursor: pointer;
}
.main-header {
  top: 0;
}
.sub-menu li a:before {
  display: none;
}
.horizontalMenu > .horizontalMenu-list > li > ul.sub-menu > li > a {
  padding-left: 0;
}
.sub-menu li a span {
  padding: 0 10px;
  font-size: 12px;
  font-weight: 600;
}
.dropdown-toggle::after{
  display: none;
}
.main-header .dropdown-menu:after{
  display: none;
}
#dropdownUser{
  display: flex;
  align-items: center;
  cursor: pointer;
  font-weight: 600;
}
.main-profile-menu .dropdown-item:last-child {
    margin-bottom: 0;
    cursor: pointer;
}
.main-profile-menu .dropdown-item:last-child:hover {
    color: #22c03c;
}
</style>
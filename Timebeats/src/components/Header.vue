<template>
  <header id="header" v-if="$route.meta.header">
    <!-- Banner -->
    <div class="main-header nav nav-item hor-header">
      <div class="container">
        <div class="main-header-left">
          <a class="animated-arrow hor-toggle horizontal-navtoggle">
            <span></span>
          </a>
          <!-- sidebar-toggle-->
          <router-link tag="a" to="/">
            <h1 id="logo"><i class="fab fa-tiktok"></i><span>imebeat</span></h1>
          </router-link>
          <div class="main-header-center ml-4">
            <input v-model="codeCopied" id="codeCopied" readonly />
            <span
              style="cursor: pointer"
              @click="copyToClipboard()"
              class="tag tag-indigo ml-1"
              >Mời Bạn Bè</span
            >
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
                    <h6
                      class="dropdown-title mb-1 tx-15 text-white font-weight-semibold"
                    >
                      Thông báo
                    </h6>
                    <span
                      class="badge badge-pill badge-warning ml-auto my-auto float-right"
                    >
                      Đánh dấu tất cả đã đọc
                    </span>
                  </div>
                  <p
                    class="dropdown-title-text subtext mb-0 text-white op-6 pb-0 tx-12"
                  ></p>
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
                <span><img alt :src="avatar" /> {{ name }}</span>
              </a>
              <div class="dropdown-menu" aria-labelledby="dropdownUser">
                <router-link tag="a" class="dropdown-item" to="/profile"
                  >Thôngtin cá nhân</router-link
                >
                <a class="dropdown-item logoutSysAndETS" @click="logOut"
                  >Đăng xuất</a
                >
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- Menu -->
    <div class="sticky sticky-pin" style="margin-bottom: 0px">
      <div class="horizontal-main hor-menu clearfix side-header">
        <div class="horizontal-mainwrapper container clearfix">
          <!--Nav-->
          <nav class="horizontalMenu clearfix">
            <div class="horizontal-overlapbg active"></div>
            <ul class="horizontalMenu-list">
              <li aria-haspopup="true" v-for="item in menu" :key="item.index">
                <router-link class="sub-icon" tag="a" :to="item.link">
                  <div>
                    <i :class="item.icon">{{ item.content }}</i>
                    <i :class="item.subIcon"></i>
                  </div>
                </router-link>
                <ul class="sub-menu">
                  <li aria-haspopup="true" v-for="p in item.sub" :key="p.index">
                    <router-link tag="a" :to="p.link">
                      <span>&gt;</span>
                      {{ p.content }}
                    </router-link>
                  </li>
                  <li v-if="item.id == 'logout'">
                    <a class="logout logoutSysAndETS" @click="logOut">
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
      avatar: "http://192.168.100.11:3000/" + this.$store.getters.avatar,
      name: this.$store.getters.name,
      codeCopied: "https://timebeats.com/ref/y3pwnm",
      menu: [
        { content: " Trang chủ", link: "/", icon: "fa fa-home" },
        { content: " Nhận nhiệm vụ", link: "/task", icon: "fas fa-book-open" },
        { content: " Tạo chiến dịch", link: "/make-camp", icon: "fas fa-ad" },
        { content: " Số dư tài khoản", link: "/wallet", icon: "fas fa-wallet" },
        {
          content: " Thống kê",
          link: "/Statistical",
          icon: "fas fa-clipboard-list",
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
          sub: [{ content: "Thông tin cá nhân", link: "/profile" }],
        },
      ],
    };
  },
  methods: {
    logOut() {
      localStorage.removeItem("LoggedUser");
      localStorage.removeItem("vuex");
      localStorage.removeItem("user");
      this.$router.push({ name: "Login" }).catch((error) => {});
      location.reload();
    },
    copyToClipboard() {
      var copyText = document.getElementById("codeCopied");
      copyText.select();
      copyText.setSelectionRange(0, 99999);
      document.execCommand("copy");
      this.$toast.success("Copy thành công!", {
        position: "top-right",
        timeout: 3000,
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
    },
  },
  mounted() {
    if (this.$store.getters.getLoginUserInfo.google.rt) {
      this.avatar = this.$store.getters.getLoginUserInfo.google.rt.iK;
      this.name = this.$store.getters.getLoginUserInfo.google.rt.Ad;
    }
    if (this.$store.getters.getLoginUserInfo.google.nt) {
      this.avatar = this.$store.getters.getLoginUserInfo.google.nt.ZJ;
      this.name = this.$store.getters.getLoginUserInfo.google.nt.Ad;
    }
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
.dropdown-toggle::after {
  display: none;
}
.main-header .dropdown-menu:after {
  display: none;
}
#dropdownUser {
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
#codeCopied {
  border: none;
  width: 220px;
  outline: none;
  color: #242f48;
  background: none;
}
#logo {
  color: #fff;
  text-shadow: 0 0 5px #22c03c,0 0 10px #22c03c, 0 0 15px #22c03c;
  font-family: cursive;
  font-weight: 800;
}
#logo:hover span{
  color: #22c03c;
  text-shadow: 0 0 30px #22c03c;
  transition: all 500ms ease;
}
#logo:hover i{
  transform: rotate(363deg);
  color: #22c03c;
  text-shadow: 0 0 30px #22c03c;
  transition: all 600ms ease;
}
#logo i{
  margin-right: 1px;
  transform: rotate(3deg);
}
</style>
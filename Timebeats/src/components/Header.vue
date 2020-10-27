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
              <a
                class="new nav-link dropdown-toggle"
                href="#"
                id="message"
                data-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
              >
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
                <span v-if="notify_no_read == 0" class="pulse"></span>
                <span v-else id="count_notify">{{ notify_no_read }}</span>
              </a>
              <div
                class="dropdown-menu"
                aria-labelledby="message"
                id="dropdown-message"
              >
                <div class="menu-header-content text-left">
                  <div class="d-flex">
                    <h6 class="dropdown-title mb-1 tx-15 font-weight-semibold">
                      Thông báo
                    </h6>
                    <span
                      class="badge badge-pill ml-auto my-auto float-right read-all"
                      @click="readAll"
                    >
                      Đánh dấu tất cả đã đọc
                    </span>
                  </div>
                </div>
                <div class="dropdown-body" data-spy="scroll" data-offset="0">
                  <span v-for="(item, index) in notify" :key="index">
                    <p
                      @click="readNotify(item._id, item.type_key)"
                      v-if="item.is_readed"
                      style="background: #fff"
                    >
                      <i class="far fa-comment-dots"></i>
                      <span>{{ item.title.slice(0, 29) }}...</span><br />
                      <span style="padding-left: 44px"
                        >{{ item.content.slice(0, 29) }}...</span
                      >
                    </p>
                    <p
                      @click="readNotify(item._id, item.type_key)"
                      v-if="!item.is_readed"
                      style="background: #f6f6fb"
                    >
                      <i class="far fa-comment-dots"></i>
                      <span>{{ item.title.slice(0, 29) }}...</span><br />
                      <span style="padding-left: 44px"
                        >{{ item.content.slice(0, 29) }}...</span
                      >
                    </p>
                  </span>
                  <p v-if="!notify[0]" class="noNotify">
                    Không có thông báo nào
                  </p>
                </div>
                <div class="dropdown-footer">
                  <router-link tag="a" to="/notify"
                    >Tất cả thông báo</router-link
                  >
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
    <div class="mobile-menu" id="mobile-menu">
      <ul>
        <li>
          <router-link tag="a" to="/Daboard"></router-link>
        </li>
      </ul>
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
        {
          content: " Tài Nguyên & Tải về",
          link: "/resource",
          icon: "fas fa-recycle",
        },
        { content: " Hỗ trợ", link: "/faq", icon: "fas fa-question-circle" },
        {
          id: "logout",
          content: " Cài đặt",
          link: "",
          icon: "fas fa-sliders-h",
          subIcon: "fas fa-angle-down",
          sub: [{ content: "Thông tin cá nhân", link: "/profile" }],
        },
      ],
      notify: [],
      notify_no_read: null,
    };
  },
  methods: {
    logOut() {
      localStorage.clear();
      this.$router.push({ name: "Login" }).catch((error) => {});
      location.reload();
    },
    copyToClipboard() {
      var copyText = document.getElementById("codeCopied");
      copyText.select();
      copyText.setSelectionRange(0, 99999);
      document.execCommand("copy");
      this.$toast.success("Copy thành công!");
    },
    readNotify(id, type_key) {
      this.$store.dispatch("setIdNotify", id);
      this.$store.dispatch("setTypeKey", type_key);
      this.CallAPI("post", "notify/read", { notify_id: id }, (response) => {
        //get count notify is not readed
        this.CallAPI("get", "notify/count-no-read", {}, (response) => {
          this.notify_no_read = response.data.data[0].amount_no_red;
        });
        //get notify list
        this.CallAPI("get", "notify?limit=10&page=1", {}, (response) => {
          this.notify = response.data.data;
        });
      });
      for (let item of this.notify) {
        if (item._id == id) {
          if (item.type == "normal") {
            this.$router.push("/detail-notify").catch((error) => {});
            this.$root.$emit("getDetailNotify", id);
          }
          if (item.type == "new_task") {
            this.$router.push("/detail-task").catch((error) => {});
            this.$root.$emit("getDetailTask", type_key);
          }
        }
      }
    },
    readAll() {
      for (let item of this.notify) {
        this.CallAPI(
          "post",
          "notify/read",
          { notify_id: item._id },
          (response) => {
            this.CallAPI("get", "notify/count-no-read", {}, (response) => {
              this.notify_no_read = response.data.data[0].amount_no_red;
              this.CallAPI("get", "notify?limit=10&page=1", {}, (response) => {
                this.notify = response.data.data;
              });
            });
          }
        );
      }
    },
  },
  mounted() {
    //get api list notify
    this.CallAPI("get", "notify?limit=10&page=1", {}, (response) => {
      this.notify = response.data.data;
    });
    //get notify no read
    this.CallAPI("get", "notify/count-no-read", {}, (response) => {
      this.notify_no_read = response.data.data[0].amount_no_red;
    });
    //get information when login with google
    if (this.$store.getters.getLoginUserInfo) {
      if (this.$store.getters.getLoginUserInfo.google.rt) {
        this.avatar = this.$store.getters.getLoginUserInfo.google.rt.iK;
        this.name = this.$store.getters.getLoginUserInfo.google.rt.Ad;
      }
      if (this.$store.getters.getLoginUserInfo.google.nt) {
        this.avatar = this.$store.getters.getLoginUserInfo.google.nt.ZJ;
        this.name = this.$store.getters.getLoginUserInfo.google.nt.Ad;
      }
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
  text-shadow: 0 0 5px #22c03c, 0 0 10px #22c03c, 0 0 15px #22c03c;
  font-family: cursive;
  font-weight: 800;
}
#logo:hover span {
  color: #22c03c;
  text-shadow: 0 0 30px #22c03c;
  transition: all 500ms ease;
}
#logo:hover i {
  transform: rotate(363deg);
  color: #22c03c;
  text-shadow: 0 0 30px #22c03c;
  transition: all 600ms ease;
}
#logo i {
  margin-right: 1px;
  transform: rotate(3deg);
}
#dropdown-message .menu-header-content {
  padding: 10px;
  border-radius: 0;
}
.dropdown-body .nav .nav-item .dropdown-menu {
  border-radius: 0;
}
#dropdown-message {
  left: -305px !important;
}
.dropdown-body {
  border-top: 1px solid #dce1ef;
  max-height: 370px;
  overflow: scroll;
}
.dropdown-body p {
  padding: 10px;
  margin-bottom: 0;
  cursor: pointer;
}
.dropdown-body span:not(:last-child) p {
  border-bottom: 1px solid #dce1ef;
}
.dropdown-body p span {
  font-weight: 500;
}
.dropdown-body p:hover {
  background: #f6f6fb !important;
  transition: 100ms all ease;
}
.main-header-notification .dropdown-menu {
  width: 350px;
}
.dropdown-body .noNotify:hover {
  background: #fff;
  cursor: default;
}
.horizontalMenu > .horizontalMenu-list > li > ul.sub-menu {
  border: none;
  padding: 0;
}
.horizontalMenu > .horizontalMenu-list > li > ul.sub-menu li:first-child {
  border: 1px solid #ecf0fa;
  border-bottom: none;
}
.horizontalMenu > .horizontalMenu-list > li > ul.sub-menu li:last-child {
  border: 1px solid #ecf0fa;
  border-top: none;
}
#count_notify {
  position: absolute;
  z-index: 999;
  right: 5px;
  font-size: 10px;
  background: #fa3e3e;
  padding: 5px;
  height: 18px;
  line-height: 0.5;
  color: #fff;
  border-radius: 2px;
  display: block;
  top: 0;
}
.header-icon-svgs {
  width: 24px;
  height: 24px;
  color: #5b6e88;
}
.read-all:hover {
  cursor: pointer;
  text-decoration: underline;
}
@media (min-width: 576px) {
  .main-header-notification.show > a::after {
    display: none;
  }
}
</style>
<template>
  <div class="wrapper">
    <side-bar>
      <mobile-menu slot="content"></mobile-menu>
      <sidebar-link to="/admin/overview">
        <i class="nc-icon nc-chart-pie-35"></i>
        <p>Dashboard</p>
      </sidebar-link>
      <sidebar-link to="/admin/task">
        <i class="nc-icon nc-notes"></i>
        <p>Quản lý nhiệm vụ</p>
      </sidebar-link>
      <sidebar-link to="/admin/withdraw">
        <i class="nc-icon nc-money-coins"></i>
        <p>Quản lý rút tiền</p>
      </sidebar-link>
      <sidebar-link to="/admin/request">
        <i class="nc-icon nc-send"></i>
        <p>Xét duyệt</p>
      </sidebar-link>
      <sidebar-link to="/admin/introduced">
        <i class="nc-icon nc-badge"></i>
        <p>Giới thiệu</p>
      </sidebar-link>
      <sidebar-link to="/admin/policy">
        <i class="nc-icon nc-single-copy-04"></i>
        <p>Chính sách</p>
      </sidebar-link>
      <sidebar-link to="/admin/social">
        <i class="nc-icon nc-atom"></i>
        <p>Cập nhật social</p>
      </sidebar-link>
       
      <sidebar-link to="/admin/notifications">
        <i class="nc-icon nc-bell-55"></i>
        <p>Quản lý thông báo</p>
      </sidebar-link>
      <sidebar-link to="/admin/feedback">
        <i class="nc-icon nc-chat-round"></i>
        <p>Hỏi đáp</p>
      </sidebar-link>
      <template slot="bottom-links">
        <sidebar-link class="active"
                      to="/admin/upgrade">
          <i class="nc-icon nc-settings-gear-64"></i>
          <p>Cài đặt hệ thống</p>
        </sidebar-link>
      </template>
    </side-bar>
    <div class="main-panel">
      <top-navbar></top-navbar>

      <dashboard-content @click="toggleSidebar">

      </dashboard-content>

      <content-footer></content-footer>
    </div>
  </div>
</template>
<style lang="scss">

</style>
<script>
  import TopNavbar from './TopNavbar.vue'
  import ContentFooter from './ContentFooter.vue'
  import DashboardContent from './Content.vue'
  import MobileMenu from './MobileMenu.vue'
  export default {
    components: {
      TopNavbar,
      ContentFooter,
      DashboardContent,
      MobileMenu
    },
    mounted() {
      this.$axios
       .post("http://192.168.100.211:3000/api/auth/login", {
          email: 'admin@gmail.com',
          password: '08081999',
        })
        .then((response)=> {
          localStorage.setItem('token', response.data.data[0].access_token)
          localStorage.setItem('id', response.data.data[0]._id)
        })
    },
    methods: {
      toggleSidebar () {
        if (this.$sidebar.showSidebar) {
          this.$sidebar.displaySidebar(false)
        }
      }
    }
  }

</script>

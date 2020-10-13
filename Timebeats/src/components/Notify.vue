<template>
  <div id="message-comp" class="main-content horizontal-content">
    <div class="container">
      <div class="breadcrumb-header justify-content-between">
        <div class="my-auto">
          <div class="d-flex">
            <h4 class="content-title mb-0 my-auto" v-if="notify[0]">Thông báo của bạn</h4>
            <h4 class="content-title mb-0 my-auto" v-else>Hiện tại không có thông báo nào</h4>
          </div>
        </div>
      </div>
      <div class="row row-sm" v-if="notify[0]">
        <div class="col-lg-12 col-md-12">
          <div class="card card-body pd-20 pd-md-40 border shadow-none">
            <div class="dropdown-body" data-spy="scroll" data-offset="0">
              <p v-for="(item,index) in notify" :key="index">
                <i class="far fa-comment-dots"></i>
                {{item}}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      notify: [],
    };
  },
  mounted() {
    //get api notify
    this.$axios
      .get("http://192.168.100.11:3000/api/notify?limit=10&page=1", {
        headers: {
          Authorization:
            this.$store.getters.id + " " + this.$store.getters.token,
        },
      })
      .then((response) => {
        this.notify = response.data.data;
      });
  },
};
</script>

<style>
#message-comp .dropdown-body {
  max-height: 500px;
  overflow: scroll;
  border: none;
}
#message-comp .dropdown-body p {
  padding: 10px;
  margin-bottom: 0;
  cursor: pointer;
  border: none;
  border: 1px solid #dce1ef;
  border-bottom: none;
}
#message-comp .dropdown-body p:last-child {
  border-bottom: 1px solid #dce1ef;
}
#message-comp .dropdown-body p span {
  font-weight: 500;
}
#message-comp .dropdown-body p:hover {
  background: #f6f6fb;
  transition: 100ms all ease;
}
#message-comp .dropdown-body i {
  height: 40px;
  width: 40px;
  text-align: center;
  border-radius: 50%;
  line-height: 40px;
  font-size: 18px;
}
</style>
<template>
  <div id="message-comp" class="main-content horizontal-content">
    <vue-headful title="Thông báo" />
    <div class="container">
      <div class="breadcrumb-header justify-content-between">
        <div class="my-auto">
          <div class="d-flex">
            <h4 class="content-title mb-0 my-auto" v-if="notify[0]">
              Thông báo của bạn
            </h4>
            <h4 class="content-title mb-0 my-auto" v-else>
              Hiện tại không có thông báo nào
            </h4>
          </div>
        </div>
      </div>
      <div class="row row-sm" v-if="notify[0]">
        <div class="col-lg-12 col-md-12">
          <div class="card card-body pd-20 pd-md-40 border shadow-none">
            <div
              class="dropdown-body"
              v-if="!isShow"
              data-spy="scroll"
              data-offset="0"
            >
              <span v-for="(item, index) in notify" :key="index">
                <p
                  @click="readNotify(item._id)"
                  v-if="item.is_readed"
                  style="background: #fff"
                >
                  <i class="far fa-comment-dots"></i>
                  <span>{{ item.title }}</span
                  ><br />
                  <span style="padding-left: 44px">{{ item.content }}</span>
                </p>
                <p
                  @click="readNotify(item._id)"
                  v-if="!item.is_readed"
                  style="background: #f6f6fb"
                >
                  <i class="far fa-comment-dots"></i>
                  <span>{{ item.title }}</span
                  ><br />
                  <span style="padding-left: 44px">{{ item.content }}</span>
                </p>
              </span>
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
      isShow: false,
      idNotify: "",
      detailNotify: [],
    };
  },
  mounted() {
    this.CallAPI("get", "notify?limit=10&page=1", (response) => {
      this.notify = response.data.data;
    }, (error) => {});
  },
  methods: {
    readNotify(id) {
      this.CallAPI("post", "notify/read", { notify_id: id }, (response) => {
        this.$store.dispatch("setIdNotify", id);
        this.CallAPI("get", "notify/count-no-read", {}, (response) => {
          this.notify_no_read = response.data.data[0].amount_no_red;
        }, (error) => {});
        this.CallAPI("get", "notify?limit=10&page=1", {}, (response) => {
          this.notify = response.data.data;
        }, (error) => {});
      });
      for (let item of this.notify) {
        if (item._id == id) {
          if (item.type == "normal") {
            this.$router.push("/detail-notify").catch((error) => {});
            location.reload();
          }
          if (item.type == "new_task") {
            this.$router.push("/detail-task").catch((error) => {});
          }
        }
      }
    },
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
#message-comp .dropdown-body span:last-child p {
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
.detail-notify .title {
  display: block;
  font-size: 16px;
  font-weight: 700;
  text-transform: uppercase;
  margin-bottom: 10px;
  color: #666;
  text-align: center;
}
</style>
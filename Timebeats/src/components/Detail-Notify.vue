<template>
  <div id="Detail-Notify" class="main-content horizontal-content">
    <vue-headful title="Thông báo" />
    <!---->
    <div class="container">
      <div class="breadcrumb-header justify-content-between">
        <div class="my-auto">
          <div class="d-flex">
            <h4 class="content-title mb-0 my-auto">Thông báo của bạn</h4>
          </div>
        </div>
      </div>
      <div class="row row-sm">
        <div class="col-lg-12 col-md-12">
          <div class="card card-body pd-20 pd-md-40 border shadow-none">
            <!---->
            <div class="detail-notify">
              <div v-for="(item, index) in detailNotify" :key="index">
                <p>
                  <span class="title">{{ item.title }}</span>
                  <span class="content">{{ item.content }}</span>
                </p>
              </div>
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
      detailNotify: [],
    };
  },
  mounted() {
    this.CallAPI("get", "notify/detail/" + this.$store.getters.idNotify, {}, (response) => {
        this.detailNotify = response.data.data;
      });

    this.$root.$on("getDetailNotify", (id) => {
      this.CallAPI("get", "notify/detail/" + id, {}, (response) => {
          this.detailNotify = response.data.data;
        });
    });
  },
};
</script>

<style>
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
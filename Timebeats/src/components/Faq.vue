<template>
  <div>
    <vue-headful title="Hỏi đáp" />
    <div class="main-content horizontal-content">
      <div class="container">
        <div class="breadcrumb-header justify-content-between">
          <div class="my-auto">
            <div class="d-flex">
              <h4 class="content-title mb-0 my-auto">Cài đặt tài khoản</h4>
            </div>
          </div>
        </div>
        <div class="row row-sm">
          <div class="col-sm-12">
            <div class="card">
              <div class="card-body">
                <div class="tabs-menu">
                  <ul class="nav nav-tabs profile navtab-custom panel-tabs">
                    <li>
                      <a
                        href="#resource"
                        data-toggle="tab"
                        aria-expanded="false"
                        class="active"
                      >
                        <span class="visible-xs">
                          <i class="fas fa-question-circle"></i>
                        </span>
                        <span class="hidden-xs">HỎI ĐÁP</span>
                      </a>
                    </li>
                    <li>
                      <a
                        href="#feedback"
                        data-toggle="tab"
                        aria-expanded="false"
                      >
                        <span class="visible-xs">
                          <i class="fas fa-comment-dots"></i>
                        </span>
                        <span class="hidden-xs">PHẢN HỒI</span>
                      </a>
                    </li>
                  </ul>
                </div>
                <div
                  class="tab-content border-left border-bottom border-right border-top-0 p-4"
                >
                  <div id="resource" class="tab-pane active">
                    <div class="mb-4 main-content-label">HỎI ĐÁP</div>

                    <div
                      class="eamil-body"
                      v-for="(item, index) in faq"
                      :key="index"
                    >
                      <span class="text-muted mt-1 tx-13 mb-0">{{
                        item.updated_at
                      }}</span>
                      <p>
                        <strong>{{ index + 1 }}. {{ item.title }}</strong>
                      </p>
                      <strong>Đáp:</strong>&nbsp;
                      <p v-html="item.content"></p>
                    </div>
                  </div>
                  <div id="feedback" class="tab-pane">
                    <div class="mb-4 main-content-label">PHẢN HỒI</div>
                  </div>
                  <div
                    id="modal-resource"
                    tabindex="-1"
                    aria-labelledby="exampleModalLabel"
                    aria-hidden="true"
                    class="modal fade"
                  >
                    <div class="modal-dialog">
                      <div class="modal-content">
                        <div class="modal-header">
                          <h5 id class="modal-title">THÊM MỚI TÀI NGUYÊN</h5>
                          <button
                            type="button"
                            data-dismiss="modal"
                            aria-label="Close"
                            class="close"
                          >
                            <span aria-hidden="true">×</span>
                          </button>
                        </div>
                        <div class="modal-body">
                          <div class="card-body">
                            <form
                              action="/social/add-account-social"
                              method="post"
                            >
                              <p class="text-danger"></p>
                              <input
                                type="hidden"
                                name="_token"
                                value="NUsQFF66-HgOai8bOxrFrGkWgHwMqN9FNOwk"
                              />
                              <div class="form-body">
                                <h6 class="card-title">Mạng xã hội</h6>
                                <div class="row">
                                  <div class="col-md-12">
                                    <div class="form-group">
                                      <select
                                        required="required"
                                        name="social_code"
                                        class="form-control"
                                      >
                                        <option value>Tất cả</option>
                                        <option value>Facebook</option>
                                        <option value>Youtube</option>
                                        <option value>TikTok</option>
                                        <option value>ZingMp3</option>
                                        <option value>NhacCuaTui</option>
                                      </select>
                                    </div>
                                  </div>
                                </div>
                                <h5>
                                  Yêu cầu (cung cấp thông tin tài khoản
                                  <b class="text-danger">*</b>)
                                </h5>
                                <div id="requre_area">
                                  <h6 class="card-title user-pass-show">
                                    Tài khoản - Mật khẩu (ex:
                                    timebeat@gmail.com-timebit@tinh)
                                  </h6>
                                  <div class="row user-pass-show">
                                    <div class="col-md-12">
                                      <div class="form-group">
                                        <input
                                          type="text"
                                          name="user-pass"
                                          required="required"
                                          class="form-control"
                                        />
                                      </div>
                                    </div>
                                  </div>
                                  <h6 class="card-title">Cookie</h6>
                                  <div class="row">
                                    <div class="col-md-12">
                                      <div class="form-group">
                                        <textarea
                                          name="cookie"
                                          id
                                          cols="30"
                                          rows="10"
                                          required="required"
                                          class="form-control"
                                        ></textarea>
                                      </div>
                                    </div>
                                  </div>
                                  <h6 class="card-title">Token</h6>
                                  <div class="row">
                                    <div class="col-md-12">
                                      <div class="form-group">
                                        <input
                                          type="text"
                                          name="token"
                                          required="required"
                                          class="form-control"
                                        />
                                      </div>
                                    </div>
                                  </div>
                                </div>
                                <div class="form-actions">
                                  <div class="text-center">
                                    <button type="submit" class="btn btn-info">
                                      Lưu
                                    </button>
                                  </div>
                                </div>
                              </div>
                            </form>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
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
      faq: [],
    };
  },
  beforeMount() {
    this.$axios
      .get("http://192.168.100.11:3000/api/faq", {
        headers: {
          Authorization:
            this.$store.getters.id + " " + this.$store.getters.token,
        },
      })
      .then((response) => {
        this.faq = response.data.data;
      })
  },
};
</script>

<style>
</style>
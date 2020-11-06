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
                      <small class="text-muted mt-1 tx-13 mb-0"
                        >Đã cập nhật lúc
                        {{ formatDate(item.updated_at) }}</small
                      >
                      <p>
                        <strong>{{ index + 1 }}. {{ item.title }}</strong>
                      </p>
                      <strong>Đáp:</strong>&nbsp;
                      <p v-html="item.content"></p>
                    </div>
                  </div>
                  <div id="feedback" class="tab-pane">
                    <div class="mb-4 main-content-label">PHẢN HỒI</div>
                    <div
                      class="card card-body pd-20 pd-md-40 border shadow-none"
                    >
                      <form class="form-horizontal">
                        <label
                          class="main-content-label tx-12 tx-medium tx-gray-600"
                          >Tiêu đề</label
                        >
                        <div class="form-group">
                          <input
                            type="text"
                            placeholder="Tiêu đề"
                            class="form-control"
                            v-model="title"
                          />
                        </div>
                        <div class="form-group">
                          <label
                            class="main-content-label tx-12 tx-medium tx-gray-600"
                            >Nội dung</label
                          >
                          <textarea
                            class="form-control"
                            v-model="content"
                          ></textarea>
                        </div>
                        <div class="form-group">
                          <label
                            class="main-content-label tx-12 tx-medium tx-gray-600"
                            >Ảnh phản hồi</label
                          ><label for="img-inputed" class="label-chooseImg"
                            >Chọn ảnh</label
                          >
                          <input
                            type="file"
                            @change="uploadImage($event)"
                            id="img-inputed"
                            accept="image/*"
                            multiple
                          />
                          <div class="form-control img-feedback">
                            <img
                              v-for="src in url"
                              :key="src"
                              :src="src"
                              data-toggle="modal"
                              data-target="#show-img-modal"
                            />
                            <i
                              v-if="url[0]"
                              class="fas fa-times"
                              @click="deleteImg"
                            ></i>
                          </div>
                          <div
                            class="modal fade"
                            id="show-img-modal"
                            tabindex="-1"
                            aria-labelledby="exampleModalLabel"
                            aria-hidden="true"
                          >
                            <div class="modal-dialog">
                              <div class="modal-content">
                                <div class="modal-header">
                                  <h5 class="modal-title">ẢNH PHẢN HỒI</h5>
                                  <button
                                    type="button"
                                    class="close"
                                    data-dismiss="modal"
                                    aria-label="Close"
                                  >
                                    <span aria-hidden="true">&times;</span>
                                  </button>
                                </div>
                                <div class="modal-body">
                                  <div
                                    id="carouselExampleIndicators"
                                    class="carousel slide"
                                    data-ride="carousel"
                                  >
                                    <div class="carousel-inner">
                                      <div class="carousel-item active">
                                        <img
                                          :src="url[0]"
                                          class="d-block w-100"
                                        />
                                      </div>
                                      <div class="carousel-item" v-if="url[1]">
                                        <img
                                          :src="url[1]"
                                          class="d-block w-100"
                                        />
                                      </div>
                                      <div class="carousel-item" v-if="url[2]">
                                        <img
                                          :src="url[2]"
                                          class="d-block w-100"
                                        />
                                      </div>
                                      <div class="carousel-item" v-if="url[3]">
                                        <img
                                          :src="url[3]"
                                          class="d-block w-100"
                                        />
                                      </div>
                                      <div class="carousel-item" v-if="url[4]">
                                        <img
                                          :src="url[4]"
                                          class="d-block w-100"
                                        />
                                      </div>
                                      <div class="carousel-item" v-if="url[5]">
                                        <img
                                          :src="url[5]"
                                          class="d-block w-100"
                                        />
                                      </div>
                                      <!-- <div
                                        class="carousel-item"
                                        v-for="src in url"
                                        :key="src"
                                      >
                                        <img :src="src" class="d-block w-100" />
                                      </div> -->
                                    </div>
                                    <a
                                      class="carousel-control-prev"
                                      href="#carouselExampleIndicators"
                                      role="button"
                                      data-slide="prev"
                                    >
                                      <span
                                        class="carousel-control-prev-icon"
                                        aria-hidden="true"
                                        ><i class="fas fa-chevron-left"></i
                                      ></span>
                                      <span class="sr-only">Previous</span>
                                    </a>
                                    <a
                                      class="carousel-control-next"
                                      href="#carouselExampleIndicators"
                                      role="button"
                                      data-slide="next"
                                    >
                                      <span
                                        class="carousel-control-next-icon"
                                        aria-hidden="true"
                                        ><i class="fas fa-chevron-right"></i
                                      ></span>
                                      <span class="sr-only">Next</span>
                                    </a>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <p
                          class="text-danger"
                          v-for="item in errors"
                          :key="item"
                        >
                          {{ item }}
                        </p>
                        <div class="form-group mb-0 mt-3 justify-content-end">
                          <div>
                            <button
                              type="submit"
                              class="btn btn-success btn-feedback"
                              @click="feedbackHandle"
                            >
                              Xác nhận
                            </button>
                          </div>
                        </div>
                      </form>
                    </div>
                    <div class="mb-4 main-content-label pad-top-20">
                      DANH SÁCH PHẢN HỒI CỦA BẠN
                    </div>
                    <!-- <div
                      class="card card-body pd-20 pd-md-40 border shadow-none"
                    > -->
                    <table class="table feedback-table" v-if="active">
                      <thead>
                        <tr>
                          <td>STT</td>
                          <td scope="col">Tiêu đề</td>
                          <td scope="col">Trạng thái</td>
                          <td scope="col">Thời gian</td>
                        </tr>
                      </thead>
                      <tbody>
                        <tr
                          v-for="(item, index) in listFeedback"
                          :key="item._id"
                          @click="detailFeedback(item._id)"
                        >
                          <td>{{ index + 1 }}</td>
                          <td>{{ item.title }}</td>
                          <td v-if="item.status == 'answer'">Đã trả lời</td>
                          <td v-else>Đang chờ</td>
                          <td>{{ formatDate(item.created_at) }}</td>
                        </tr>
                      </tbody>
                    </table>

                    <table class="table detail-feedback" v-if="!active">
                      <tbody>
                        <tr>
                          <td class="td-img">
                            <span
                              v-if="!active"
                              id="return-list"
                              @click="returnList"
                              ><i class="fas fa-arrow-left"></i
                            ></span>
                          </td>
                          <td>
                            <h5
                              class="card-title mg-b-20 pad-top-20 tx-gray-600"
                              v-if="!active"
                            >
                              {{ listDetailFeedback.title }}
                            </h5>
                          </td>
                        </tr>
                        <tr>
                          <td rowspan="2" class="td-img pad-top-20">
                            <img class="avatar" alt :src="avatar" />
                          </td>
                          <td class="pad-top-20">
                            <b>{{ name }}</b
                            ><br /><label
                              class="main-content-label tx-12 tx-medium tx-gray-600"
                              >{{
                                formatDate(listDetailFeedback.created_at)
                              }}</label
                            >
                          </td>
                        </tr>
                        <tr>
                          <td class="content">
                            {{ listDetailFeedback.content }}<br />
                            <img
                              class="feedback-img"
                              v-for="img in listDetailFeedback.image"
                              :key="img"
                              :src="img"
                            />
                          </td>
                        </tr>
                        <tr>
                          <td rowspan="20" class="pad-top-20 td-img">
                            <img
                              alt
                              src="https://cf.shopee.vn/file/01566b94a0243a192eae029c72fc4503_tn"
                              class="avatar"
                            />
                          </td>
                          <td class="pad-top-20">
                            <b>Admin</b><br /><label
                              class="tx-12 tx-medium tx-gray-600"
                            >
                              <span v-if="listDetailFeedback.status == 'answer'"
                                >Đã trả lời</span
                              >
                              <span v-else>Đang chờ...</span>
                            </label>
                          </td>
                        </tr>
                        <tr
                          v-for="item in listDetailFeedback.activity"
                          :key="item._id"
                        >
                          <td v-html="item.content"></td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                  <!-- </div> -->
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
      avatar: "",
      name: "",
      title: "",
      content: "",
      srcImg: {},
      listSrcImg: [],
      url: [],
      errors: [],
      listFeedback: [],
      active: true,
      listDetailFeedback: [],
      faq: [],
    };
  },
  mounted() {
    this.CallAPI(
      "get",
      "faq/feedback",
      {},
      (response) => {
        this.listFeedback = response.data.data;
      },
      (error) => {}
    );
    this.CallAPI(
      "get",
      "faq",
      {},
      (response) => {
        this.faq = response.data.data;
      },
      (error) => {}
    );
    this.CallAPI("get", "user/my-profile", {}, (response) => {
      const profile = response.data.data[0];
      this.avatar = profile.avatar;
      this.name = profile.display_name;
    });
  },
  methods: {
    uploadImage(event) {
      this.srcImg = event.target.files[0];
      this.listSrcImg.push(this.srcImg);
      this.url.push(URL.createObjectURL(this.srcImg));
    },
    feedbackHandle(e) {
      e.preventDefault();
      this.errors = [];
      if (!this.title || !this.content) {
        this.errors.push("Vui lòng nhập đủ thông tin !");
        return;
      }

      console.log(this.listSrcImg);
      let data = new FormData();
      data.append("title", this.title);
      data.append("content", this.content);
      for (let image of this.listSrcImg) {
        data.append("image", image);
      }

      this.CallAPI(
        "post",
        "faq/feedback",
        data,
        (response) => {
          this.$toast.success("Gửi phản hồi thành công!");
          this.title = "";
          this.content = "";
          this.url = [];
          this.CallAPI("get", "faq/feedback", {}, (response) => {
            this.listFeedback = response.data.data;
          });
        },
        (error) => {}
      );
    },
    deleteImg() {
      this.url = [];
    },
    formatDate(value) {
      return (
        new Date(value).toLocaleTimeString() +
        "s " +
        new Date(value).toLocaleDateString()
      );
    },
    detailFeedback(id) {
      this.active = false;
      this.CallAPI(
        "get",
        `faq/feedback-detail/${id}`,
        {},
        (response) => {
          this.listDetailFeedback = response.data.data[0];
        },
        (error) => {}
      );
    },
    returnList() {
      this.active = true;
    },
  },
};
</script>

<style>
#feedback textarea {
  height: 100px;
}
#feedback .card {
  width: 52%;
  margin: 0 auto;
}
#list-feedback i {
  font-size: 15px;
  margin-right: 5px;
}
#list-feedback p {
  margin-left: 20px;
  font-size: 12px;
}
.img-feedback {
  height: auto;
  min-height: 50px;
}
.img-feedback img {
  max-width: 50px;
  max-height: 50px;
  margin-right: 10px;
  cursor: pointer;
}
.img-feedback i:hover {
  opacity: 0.8;
  transition: all 100ms ease;
}
.img-feedback i {
  float: right;
  cursor: pointer;
}
#img-inputed {
  display: none;
}
#show-img-modal img {
  max-width: 500px;
  max-height: 500px;
  display: block;
  margin: 0 auto;
}
.carousel-control-next-icon i,
.carousel-control-prev-icon i {
  font-size: 40px;
  color: #333;
}
.feedback-table thead td {
  height: 40px;
  line-height: 40px;
  color: #fff;
  text-align: center;
}
.feedback-table thead {
  background: #22c03c;
}
.feedback-table tbody tr:hover {
  cursor: pointer;
  border: none;
  box-shadow: inset 0 1px 0 0 #dadce0, inset 0 -1px 0 0 #dadce0,
    0 1px 2px 0 rgba(60, 64, 67, 0.3), 0 1px 3px 1px rgba(60, 64, 67, 0.15);
}
.feedback-table tbody tr td:not(:nth-child(2)) {
  text-align: center;
}
#return-list {
  display: block;
  height: 40px;
  width: 40px;
  text-align: center;
  line-height: 40px;
  cursor: pointer;
  border-radius: 50%;
  color: #666;
  transition: 200ms all ease;
  font-size: 18px;
  margin-top: 8px;
}
#return-list:hover {
  color: rgb(80, 80, 80);
}
.detail-feedback img.avatar {
  height: 40px;
  width: 40px;
  border-radius: 50%;
}
.detail-feedback tr:not(:nth-child(4)) td {
  border: none;
}
.detail-feedback tr:nth-child(1) td {
  border-top: 1px solid #dde2ef;
}
.detail-feedback tr:nth-child(2) td {
  border-top: 1px solid #dde2ef;
}
.detail-feedback td {
  padding: 5px 20px;
}
.detail-feedback .td-img {
  width: 40px;
  padding: 5px 0;
  border-top: 1px solid #dde2ef;
  vertical-align: top;
}
.detail-feedback .content {
  padding-bottom: 20px;
}
.pad-top-20 {
  padding-top: 20px;
}
.detail-feedback .pad-top-20 {
  padding-top: 20px;
}
.btn-feedback {
  margin: 0 auto;
  display: block;
}
.label-chooseImg {
  margin-left: 10px;
  background: dimgrey;
  cursor: pointer;
  padding: 4px 10px;
  color: #fff;
  border-radius: 3px;
}
.detail-feedback .feedback-img {
  border-radius: 0;
  margin: 10px;
  height: 100px;
  max-width: 100px;
  margin-left: 0px;
}
@media (min-width: 576px) {
  #show-img-modal .modal-dialog {
    max-width: 55%;
  }
}
</style>
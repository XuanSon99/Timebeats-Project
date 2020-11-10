<template>
  <div>
    <vue-headful title="Tài Nguyên" />
    <div class="main-content horizontal-content">
      <!-- container opened -->
      <div class="container">
        <!-- breadcrumb -->
        <div class="breadcrumb-header justify-content-between">
          <div class="my-auto">
            <div class="d-flex">
              <h4 class="content-title mb-0 my-auto">Cài đặt tài khoản</h4>
            </div>
          </div>
        </div>
        <!-- breadcrumb -->
        <div class="row row-sm">
          <div class="col-sm-12">
            <div class="card">
              <div class="card-body">
                <div class="tabs-menu">
                  <!-- Tabs -->
                  <ul class="nav nav-tabs profile navtab-custom panel-tabs">
                    <li>
                      <a
                        href="#resource"
                        class="active"
                        data-toggle="tab"
                        aria-expanded="false"
                      >
                        <span class="visible-xs">
                          <i class="fas fa-code"></i>
                        </span>
                        <span class="hidden-xs">QUẢN LÝ TÀI NGUYÊN</span>
                      </a>
                    </li>
                    <li>
                      <a href="#tool" data-toggle="tab" aria-expanded="false">
                        <span class="visible-xs">
                          <i class="fas fa-cloud-download-alt"></i>
                        </span>
                        <span class="hidden-xs">CÔNG CỤ</span>
                      </a>
                    </li>
                  </ul>
                </div>
                <div
                  class="tab-content border-left border-bottom border-right border-top-0 p-4"
                >
                  <div class="tab-pane active" id="resource">
                    <div class="mb-4 main-content-label">
                      QUẢN LÝ TÀI NGUYÊN
                    </div>
                    <div class="form-group">
                      <label for>Nền tảng</label>
                      <select
                        name
                        id
                        class="form-control"
                        style="margin-bottom: 10px"
                        v-model="selected"
                      >
                        <option value="all">Tất cả</option>
                        <option
                          v-for="item in info"
                          :key="item._id"
                          :value="item.code"
                        >
                          {{ item.name }}
                        </option>
                      </select>
                    </div>
                    <div class="form-group download">
                      <button
                        aria-expanded="false"
                        aria-haspopup="true"
                        class="btn ripple btn-success"
                        type="button"
                        data-toggle="modal"
                        data-target="#modal-resource"
                        style="float: right"
                      >
                        <i class="fas fa-plus-circle"></i> Thêm tài nguyên
                      </button>
                      <div class="load btn btn-success" @click="download">
                        <i class="fas fa-cloud-download-alt"></i>
                        <span>Tải về</span>
                      </div>
                    </div>
                    <div class="table-responsive scroll">
                      <table
                        class="table text-md-nowrap data-table table-bordered table-hover resource-table"
                        id="statistic"
                      >
                        <thead>
                          <tr>
                            <th class="wd-10p border-bottom-0">STT</th>
                            <th class="wd-10p border-bottom-0">NỀN TẢNG</th>
                            <th class="wd-10p border-bottom-0">TRẠNG THÁI</th>
                            <th class="wd-10p border-bottom-0">TÀI KHOẢN</th>
                            <th class="wd-10p border-bottom-0">NGÀY TẠO</th>
                            <th class="wd-10p border-bottom-0">CÔNG CỤ</th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr
                            v-for="(item, index) in data"
                            :key="index"
                            v-show="
                              selected == item.social_code || selected == 'all'
                            "
                          >
                            <td scope="row">{{ index + 1 }}</td>
                            <td>{{ item.social_code }}</td>
                            <td>
                              <span v-if="(item.status = 'available')"
                                >Sẵn sàng</span
                              >
                            </td>
                            <td>
                              <img
                                :src="item.account_profile.avatarUri[0]"
                                alt=""
                                class="avatar-social"
                              />
                              <span class="name-social">{{
                                item.account_profile.uniqueId
                              }}</span>
                            </td>
                            <td>{{ formatDate(item.updated_at) }}</td>
                            <td>
                              <button
                                type="button"
                                class="btn btn-danger"
                                @click="deleteAccountSocial(item._id)"
                              >
                                <i class="fas fa-trash-alt"></i>
                              </button>
                            </td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                    <div id="download-table">
                      <!-- <table
                        class="table text-md-nowrap data-table table-bordered table-hover"
                        id="statistic"
                      >
                        <tr>
                          <th class="wd-10p border-bottom-0">STT</th>
                          <th class="wd-10p border-bottom-0">NỀN TẢNG</th>
                          <th class="wd-10p border-bottom-0">TRẠNG THÁI</th>
                          <th class="wd-10p border-bottom-0">TÀI KHOẢN</th>
                          <th class="wd-10p border-bottom-0">NGÀY TẠO</th>
                        </tr>
                        <tr v-for="(item, index) in posts" :key="index">
                          <td>{{ index + 1 }}</td>
                          <td>{{ item.name }}</td>
                          <td>{{ item.status }}</td>
                          <td v-html="item.user"></td>
                          <td>{{ formatDate(item.date) }}</td>
                        </tr>
                      </table> -->
                      <table
                        class="table text-md-nowrap data-table table-bordered table-hover resource-table"
                        id="statistic"
                      >
                        <thead>
                          <tr>
                            <th class="wd-10p border-bottom-0">STT</th>
                            <th class="wd-10p border-bottom-0">NỀN TẢNG</th>
                            <th class="wd-10p border-bottom-0">TRẠNG THÁI</th>
                            <th class="wd-10p border-bottom-0">TÀI KHOẢN</th>
                            <th class="wd-10p border-bottom-0">NGÀY TẠO</th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr v-for="(item, index) in data" :key="index">
                            <td scope="row">{{ index + 1 }}</td>
                            <td>{{ item.social_code }}</td>
                            <td>
                              <span v-if="(item.status = 'available')"
                                >Sẵn sàng</span
                              >
                            </td>
                            <td style="display: flex; align-items: center">
                              <img
                                :src="item.account_profile.avatarUri[0]"
                                alt=""
                                class="avatar-social"
                                style="
                                  width: 50px;
                                  height: 50px;
                                  border-radius: 50%;
                                "
                              />
                              <span class="name-social">{{
                                item.account_profile.uniqueId
                              }}</span>
                            </td>
                            <td>{{ formatDate(item.updated_at) }}</td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </div>
                  <!-- Modal -->
                  <div
                    class="modal fade"
                    id="modal-resource"
                    tabindex="-1"
                    aria-labelledby="exampleModalLabel"
                    aria-hidden="true"
                  >
                    <div class="modal-dialog">
                      <div class="modal-content">
                        <div class="modal-header">
                          <h5 class="modal-title" id>THÊM MỚI TÀI NGUYÊN</h5>
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
                                        class="form-control"
                                        required
                                        name="social_code"
                                        :selected="selected"
                                        v-model="selected_add"
                                      >
                                        <option value="all">Tất cả</option>
                                        <option
                                          v-for="item in info"
                                          :key="item._id"
                                          :data-id="item._id"
                                          :value="item.code"
                                        >
                                          {{ item.name }}
                                        </option>
                                      </select>
                                    </div>
                                  </div>
                                </div>
                                <h5>
                                  Yêu cầu bạn phải đăng nhập tài khoản vào trình
                                  duyệt đang sử dụng (cung cấp thông tin tài
                                  khoản
                                  <b class="text-danger">*</b>)
                                </h5>
                                <div class="form-actions">
                                  <div class="text-center">
                                    <button
                                      type="button"
                                      class="btn btn-info"
                                      id="AddAccountSocialBtn"
                                    >
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
                  <div class="tab-pane" id="tool">
                    <div class="mb-4 main-content-label">CÔNG CỤ TỰ ĐỘNG</div>
                    <div
                      class="make-camp card card-body pd-20 pd-md-40 border shadow-none"
                    >
                      <form>
                        <div class="form-group">
                          <label
                            class="main-content-label tx-12 tx-medium tx-gray-600"
                            >Chọn nền tảng</label
                          >
                          <select
                            class="form-control"
                            v-model="social"
                            style="margin-bottom: 10px"
                          >
                            <option disabled value>
                              Chọn mạng xã hội cần chạy
                            </option>
                            <option v-for="list in socialList" :key="list._id">
                              {{ list.code }}
                            </option>
                          </select>
                        </div>

                        <div
                          class="socialList"
                          v-for="list in socialList"
                          :key="list._id"
                        >
                          <div class="card" v-if="social == list.code">
                            <div class="card-body">
                              <h4 class="card-title append-social-function">
                                Chức năng của
                                <b class="social_name">{{ list.name }}</b>
                              </h4>
                              <div class="area_functoin_social">
                                <div
                                  class="custom-control custom-checkbox"
                                  v-for="func in list.function"
                                  :key="func.key"
                                >
                                  <input
                                    type="checkbox"
                                    :id="func.key"
                                    class="custom-control-input"
                                    v-model="checkedFunction"
                                    :value="func.key"
                                  />
                                  <label
                                    class="custom-control-label"
                                    :for="func.key"
                                    >{{ func.key }}
                                  </label>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div class="form-group">
                          <label
                            class="main-content-label tx-12 tx-medium tx-gray-600"
                            >Nhập link</label
                          >
                          <input
                            type="text"
                            class="form-control"
                            v-model="link"
                            id="link"
                          />
                        </div>
                        <label
                          class="main-content-label tx-12 tx-medium tx-gray-600"
                          >Ngày bắt đầu</label
                        >
                        <div class="form-group">
                          <Datepicker
                            v-model="start_date"
                            class="birthday-box"
                            :format="customFormatter"
                            @closed="changeBirthday"
                          ></Datepicker>
                        </div>
                        <label
                          class="main-content-label tx-12 tx-medium tx-gray-600"
                          >Thời gian bắt đầu</label
                        >
                        <div class="form-group">
                          <vue-timepicker v-model="start_time"></vue-timepicker>
                        </div>
                        <p
                          class="text-danger"
                          v-for="item in error"
                          :key="item"
                        >
                          {{ item }}
                        </p>
                        <div class="form-group">
                          <button
                            class="btn btn-success btn-makecamp"
                            @click="toolHandle"
                          >
                            Xác nhận
                          </button>
                        </div>
                      </form>
                    </div>
                    <h5 class="card-title mg-b-20">DANH SÁCH</h5>
                    <button
                      id="reload_storage"
                      style="display: none"
                      @click="reload_storage"
                    ></button>
                    <div class="table-responsive">
                      <table
                        id="resource-tool"
                        class="table text-md-nowrap data-table table-bordered table-hover"
                      >
                        <thead class="text-center">
                          <tr>
                            <th>STT</th>
                            <th>Nền tảng</th>
                            <th>Chức năng</th>
                            <th>Link</th>
                            <th>Thời gian</th>
                            <th>Thao tác</th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr v-for="(item, index) in dataList" :key="index">
                            <td class="text-center">{{ index + 1 }}</td>
                            <td>{{ item.social }}</td>
                            <td>
                              <span
                                class="require"
                                v-for="req in item.function"
                                :key="req"
                                >{{ req }}</span
                              >
                            </td>
                            <td>{{ item.link }}</td>
                            <td>
                              {{ item.start_time }} / {{ item.start_date }}
                            </td>
                            <td>
                              <span
                                class="tag tag-danger tag-center"
                                @click="deleteTool(index)"
                                ><a style="color: white; cursor: pointer"
                                  >Xóa</a
                                ></span
                              >
                            </td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                    <h5 class="card-title mg-b-20">ĐÃ CHẠY</h5>
                    <div class="table-responsive">
                      <table
                        id="resource-tool"
                        class="table text-md-nowrap data-table table-bordered table-hover"
                      >
                        <thead class="text-center">
                          <tr>
                            <th>STT</th>
                            <th>Nền tảng</th>
                            <th>Chức năng</th>
                            <th>Link</th>
                            <th>Thời gian</th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr
                            v-for="(item, index) in dataRuningList"
                            :key="index"
                          >
                            <td class="text-center">{{ index + 1 }}</td>
                            <td>{{ item.social }}</td>
                            <td>
                              <span
                                class="require"
                                v-for="req in item.function"
                                :key="req"
                                >{{ req }}</span
                              >
                            </td>
                            <td>{{ item.link }}</td>
                            <td>
                              {{ item.start_time }} / {{ item.start_date }}
                            </td>
                          </tr>
                        </tbody>
                      </table>
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
import Vue from "vue";
import VueMoment from "vue-moment";
import moment from "moment-timezone";
Vue.use(VueMoment, {
  moment,
});
import Datepicker from "vuejs-datepicker";
import VueTimepicker from "vue2-timepicker";
export default {
  components: {
    Datepicker,
    VueTimepicker,
  },
  data() {
    return {
      info: [],
      selected: "all",
      page: 1,
      account: [],
      posts: [],
      perPage: 1,
      pages: [],
      data: [],
      selected_add: "all",
      socialList: [],
      checkedFunction: [],
      social: "",
      link: "",
      makeCampErrors: [],
      start_date: "",
      start_time: "",
      dataList: [],
      error: [],
      dataList: [],
      dataRuningList: [],
    };
  },
  mounted() {
    if (JSON.parse(localStorage.getItem("resource/tool"))) {
      this.dataList = JSON.parse(localStorage.getItem("resource/tool"));
    }
    if (JSON.parse(localStorage.getItem("resource/tool/run"))) {
      this.dataRuningList = JSON.parse(
        localStorage.getItem("resource/tool/run")
      );
    }
    this.CallAPI("get", "social/list", {}, (response) => {
      this.socialList = response.data.data;
    });
    this.CallAPI("get", "social/list-account", {}, (response) => {
      this.account = response.data.data;
      this.data = response.data.data;
    });
    this.CallAPI("get", "social/list", {}, (response) => {
      this.info = response.data.data;
      this.SetStorage();
    });
  },
  methods: {
    deleteTool(value) {
      this.dataList = this.dataList.filter((item, index) => index != value);
      localStorage.setItem("resource/tool", JSON.stringify(this.dataList));
    },
    customFormatter() {
      return moment(this.start_date).format("DD/MM/YYYY");
    },
    changeBirthday() {
      var dd = String(this.start_date.getDate()).padStart(2, "0");
      var mm = String(this.start_date.getMonth() + 1).padStart(2, "0");
      var yyyy = this.start_date.getFullYear();
      this.start_date = yyyy + "-" + mm + "-" + dd;
    },
    toolHandle(e) {
      e.preventDefault();
      this.error = [];
      if (
        !this.checkedFunction[0] ||
        !this.link ||
        !this.start_time ||
        !this.start_date
      ) {
        this.error.push("Vui lòng nhập đủ thông tin");
        return;
      }
      const data = {
        social: this.social,
        function: this.checkedFunction,
        link: this.link,
        start_date: this.start_date,
        start_time: this.start_time,
      };
      if (localStorage.getItem("resource/tool")) {
        this.dataList = JSON.parse(localStorage.getItem("resource/tool"));
      }
      this.dataList.push(data);
      localStorage.setItem("resource/tool", JSON.stringify(this.dataList));
    },
    getPosts() {
      this.data = JSON.parse(localStorage.getItem("Data")) || []; // get storage
      for (let item of this.data) {
        let user = "";
        for (let userI in item.account_profile) {
          user += "<p>" + userI + ": " + item.account_profile[userI] + "</p>";
        }
        this.posts.push({
          name: item.social_code,
          status: item.status,
          id: item._id,
          date: item.created_at,
          user: user,
        });
      }
    },
    setPages() {
      let numberOfPages = Math.ceil(this.posts.length / this.perPage);
      for (let index = 1; index <= numberOfPages; index++) {
        this.pages.push(index);
      }
    },
    paginate(posts) {
      let page = this.page;
      let perPage = this.perPage;
      let from = page * perPage - perPage;
      let to = page * perPage;

      return posts.slice(from, to);
    },
    SetStorage() {
      var jsonListAccount = JSON.stringify(this.data);
      localStorage.setItem("Data", jsonListAccount);
    },
    deleteAccountSocial(id) {
      if (confirm("Bạn chắc chắn muốn xóa?")) {
        this.CallAPI(
          "delete",
          `social/delete-account/${id}`,
          {},
          (response) => {
            this.$toast.success("Xóa thành công !");
            this.CallAPI("get", "social/list-account", {}, (response) => {
              this.account = response.data.data;
              this.data = response.data.data;
            });
          },
          (error) => {
            this.$toast.error("Không được phép !");
          }
        );
      }
    },
    addAccountSocial() {
      var addTiktok = new toktok();
      addTiktok.init();
      let social = this.selected_add;
      chrome.console.log({ social });
      location.reload();
    },
    download() {
      var printWindow = window.open("", "", "height=400,width=1200");
      printWindow.document.write("<html><head><title>List Account</title>");
      printWindow.document.write(
        "<style>table,td,th{border: 1px solid #ddd;text-align: left;}table {border-collapse: collapse;width: 100%;}th, td {padding: 15px;}</style>"
      );
      printWindow.document.write("</head><body>");
      printWindow.document.write(
        this.$el.querySelector("#download-table").innerHTML
      );
      printWindow.document.write("</body></html>");
      printWindow.focus();
      printWindow.print();
      printWindow.close();
    },
    formatDate(value) {
      return new Date(value).toLocaleDateString();
    },
    reload_storage() {
      if (JSON.parse(localStorage.getItem("resource/tool"))) {
        this.dataList = JSON.parse(localStorage.getItem("resource/tool"));
      }
      if (JSON.parse(localStorage.getItem("resource/tool/run"))) {
        this.dataRuningList = JSON.parse(
          localStorage.getItem("resource/tool/run")
        );
      }
    },
  },
  computed: {
    displayedPosts() {
      return this.paginate(this.posts);
    },
  },
  watch: {
    posts() {
      this.setPages();
    },
  },
  created() {
    this.getPosts();
  },
  filters: {
    trimWords(value) {
      return value.split(" ").splice(0, 20).join(" ") + "...";
    },
  },
};
</script>

<style>
.tag-center {
  margin: 0 auto;
  display: block;
  max-width: 50px;
  text-align: center;
}
.tab-content .img {
  display: flex;
}
.paginate {
  display: flex;
}
.paginate li {
  position: relative;
  display: block;
  padding: 0.5rem 0.75rem;
  margin-left: -1px;
  line-height: 1.25;
  color: #007bff;
  background-color: #fff;
  border: 1px solid #dee2e6;
}
.paginate li a {
  display: block;
}
.paginate .active {
  background-color: #22c03c;
}
.paginate .active a {
  color: #fff;
}
.page-item:nth-child(2) {
  display: flex;
}
.pagination {
  height: 30px;
  overflow: hidden;
  font-size: 12px;
  display: flex;
  justify-content: center;
  margin-top: 20px;
  margin-bottom: 0;
}
button.page-link {
  font-size: 14px;
  color: #22252f;
  font-weight: 500;
  border: none;
  height: 30px;
  border-radius: 0;
  outline: none;
  background: #fff;
}
.previous button.page-link {
  padding: 0 35px;
}
.next button.page-link {
  padding: 0 35px;
}
.pagination .page-item:last-child .page-link,
.pagination .page-item:first-child .page-link {
  border-radius: 0;
}
.pagination .page-link:hover {
  background-color: #ecf0fa !important;
  border: 1px solid #cdd7ef !important;
  color: #22252f;
}
.pagination .page-link {
  background-color: #fff;
  border: 1px solid #cdd7ef;
}
.download {
  display: flex;
  text-align: right;
  justify-content: flex-end;
}
.download .load {
  margin-left: 10px;
  display: flex;
  align-items: center;
  padding: 0 15px;
  cursor: pointer;
  border-bottom: 0;
  color: #fff;
  border-top-left-radius: 7px;
  border-top-right-radius: 7px;
}
.download .load > * {
  margin: 0 5px;
}
.download .load span {
  color: #fff;
}
#download-table {
  display: none;
}
.avatar-social {
  max-width: 40px;
  border-radius: 50%;
  margin-right: 5px;
}
.name-social {
  font-weight: 500;
  text-transform: uppercase;
}
.resource-table th {
  text-align: center;
}
.resource-table tbody td {
  line-height: 35px;
  text-align: center;
}
button {
  margin-top: 0 !important;
}
.socialList {
  box-shadow: -8px 12px 18px 0 #dadee8;
  border-radius: 5px;
}
.socialList .card {
  border-radius: 5px;
}
.make-camp {
  width: 52%;
  margin: 30px auto;
}
.form-group {
  margin-bottom: 1rem !important;
}
.btn-makecamp {
  margin: 0 auto;
  display: block;
  margin-top: 1rem !important;
}
.birthday-box input {
  height: 50px;
  display: block;
  width: 100%;
  font-size: 0.875rem;
  font-weight: 400;
  line-height: 1.5;
  color: #4d5875;
  background-color: #fff;
  background-clip: padding-box;
  border: 1px solid #e1e5ef;
  border-radius: 3px;
  outline: none;
  cursor: pointer;
  padding: 0 10px;
}
.vue__time-picker {
  width: 100%;
  height: 50px;
}
.vue__time-picker input.display-time {
  width: 100%;
  height: 50px;
  outline: none;
  cursor: pointer;
  border: 1px solid #e1e5ef;
  border-radius: 3px;
}
.vue__time-picker .dropdown {
  top: 50px;
}
#resource-tool td {
  vertical-align: middle;
}
#resource-tool .require {
  background: #fbbc0b;
  margin-left: 5px;
  padding: 2px 10px;
  border-radius: 3px;
  color: #fff;
}
</style>
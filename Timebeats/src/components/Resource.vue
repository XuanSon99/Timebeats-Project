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
                      <a
                        href="#downExtension"
                        data-toggle="tab"
                        aria-expanded="false"
                      >
                        <span class="visible-xs">
                          <i class="fas fa-cloud-download-alt"></i>
                        </span>
                        <span class="hidden-xs">TẢI VỀ</span>
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
                        id
                        type="button"
                        data-toggle="modal"
                        data-target="#modal-resource"
                        style="float: right"
                      >
                        + Thêm tài nguyên
                      </button>
                      <div class="load btn btn-success" @click="download">
                        <i class="fas fa-cloud-download-alt"></i>
                        <span>Tải về</span>
                      </div>
                    </div>
                    <div
                      class="table-responsive"
                      v-for="(item, index) in data"
                      :key="index"
                    >
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
                          <tr v-if="selected == item.social_code || selected == 'all'">
                            <td scope="row">{{ index + 1 }}</td>
                            <td>{{ item.social_code }}</td>
                            <td><span v-if="item.status = 'available'">Sẵn sàng</span></td>
                            <td>
                              <img :src="item.account_profile.avatarUri[0]" alt="" class="avatar-social">
                              <span class="name-social">{{item.account_profile.uniqueId}}</span>
                            </td>
                            <td>{{ formatDate(item.updated_at) }}</td>
                            <td>
                              <span class="tag tag-danger tag-center">
                                <a
                                  style="color: white; cursor: pointer"
                                  @click="deleteAccountSocial(item._id)"
                                  >Xóa</a
                                >
                              </span>
                            </td>
                          </tr>
                        </tbody>
                      </table>
                      <nav aria-label="Page navigation example">
                        <ul
                          class="pagination"
                          v-if="selected == item.social_code || selected == 'all'"
                        >
                          <li class="page-item previous">
                            <button
                              type="button"
                              class="page-link"
                              v-if="page != 1"
                              @click="page--"
                            >
                              Previous
                            </button>
                          </li>
                          <li class="page-item">
                            <button
                              type="button"
                              class="page-link"
                              v-for="(pageNumber, index) in pages.slice(
                                page - 1,
                                page + 5
                              )"
                              :key="index"
                              @click="page = pageNumber"
                            >
                              {{ pageNumber }}
                            </button>
                          </li>
                          <li class="page-item next">
                            <button
                              type="button"
                              @click="page++"
                              v-if="page < pages.length"
                              class="page-link"
                            >
                              Next
                            </button>
                          </li>
                        </ul>
                      </nav>
                    </div>
                    <div id="download-table">
                      <table
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
                      </table>
                    </div>
                  </div>
                  <div class="tab-pane" id="downExtension">
                    <div class="mb-4 main-content-label">CÀI ĐẶT EXTENSION</div>
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
                                duyệt đang sử dụng (cung cấp thông tin tài khoản
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
      info: [],
      selected: "all",
      page: 1,
      account: [],
      posts: [],
      perPage: 1,
      pages: [],
      data: [],
      selected_add: "all",
    };
  },
  beforeMount() {
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
      this.CallAPI(
        "delete",
        `social/delete-account/${id}`,
        {},
        (response) => {
          this.$toast.success("Xóa thành công !");
        },
        (error) => {
          this.$toast.error("Không được phép !");
        }
      );
    },
    addAccountSocial() {
      var addTiktok = new toktok();
      addTiktok.init();
      let social = this.selected_add;
      chrome.console.log({ social });
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
    formatDate(value){
      return new Date(value).toLocaleDateString()
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
.avatar-social{
  max-width: 40px;
  border-radius: 50%;
  margin-right: 5px;
}
.name-social{
  font-weight: 500;
  text-transform: uppercase;
}
.resource-table th{
  text-align: center;
}
.resource-table tbody td{
  line-height: 35px;
  text-align: center;
}
</style>
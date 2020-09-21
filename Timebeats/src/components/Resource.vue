<template>
  <div>
    <Header />
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
                    <li class>
                      <a href="#resource" class="active" data-toggle="tab" aria-expanded="false">
                        <span class="visible-xs">
                          <i class="fas fa-code"></i>
                        </span>
                        <span class="hidden-xs">QUẢN LÝ TÀI NGUYÊN</span>
                      </a>
                    </li>
                    <li class>
                      <a href="#download" data-toggle="tab" aria-expanded="false">
                        <span class="visible-xs">
                          <i class="fas fa-download"></i>
                        </span>
                        <span class="hidden-xs">TẢI VỀ</span>
                      </a>
                    </li>
                  </ul>
                </div>
                <div class="tab-content border-left border-bottom border-right border-top-0 p-4">
                  <div class="tab-pane active" id="resource">
                    <div class="mb-4 main-content-label">QUẢN LÝ TÀI NGUYÊN</div>
                    <div class="form-group">
                      <label for>Nền tảng</label>
                      <select name id class="form-control" style="margin-bottom: 10px;" v-model="selected">
                        <option value="all" >Tất cả</option>
                        <option value="FB">Facebook</option>
                        <option value="ytb">Youtube</option>
                        <option value="TIKTOK">TikTok</option>
                        <option value="ig">Instagram</option>
                        <option value="nct">NhacCuaTui</option>
                        <option value="zing">ZingMp3</option>
                      </select>
                    </div>
                    <div class="form-group">
                      <button
                        aria-expanded="false"
                        aria-haspopup="true"
                        class="btn ripple btn-primary"
                        id
                        type="button"
                        data-toggle="modal"
                        data-target="#modal-resource"
                        style="float: right;"
                      >+ Thêm tài nguyên</button>
                    </div>
                    <div class="table-responsive">
                      <table
                        class="table text-md-nowrap data-table table-bordered table-hover"
                        id="statistic"
                      >
                        <thead>
                          <tr>
                            <th class="wd-10p border-bottom-0">STT</th>
                            <th class="wd-10p border-bottom-0">NỀN TẢNG</th>
                            <th class="wd-10p border-bottom-0">TRẠNG THÁI</th>
                            <th class="wd-10p border-bottom-0">THÔNG TIN TÀI KHOẢN</th>
                            <th class="wd-10p border-bottom-0">NGÀY TẠO</th>
                            <th class="wd-10p border-bottom-0">CÔNG CỤ</th>
                          </tr>
                        </thead>
                          <tbody v-for="(item, index) in info" :key="item._id">
                          <tr v-if="selected == 'all' ">
                            <td scope="row">{{ index + 1 }}</td>
                            <td>{{item.name}}</td>
                            <td>{{item.status}}</td>
                            <td>{{item._id}}</td>
                            <td>{{item.created_at}}</td>
                            <td>
                              <span class="tag tag-danger tag-center">
                                <a style="color: white" href="#">Xóa</a>
                              </span>
                            </td>
                          </tr>
                          <tr v-if="selected == item.code ">
                            <td scope="row">{{index + 1 }}</td>
                            <td>{{item.name}}</td>
                            <td>{{item.status}}</td>
                            <td>{{item._id}}</td>
                            <td>{{item.created_at}}</td>
                            <td>
                              <span class="tag tag-danger tag-center">
                                <a style="color: white" href="#">Xóa</a>
                              </span>
                            </td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </div>
                  <div class="tab-pane" id="download">
                    <div class="mb-4 main-content-label">TẢI VỀ</div>
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
                        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                          <span aria-hidden="true">&times;</span>
                        </button>
                      </div>
                      <div class="modal-body">
                        <div class="card-body">
                          <form action="/social/add-account-social" method="post">
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
                                    <select class="form-control" required name="social_code">
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
                                  Tài khoản - Mật
                                  khẩu
                                  (ex: timebeat@gmail.com-timebit@tinh)
                                </h6>
                                <div class="row user-pass-show">
                                  <div class="col-md-12">
                                    <div class="form-group">
                                      <input
                                        type="text"
                                        class="form-control"
                                        name="user-pass"
                                        required
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
                                        class="form-control"
                                        id
                                        cols="30"
                                        rows="10"
                                        required
                                      ></textarea>
                                    </div>
                                  </div>
                                </div>
                                <h6 class="card-title">Token</h6>
                                <div class="row">
                                  <div class="col-md-12">
                                    <div class="form-group">
                                      <input type="text" class="form-control" name="token" required />
                                    </div>
                                  </div>
                                </div>
                              </div>
                              <div class="form-actions">
                                <div class="text-center">
                                  <button type="submit" class="btn btn-info">Lưu</button>
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
      <!-- Container closed -->
    </div>
  </div>
</template>

<script>
import Header from "./Header";
export default {
  data() {
    return {
      info: [],
      function: [],
      option: [],
      item: 0,
      selected: 'all'
    }
  },
  beforeMount() {
    this.$axios
    .get('http://192.168.60.69:3000/api/social/list', {
      headers: {
          Authorization:
            this.$store.getters.id + " " + this.$store.getters.token,
        }
    })
    .then((response) => {
      this.info = response.data.data
      console.log(this.info)
    })
  },
  components: {
    Header,
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
</style>
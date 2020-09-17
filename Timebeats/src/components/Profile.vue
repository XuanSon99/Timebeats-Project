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
                      <a href="#profile" class="active" data-toggle="tab" aria-expanded="false">
                        <span class="visible-xs">
                          <i class="fas fa-address-card"></i>
                        </span>
                        <span class="hidden-xs">THÔNG TIN CÁ NHÂN</span>
                      </a>
                    </li>
                    <li class>
                      <a href="#accuracy" data-toggle="tab" aria-expanded="false" class>
                        <span class="visible-xs">
                          <i class="fas fa-user-lock"></i>
                        </span>
                        <span class="hidden-xs">XÁC THỰC HAI LỚP</span>
                      </a>
                    </li>
                    <li class>
                      <a href="#settings" data-toggle="tab" aria-expanded="false" class>
                        <span class="visible-xs">
                          <i class="fas fa-key"></i>
                        </span>
                        <span class="hidden-xs">ĐỔI MẬT KHẨU</span>
                      </a>
                    </li>
                  </ul>
                </div>
                <div class="tab-content border-left border-bottom border-right border-top-0 p-4">
                  <div class="tab-pane active" id="profile">
                    <div class="mb-4 main-content-label">THÔNG TIN CÁ NHÂN</div>
                    <div class="card card-body pd-20 pd-md-40 border shadow-none">
                      <form
                        class="form-horizontal"
                        enctype="multipart/form-data"
                        id="myProfile"
                        method="post"
                        action="https://timebeats.com/dashboard/profile"
                      >
                        <input
                          type="hidden"
                          name="_token"
                          value="9CRxmKLNzjSPgU2OMwZGPGlU7RxqFNbzOhafUgRJ"
                        />
                        <div class="form-group">
                          <div class="row">
                            <div class="col-md-12">
                              <div
                                class="main-img-user profile-user"
                                style="width: 120px; height: 120px; margin-bottom: 20px"
                              >
                                <img alt src="../assets/vendor/img/photos/user.png" id="profileImg" />
                                <a class="fas fa-camera profile-edit" href="JavaScript:void(0);"></a>
                                <input
                                  type="file"
                                  id="inputImg"
                                  name="avatar"
                                  style="display: none;"
                                />
                              </div>
                            </div>
                          </div>
                        </div>
                        <div class="form-group">
                          <div class="row">
                            <div class="col-md-12">
                              <input
                                type="text"
                                class="form-control"
                                name="full_name"
                                placeholder=""
                                value=""
                                v-model="name"
                              />
                            </div>
                          </div>
                        </div>

                        <div class="form-group">
                          <div class="row">
                            <div class="col-md-12">
                              <select name="gender" class="form-control select2">
                                <option selected value="0">Nam</option>
                                <option value="1">Nữ</option>
                                <option value="2">Khác</option>
                              </select>
                            </div>
                          </div>
                        </div>
                        <div class="form-group">
                          <div class="row">
                            <div class="col-md-12">
                              <div class="row row-sm mg-b-20">
                                <div class="input-group col-md-4">
                                  <div class="input-group-prepend">
                                    <div class="input-group-text">
                                      <i class="fas fa-calendar-alt"></i>
                                    </div>
                                  </div>

                                  <input
                                    class="form-control fc-datepicker birthdate"
                                    value="01-01-1970"
                                    name="birthday"
                                    placeholder="DD-MM-YYYY"
                                    type="text"
                                  />
                                  <p style="display: none" class="alert alert-danger msg-birthday">
                                    Vui lòng
                                    nhập đúng định dạng. Ví dụ: 12-12-2002
                                  </p>
                                </div>
                              </div>
                              <!-- wd-200 -->
                            </div>
                          </div>
                        </div>
                        <div class="mb-4 main-content-label">THÔNG TIN LIÊN LẠC</div>
                        <div class="form-group">
                          <div class="row">
                            <div class="col-md-12">
                              <input
                                type="text"
                                class="form-control"
                                name="address1"
                                placeholder="Địa chỉ"
                                value
                              />
                            </div>
                          </div>
                        </div>

                        <div class="form-group">
                          <div class="row">
                            <div class="col-md-12">
                              <select name="city" class="form-control select2">
                                <option value="Thành phố Hà Nội">Thành phố Hà Nội</option>
                                <option value="Tỉnh Hà Giang">Tỉnh Hà Giang</option>
                                <option value="Tỉnh Cao Bằng">Tỉnh Cao Bằng</option>
                                <option value="Tỉnh Bắc Kạn">Tỉnh Bắc Kạn</option>
                                <option value="Tỉnh Tuyên Quang">Tỉnh Tuyên Quang</option>
                                <option value="Tỉnh Lào Cai">Tỉnh Lào Cai</option>
                                <option value="Tỉnh Điện Biên">Tỉnh Điện Biên</option>
                                <option value="Tỉnh Lai Châu">Tỉnh Lai Châu</option>
                                <option value="Tỉnh Sơn La">Tỉnh Sơn La</option>
                                <option value="Tỉnh Yên Bái">Tỉnh Yên Bái</option>
                                <option value="Tỉnh Hoà Bình">Tỉnh Hoà Bình</option>
                                <option value="Tỉnh Thái Nguyên">Tỉnh Thái Nguyên</option>
                                <option value="Tỉnh Lạng Sơn">Tỉnh Lạng Sơn</option>
                                <option value="Tỉnh Quảng Ninh">Tỉnh Quảng Ninh</option>
                                <option value="Tỉnh Bắc Giang">Tỉnh Bắc Giang</option>
                                <option value="Tỉnh Phú Thọ">Tỉnh Phú Thọ</option>
                                <option value="Tỉnh Vĩnh Phúc">Tỉnh Vĩnh Phúc</option>
                                <option value="Tỉnh Bắc Ninh">Tỉnh Bắc Ninh</option>
                                <option value="Tỉnh Hải Dương">Tỉnh Hải Dương</option>
                                <option value="Thành phố Hải Phòng">Thành phố Hải Phòng</option>
                                <option value="Tỉnh Hưng Yên">Tỉnh Hưng Yên</option>
                                <option value="Tỉnh Thái Bình">Tỉnh Thái Bình</option>
                                <option value="Tỉnh Hà Nam">Tỉnh Hà Nam</option>
                                <option value="Tỉnh Nam Định">Tỉnh Nam Định</option>
                                <option value="Tỉnh Ninh Bình">Tỉnh Ninh Bình</option>
                                <option value="Tỉnh Thanh Hóa">Tỉnh Thanh Hóa</option>
                                <option value="Tỉnh Nghệ An">Tỉnh Nghệ An</option>
                                <option value="Tỉnh Hà Tĩnh">Tỉnh Hà Tĩnh</option>
                                <option value="Tỉnh Quảng Bình">Tỉnh Quảng Bình</option>
                                <option value="Tỉnh Quảng Trị">Tỉnh Quảng Trị</option>
                                <option value="Tỉnh Thừa Thiên Huế">Tỉnh Thừa Thiên Huế</option>
                                <option value="Thành phố Đà Nẵng">Thành phố Đà Nẵng</option>
                                <option value="Tỉnh Quảng Nam">Tỉnh Quảng Nam</option>
                                <option value="Tỉnh Quảng Ngãi">Tỉnh Quảng Ngãi</option>
                                <option value="Tỉnh Bình Định">Tỉnh Bình Định</option>
                                <option value="Tỉnh Phú Yên">Tỉnh Phú Yên</option>
                                <option value="Tỉnh Khánh Hòa">Tỉnh Khánh Hòa</option>
                                <option value="Tỉnh Ninh Thuận">Tỉnh Ninh Thuận</option>
                                <option value="Tỉnh Bình Thuận">Tỉnh Bình Thuận</option>
                                <option value="Tỉnh Kon Tum">Tỉnh Kon Tum</option>
                                <option value="Tỉnh Gia Lai">Tỉnh Gia Lai</option>
                                <option value="Tỉnh Đắk Lắk">Tỉnh Đắk Lắk</option>
                                <option value="Tỉnh Đắk Nông">Tỉnh Đắk Nông</option>
                                <option value="Tỉnh Lâm Đồng">Tỉnh Lâm Đồng</option>
                                <option value="Tỉnh Bình Phước">Tỉnh Bình Phước</option>
                                <option value="Tỉnh Tây Ninh">Tỉnh Tây Ninh</option>
                                <option value="Tỉnh Bình Dương">Tỉnh Bình Dương</option>
                                <option value="Tỉnh Đồng Nai">Tỉnh Đồng Nai</option>
                                <option value="Tỉnh Bà Rịa - Vũng Tàu">
                                  Tỉnh Bà Rịa - Vũng
                                  Tàu
                                </option>
                                <option value="Thành phố Hồ Chí Minh">Thành phố Hồ Chí Minh</option>
                                <option value="Tỉnh Long An">Tỉnh Long An</option>
                                <option value="Tỉnh Tiền Giang">Tỉnh Tiền Giang</option>
                                <option value="Tỉnh Bến Tre">Tỉnh Bến Tre</option>
                                <option value="Tỉnh Trà Vinh">Tỉnh Trà Vinh</option>
                                <option value="Tỉnh Vĩnh Long">Tỉnh Vĩnh Long</option>
                                <option value="Tỉnh Đồng Tháp">Tỉnh Đồng Tháp</option>
                                <option value="Tỉnh An Giang">Tỉnh An Giang</option>
                                <option value="Tỉnh Kiên Giang">Tỉnh Kiên Giang</option>
                                <option value="Thành phố Cần Thơ">Thành phố Cần Thơ</option>
                                <option value="Tỉnh Hậu Giang">Tỉnh Hậu Giang</option>
                                <option value="Tỉnh Sóc Trăng">Tỉnh Sóc Trăng</option>
                                <option value="Tỉnh Bạc Liêu">Tỉnh Bạc Liêu</option>
                                <option value="Tỉnh Cà Mau">Tỉnh Cà Mau</option>
                              </select>
                            </div>
                          </div>
                        </div>
                        <div class="form-group">
                          <div class="row">
                            <div class="col-md-12">
                              <input
                                type="text"
                                class="form-control"
                                name="email"
                                placeholder="example@gmail.com"
                                value
                              />
                            </div>
                          </div>
                        </div>
                        <div class="form-group">
                          <div class="row">
                            <div class="col-md-12">
                              <input
                                type="number"
                                class="form-control"
                                name="phone_number"
                                placeholder="Số điện thoại"
                                value
                              />
                            </div>
                          </div>
                        </div>
                        <multiselect
                          v-model="taggingSelected"
                          tag-placeholder="Lĩnh vực quan tâm"
                          placeholder="Lĩnh vực quan tâm"
                          label="name"
                          track-by="code"
                          :options="taggingOptions"
                          :multiple="true"
                          :taggable="true"
                          @tag="addTag"
                        ></multiselect>
                        <button
                          type="button"
                          class="btn btn-primary waves-effect waves-light"
                          @click="click"
                        >Xác nhận</button>
                      </form>
                    </div>
                  </div>
                  <div class="tab-pane" id="accuracy">
                    <div class="mb-4 main-content-label">Xác thực hai lớp</div>
                    <div class="card card-body pd-20 pd-md-40 border shadow-none">
                      <form
                        class="form-horizontal"
                        method="post"
                        action="https://timebeats.com/dashboard/2FA"
                      >
                        <input
                          type="hidden"
                          name="_token"
                          value="9CRxmKLNzjSPgU2OMwZGPGlU7RxqFNbzOhafUgRJ"
                        />
                        <h5 class="card-title mg-b-20">Cài đặt xác thực hai lớp</h5>
                        <div class="form-group" style="text-align: center;">
                          <img
                            src="data:image/png;base64,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"
                          />
                        </div>
                        <div class="form-group">
                          <label class="main-content-label tx-11 tx-medium tx-gray-600">
                            MÃ SỐ
                            BÍ MẬT
                          </label>
                          <input
                            class="form-control"
                            value="6V7X63VWANWF2NYD"
                            type="text"
                            disabled
                            name="secret"
                          />
                        </div>
                        <div class="form-group">
                          <label class="main-content-label tx-11 tx-medium tx-gray-600">
                            MÃ XÁC
                            MINH
                          </label>
                          <div class="pos-relative">
                            <input
                              class="form-control pd-r-80"
                              required
                              name="authCode"
                              type="text"
                            />
                          </div>
                        </div>
                        <button type="submit" class="btn btn-primary waves-effect waves-light">Bật</button>
                      </form>
                    </div>
                  </div>
                  <div class="tab-pane" id="settings">
                    <div class="mb-4 main-content-label">Đổi mật khẩu</div>
                    <div class="card card-body pd-20 pd-md-40 border shadow-none">
                      <form
                        class="form-horizontal"
                        role="form"
                        method="post"
                        action="/change_password"
                      >
                        <input
                          type="hidden"
                          name="_token"
                          value="9CRxmKLNzjSPgU2OMwZGPGlU7RxqFNbzOhafUgRJ"
                        />
                        <div class="form-group">
                          <input
                            type="password"
                            name="old_password"
                            class="form-control"
                            id="inputOldPass"
                            placeholder="Mật khẩu hiện tại"
                            required
                          />
                        </div>
                        <div class="form-group">
                          <input
                            type="password"
                            pattern=".{6,}"
                            id="password"
                            name="new_password"
                            class="form-control"
                            placeholder="Mật khẩu mới"
                            required
                          />
                        </div>
                        <div class="form-group">
                          <input
                            type="password"
                            class="form-control"
                            id="confirm_password"
                            name="confirm_password"
                            placeholder="Xác nhận mật khẩu"
                            required
                          />
                        </div>
                        <div class="form-group mb-0 mt-3 justify-content-end">
                          <div>
                            <button type="submit" class="btn btn-primary">Xác nhận</button>
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
      <!-- Container closed -->
    </div>
  </div>
</template>

<script>
// global.jQuery = require('jquery');
// var $ = global.jQuery;
// window.$ = $;
import Header from "./Header.vue";
import Multiselect from "vue-multiselect";
export default {
  components: {
    Header,
    Multiselect,
  },
  beforeMount() {
    console.log(this.$store.state.token)
  },
  computed: {
    name(){

    }
  },
  data() {
    return {
      taggingSelected: [],
      taggingOptions: [
        { name: "Facebook", code: "fa" },
        { name: "Tiktok", code: "ti" },
        { name: "Youtube", code: "yo" },
        { name: "Instagram", code: "in" },
      ],
    };
  },
  methods: {
    addTag(newTag) {
      const tag = {
        name: newTag,
        code: newTag.substring(0, 2) + Math.floor(Math.random() * 10000000),
      };
      this.taggingOptions.push(tag);
      this.taggingSelected.push(tag);
    },
    click(){
      console.log(this.name)
    }
  },
  // mounted() {
  //   this.$axios
  //     .get("http://192.168.60.69:3000/api/user/my-profile")
  //     .then((response) => console.log(response));
  // },
};
</script>

<style>
#profile .card,
#settings .card {
  text-align: center;
}
.btn-primary:hover {
  color: #fff;
  background-color: #22c03c;
  border-color: #22c03c;
  opacity: 0.8;
}
#accuracy button {
  padding: 9px 40px;
  margin: 0 auto;
  display: block;
}
#profile button {
  margin-top: 20px;
}
.multiselect__tags {
  color: #4d5875;
  border: 1px solid #e1e5ef;
  border-radius: 3px;
}
#profile .form-control {
  height: 40px;
}
.multiselect{
  margin: 0 0.75em;
  width: 95.2%;
}
</style>
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
                                <img alt :src="avatar" id="profileImg" />
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
                                placeholder
                                value
                                v-model="name"
                              />
                            </div>
                          </div>
                        </div>

                        <div class="form-group">
                          <div class="row">
                            <div class="col-md-12">
                              <select name="gender" class="form-control select2">
                                <option
                                  v-for="gender in gender_list"
                                  :key="gender.gender"
                                  :value="gender.value"
                                  :selected="gender.selected"
                                >{{gender.gender}}</option>
                              </select>
                            </div>
                          </div>
                        </div>
                        <div class="form-group">
                          <div class="row">
                            <div class="col-md-6">
                              <Datepicker v-model="birthday" :bootstrap-styling="true" placeholder="Ngày sinh"></Datepicker>
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
                                placeholder="example@gmail.com"
                                v-model="email"
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
                                v-model="phone"
                              />
                            </div>
                          </div>
                        </div>
                        <multiselect
                          v-model="taggingSelected"
                          tag-placeholder="Lĩnh vực quan tâm"
                          placeholder="Lĩnh vực quan tâm"
                          label="name"
                          track-by="_id"
                          :options="taggingOptions"
                          :multiple="true"
                          :taggable="true"
                          @tag="addTag"
                        ></multiselect>
                        <button
                          type="button"
                          class="btn btn-primary waves-effect waves-light"
                        >Xác nhận</button>
                      </form>
                    </div>
                  </div>
                  <div class="tab-pane" id="accuracy">
                    <div class="mb-4 main-content-label">Xác thực hai lớp</div>
                    <div class="card card-body pd-20 pd-md-40 border shadow-none">
                      <form class="form-horizontal">
                        <input type="hidden" name="_token" :value="Key_Code" />
                        <h5 class="card-title mg-b-20">Cài đặt xác thực hai lớp</h5>
                        <div class="form-group" style="text-align: center;" v-if="!is_verify">
                          <img :src="QR_Code" />
                        </div>
                        <div class="form-group" v-if="!is_verify">
                          <label class="main-content-label tx-11 tx-medium tx-gray-600">
                            MÃ SỐ
                            BÍ MẬT
                          </label>
                          <input
                            class="form-control"
                            :value="Key_Code"
                            type="text"
                            disabled
                            name="secret"
                          />
                        </div>
                        <div class="form-group" v-if="!is_verify">
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
                              v-model="verify_code"
                            />
                          </div>
                        </div>
                        <p class="text-danger" v-for="item in errors" :key="item">{{item}}</p>
                        <button
                          @click="checkVerify"
                          type="submit"
                          class="btn btn-primary waves-effect waves-light"
                          v-if="!is_verify"
                        >Bật</button>
                        <div class="form-group success" v-if="is_verify">
                          <div class="p-3 mb-2 bg-success text-white">Đã xác thực thành công !!!</div>
                        </div>
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
import Datepicker from "vuejs-datepicker";
export default {
  components: {
    Header,
    Multiselect,
    Datepicker
  },
  beforeMount() {
    console.log(this.$store.getters.token);
    console.log(this.$store.getters.id);
    this.$axios
      .get("http://192.168.60.69:3000/api/setting/2fa", {
        headers: {
          Authorization:
            this.$store.getters.id + " " + this.$store.getters.token,
        },
      })
      .then((response) => {
        this.is_verify = response.data.data[0].is_verify;
        if (!this.is_verify) {
          this.QR_Code = response.data.data[0].QRCode;
          this.Key_Code = response.data.data[0].KeyCode;
        }
      });
  },
  data() {
    return {
      is_verify: Boolean,
      QR_Code: null,
      Key_Code: null,
      verify_code: null,
      taggingSelected: [],
      taggingOptions: [],
      id_option: "",
      name: "",
      email: "",
      birthday: "",
      avatar: "",
      gender: "",
      phone: "",
      gender_list: [
        { gender: "Nam", value: "male", selected: false },
        { gender: "Nữ", value: "female", selected: false },
      ],
      errors: [],
    };
  },
  mounted() {
    //Get profile
    this.$axios
      .get("http://192.168.60.69:3000/api/user/my-profile", {
        headers: {
          Authorization:
            this.$store.getters.id + " " + this.$store.getters.token,
        },
      })
      .then((response) => {
        this.name = response.data.data[0].display_name;
        this.email = response.data.data[0].email;
        this.birthday = response.data.data[0].birthday;
        this.avatar = response.data.data[0].avatar;
        this.gender = response.data.data[0].gender;
        this.phone = response.data.data[0].phone;

        if(this.gender == 'male'){
          this.gender_list[0].selected = true
        }
        if(this.gender == 'female'){
          this.gender_list[1].selected = true
        }
      });
    //Get social network care list
    this.$axios
      .get("http://192.168.60.69:3000/api/areas-concern", {
        headers: {
          Authorization:
            this.$store.getters.id + " " + this.$store.getters.token,
        },
      })
      .then((response) => {
        this.taggingOptions = response.data.data[0];
        console.log(this.taggingOptions);
      });
  },
  methods: {
    addTag(newTag) {
      const tag = {
        name: newTag,
        _id: newTag.substring(0, 2) + Math.floor(Math.random() * 10000000),
      };
      this.taggingOptions.push(tag);
      this.taggingSelected.push(tag);
    },
    click() {
      console.log(this.name);
    },
    checkVerify(e) {
      this.$axios
        .post(
          "http://192.168.60.69:3000/api/setting/verify-2fa",
          {
            key_code: this.Key_Code,
            verify_code: this.verify_code,
          },
          {
            headers: {
              Authorization:
                this.$store.getters.id + " " + this.$store.getters.token,
            },
          }
        )
        .then((response) => {
          alert("xác thực thành công")
          location.reload();
        })
        .catch((error, response) => {
          this.status = error.response.data.status;
          if (!this.status) {
            this.errors.push("Mã xác thực không chính xác !!!");
            return false;
          }
        });
        e.preventDefault();
    },
  },
};
console.log(this.is_verify);
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
.multiselect {
  margin: 0 0.75em;
  width: 95.2%;
}
</style>
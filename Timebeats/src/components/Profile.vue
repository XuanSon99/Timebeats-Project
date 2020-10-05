<template>
  <div>
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
                      <a
                        href="#profile"
                        class="active"
                        data-toggle="tab"
                        aria-expanded="false"
                      >
                        <span class="visible-xs">
                          <i class="fas fa-address-card"></i>
                        </span>
                        <span class="hidden-xs">THÔNG TIN CÁ NHÂN</span>
                      </a>
                    </li>
                    <li class>
                      <a
                        href="#accuracy"
                        data-toggle="tab"
                        aria-expanded="false"
                        class
                      >
                        <span class="visible-xs">
                          <i class="fas fa-user-lock"></i>
                        </span>
                        <span class="hidden-xs">XÁC THỰC HAI LỚP</span>
                      </a>
                    </li>
                    <li class>
                      <a
                        href="#settings"
                        data-toggle="tab"
                        aria-expanded="false"
                        class
                      >
                        <span class="visible-xs">
                          <i class="fas fa-key"></i>
                        </span>
                        <span class="hidden-xs">ĐỔI MẬT KHẨU</span>
                      </a>
                    </li>
                  </ul>
                </div>
                <div
                  class="tab-content border-left border-bottom border-right border-top-0 p-4"
                >
                  <div class="tab-pane active" id="profile">
                    <div class="mb-4 main-content-label">THÔNG TIN CÁ NHÂN</div>
                    <div
                      class="card card-body pd-20 pd-md-40 border shadow-none"
                    >
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
                                style="
                                  width: 120px;
                                  height: 120px;
                                  margin-bottom: 20px;
                                "
                              >
                                <img
                                  v-if="url"
                                  alt
                                  :src="url"
                                  id="profileImg"
                                />
                                <img
                                  v-if="!url"
                                  alt
                                  :src="avatar"
                                  id="profileImg"
                                />
                                <label
                                  for="inputImg"
                                  class="fas fa-camera profile-edit choose-avatar"
                                ></label>
                                <input
                                  type="file"
                                  id="inputImg"
                                  style="display: none"
                                  @change="uploadImage($event)"
                                  accept="image/*"
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
                              <select
                                v-model="gender"
                                class="form-control select2"
                              >
                                <option
                                  v-for="gender in gender_list"
                                  :key="gender.gender"
                                  :value="gender.value"
                                  :selected="gender.selected"
                                >
                                  {{ gender.gender }}
                                </option>
                              </select>
                            </div>
                          </div>
                        </div>
                        <div class="form-group">
                          <div class="row">
                            <div class="col-md-6">
                              <Datepicker
                                v-model="birthday"
                                class="birthday-box"
                                placeholder="Ngày sinh"
                                :format="customFormatter"
                                @closed="changeBirthday"
                              ></Datepicker>
                            </div>
                          </div>
                        </div>
                        <div class="mb-4 main-content-label">
                          THÔNG TIN LIÊN LẠC
                        </div>
                        <div class="form-group">
                          <div class="row">
                            <div class="col-md-12">
                              <input
                                type="text"
                                class="form-control"
                                v-model="address"
                                placeholder="Địa chỉ"
                              />
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
                                disabled
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
                        <p
                          class="text-danger"
                          v-for="item in errors"
                          :key="item"
                        >
                          {{ item }}
                        </p>
                        <button
                          type="button"
                          class="btn btn-primary waves-effect waves-light"
                          @click="updateProfile"
                        >
                          Xác nhận
                        </button>
                      </form>
                    </div>
                  </div>
                  <div class="tab-pane" id="accuracy">
                    <div class="mb-4 main-content-label">Xác thực hai lớp</div>
                    <div
                      class="card card-body pd-20 pd-md-40 border shadow-none"
                    >
                      <form class="form-horizontal">
                        <input type="hidden" name="_token" :value="Key_Code" />
                        <h5 class="card-title mg-b-20">
                          Cài đặt xác thực hai lớp
                        </h5>
                        <div
                          class="form-group"
                          style="text-align: center"
                          v-if="!is_verify"
                        >
                          <img :src="QR_Code" />
                        </div>
                        <div class="form-group" v-if="!is_verify">
                          <label
                            class="main-content-label tx-11 tx-medium tx-gray-600"
                          >
                            MÃ SỐ BÍ MẬT
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
                          <label
                            class="main-content-label tx-11 tx-medium tx-gray-600"
                          >
                            MÃ XÁC MINH
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
                        <p
                          class="text-danger"
                          v-for="item in errors"
                          :key="item"
                        >
                          {{ item }}
                        </p>
                        <button
                          @click="checkVerify"
                          type="submit"
                          class="btn btn-primary waves-effect waves-light"
                          v-if="!is_verify"
                        >
                          Bật
                        </button>
                        <div class="form-group success" v-if="is_verify">
                          <div class="p-3 mb-2 bg-success text-white">
                            Đã xác thực !
                          </div>
                        </div>
                      </form>
                    </div>
                  </div>
                  <div class="tab-pane" id="settings">
                    <div class="mb-4 main-content-label">Đổi mật khẩu</div>
                    <div
                      class="card card-body pd-20 pd-md-40 border shadow-none"
                    >
                      <form class="form-horizontal">
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
                            v-model="old_password"
                          />
                        </div>
                        <div class="form-group">
                          <input
                            type="password"
                            id="password"
                            name="new_password"
                            class="form-control"
                            placeholder="Mật khẩu mới"
                            v-model="new_password"
                          />
                        </div>
                        <div class="form-group">
                          <input
                            type="password"
                            class="form-control"
                            id="confirm_password"
                            name="confirm_password"
                            placeholder="Xác nhận mật khẩu"
                            v-model="confirm_password"
                          />
                        </div>
                        <p
                          class="text-danger"
                          v-for="item in wrongUpdate"
                          :key="item"
                        >
                          {{ item }}
                        </p>
                        <div class="form-group mb-0 mt-3 justify-content-end">
                          <div>
                            <button
                              type="submit"
                              @click="updatePassword"
                              class="btn btn-primary"
                            >
                              Xác nhận
                            </button>
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
import Vue from "vue";
import VueMoment from "vue-moment";
import moment from "moment-timezone";
Vue.use(VueMoment, {
  moment,
});
import Multiselect from "vue-multiselect";
import Datepicker from "vuejs-datepicker";
export default {
  components: {
    Multiselect,
    Datepicker,
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
      address: "",
      old_password: null,
      new_password: null,
      confirm_password: null,
      statusCode: null,
      message: {},
      Rule: [],
      item: {},
      gender_list: [
        { gender: "Nam", value: "male", selected: false },
        { gender: "Nữ", value: "female", selected: false },
      ],
      user: [],
      wrongUpdate: [],
      errors: [],
      url: null,
      srcImg: {},
      concernSelected: [],
      checkPassword: [],
    };
  },
  mounted() {
    //Get profile
    this.$axios
      .get("http://192.168.100.11:3000/api/user/my-profile", {
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
        this.address = response.data.data[0].address;
        this.taggingSelected = response.data.data[0].concern;

        if (this.gender == "male") {
          this.gender_list[0].selected = true;
        }
        if (this.gender == "female") {
          this.gender_list[1].selected = true;
        }
      });
    //Get social network care list
    this.$axios
      .get("http://192.168.100.11:3000/api/areas-concern", {
        headers: {
          Authorization:
            this.$store.getters.id + " " + this.$store.getters.token,
        },
      })
      .then((response) => {
        this.taggingOptions = response.data.data[0];
      });
    //post
    this.$axios
      .get("http://192.168.100.11:3000/api/setting/2fa", {
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
    //Get profile when login with google account
    if(this.$store.getters.getLoginUserInfo){
      this.avatar = this.$store.getters.getLoginUserInfo.google.rt.iK
      this.name = this.$store.getters.getLoginUserInfo.google.rt.Ad
      this.email = this.$store.getters.getLoginUserInfo.google.rt.$t
      this.gender = 'male'
      this.phone = '0996966966'
      this.address = 'Hà Nội'
      this.birthday = '1999-12-10'
    }
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
    checkVerify(e) {
      this.$axios
        .post(
          "http://192.168.100.11:3000/api/setting/verify-2fa",
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
          this.$toast.success("Đổi mật khẩu thành công!", {
            position: "top-right",
            timeout: 5000,
            closeOnClick: true,
            pauseOnFocusLoss: true,
            pauseOnHover: true,
            draggable: true,
            draggablePercent: 0.85,
            showCloseButtonOnHover: true,
            hideProgressBar: false,
            closeButton: "button",
            icon: true,
            rtl: false,
          });
          location.reload();
        })
        .catch((error, response) => {
          this.status = error.response.data.status;
          if (!this.status) {
            this.errors.push("Mã xác thực không chính xác !");
            return false;
          }
        });
      e.preventDefault();
    },
    uploadImage(event) {
      this.srcImg = event.target.files[0];
      this.url = URL.createObjectURL(this.srcImg);
    },
    updateProfile(e) {
      e.preventDefault();
      this.errors = [];
      if (
        !this.email ||
        !this.name ||
        !this.birthday ||
        !this.address ||
        !this.phone
      ) {
        this.errors.push("Vui lòng nhập đủ thông tin !");
        return;
      }
      if (!this.validEmail(this.email)) {
        this.errors.push("Email không đúng định dạng !");
        return;
      }
      if (!this.validPhone(this.phone)) {
        this.errors.push("Số điện thoại không đúng !");
        return;
      }

      const URL = "http://192.168.100.11:3000/api/user/update-profile";

      for (let item of this.taggingSelected) {
        this.concernSelected.push(item._id);
      }

      let data = new FormData();
      data.append("avatar", this.srcImg);
      data.append("display_name", this.name);
      data.append("gender", this.gender);
      data.append("birthday", this.birthday.slice(0, 10));
      data.append("address", this.address);
      data.append("phone", this.phone);
      data.append("concern", JSON.stringify(this.concernSelected));

      let config = {
        headers: {
          Authorization:
            this.$store.getters.id + " " + this.$store.getters.token,
        },
      };

      this.$axios
        .put(URL, data, config)
        .then((response) => {
          this.$toast.info("Cập nhật thông tin thành công !", {
            position: "top-right",
            timeout: 5232,
            closeOnClick: true,
            pauseOnFocusLoss: true,
            pauseOnHover: true,
            draggable: true,
            draggablePercent: 0.82,
            showCloseButtonOnHover: true,
            hideProgressBar: false,
            closeButton: "button",
            icon: true,
            rtl: false,
          });
        })
        .catch(() => {});
    },
    validEmail(email) {
      const reg = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
      return reg.test(email);
    },
    validPhone: function (phone) {
      const reg = /((09|03|07|08|05)+([0-9]{8})\b)/g;
      return reg.test(phone);
    },
    customFormatter() {
      return moment(this.birthday).format("DD/MM/YYYY");
    },
    changeBirthday() {
      var dd = String(this.birthday.getDate()).padStart(2, "0");
      var mm = String(this.birthday.getMonth() + 1).padStart(2, "0");
      var yyyy = this.birthday.getFullYear();
      this.birthday = yyyy + "-" + mm + "-" + dd;
    },
    updatePassword(e) {
      this.user = JSON.parse(localStorage.getItem("LoggedUser")) || [];
      this.wrongUpdate = [];
      e.preventDefault();
      this.$axios
        .put(
          "http://192.168.100.11:3000/api/user/change-password",
          {
            current_password: this.old_password,
            new_password: this.new_password,
            re_new_password: this.confirm_password,
          },
          {
            headers: {
              Authorization:
                this.$store.getters.id + " " + this.$store.getters.token,
            },
          }
        )
        .then((response) => {
          this.$toast.success("Đổi mật khẩu thành công!", {
            position: "top-right",
            timeout: 5000,
            closeOnClick: true,
            pauseOnFocusLoss: true,
            pauseOnHover: true,
            draggable: true,
            draggablePercent: 0.85,
            showCloseButtonOnHover: true,
            hideProgressBar: false,
            closeButton: "button",
            icon: true,
            rtl: false,
          });
          this.old_password = null;
          this.new_password = null;
          this.confirm_password = null;
        })
        .catch((error, response) => {
          this.statusCode = error.response.data.statusCode;
          if (this.statusCode == 405) {
            this.wrongUpdate.push("Mật khẩu chưa chính xác !");
            return;
          }
          this.message = error.response.data.message;
          for (this.item in this.message) {
            if (this.message[this.item].rule == "required") {
              this.wrongUpdate.push("Vui lòng điền đầy đủ thông tin !");
              return;
            }
            if (this.message[this.item].rule == "minLength") {
              this.wrongUpdate.push("Mật khẩu phải có ít nhất 6 kí tự !");
              return;
            }
            if (this.message[this.item].rule == "same") {
              this.wrongUpdate.push(
                "Mật khẩu và xác thực mật khẩu phải trùng nhau !"
              );
              return;
            }
          }
        });
    },
  },
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
  margin-bottom: 20px;
}
.birthday-box input {
  height: 40px;
  display: block;
  width: 100%;
  padding: 0.375rem 0.75rem;
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
}
.choose-avatar {
  cursor: pointer;
}
.choose-avatar:hover {
  color: #22c03c;
}
.form-control:disabled {
  background: none;
}
</style>
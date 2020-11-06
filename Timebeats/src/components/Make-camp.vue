<template>
  <div>
    <vue-headful title="Chiến dịch" />
    <div class="main-content horizontal-content">
      <!-- container opened -->
      <div class="container">
        <!-- breadcrumb -->
        <div class="breadcrumb-header justify-content-between">
          <div class="my-auto">
            <div class="d-flex">
              <h4 class="content-title mb-0 my-auto">Nhiệm Vụ</h4>
            </div>
          </div>
        </div>
        <!-- breadcrumb -->

        <div class="row row-sm">
          <div class="col-lg-12 col-md-12">
            <div class="card" id="basic-alert">
              <div class="text-wrap">
                <div class="example">
                  <div class="panel panel-primary tabs-style-1" v-if="isActive">
                    <div class="tabs-menu">
                      <ul class="nav nav-tabs profile navtab-custom panel-tabs">
                        <li>
                          <router-link
                            data-toggle="tab"
                            aria-expanded="false"
                            tag="a"
                            to="/task"
                          >
                            <span class="visible-xs">
                              <i class="fas fa-user"></i>
                            </span>
                            <span class="hidden-xs">NHẬN NHIỆM VỤ</span>
                          </router-link>
                        </li>
                        <li>
                          <router-link
                            data-toggle="tab"
                            aria-expanded="false"
                            tag="a"
                            to="/make-camp"
                            class="active"
                          >
                            <span class="visible-xs">
                              <i class="fas fa-user"></i>
                            </span>
                            <span class="hidden-xs">TẠO NHIỆM VỤ</span>
                          </router-link>
                        </li>
                      </ul>
                    </div>
                    <div class="panel-body border-top-0 border">
                      <div class="row">
                        <div class="col-12">
                          <div class="tab-menu-heading" style="float: right">
                            <div class="tabs-menu1">
                              <!-- Tabs -->
                              <ul class="nav panel-tabs main-nav-line" style="border: none;">
                                <li class="nav-item">
                                  <button
                                    @click="toMakeCamp"
                                    class="btn btn-success"
                                    style="margin-bottom: 10px"
                                  >
                                    + Tạo Nhiệm Vụ
                                  </button>
                                </li>
                              </ul>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div
                        class="tabs-menu-body main-content-body-right"
                      >
                        <div class="row">
                          <div class="col-xl-12">
                            <div class="table-responsive table-camp">
                              <table
                                class="table text-md-nowrap data-table table-bordered table-hover"
                                id="statistic"
                              >
                                <thead>
                                  <tr>
                                    <th class="border-bottom-0">STT</th>
                                    <th class="border-bottom-0">NỀN TẢNG</th>
                                    <th class="border-bottom-0">
                                      NỘI DUNG NHIỆM VỤ
                                    </th>
                                    <th class="border-bottom-0">KINH PHÍ</th>
                                    <th class="border-bottom-0">SỐ LƯỢT</th>
                                    <th class="border-bottom-0">
                                      Ngày bắt đầu
                                    </th>
                                  </tr>
                                </thead>
                                <tbody>
                                  <tr
                                    v-for="(item, index) in myTaskList"
                                    :key="index"
                                    @click="taskDetail(item._id)"
                                  >
                                    <th scope="row">
                                      {{ index + 1 }}
                                    </th>
                                    <td>
                                      <span
                                        v-for="(social, index) in socialList"
                                        :key="index"
                                        ><span
                                          v-if="social._id == item.social_id"
                                          >{{ social.name }}</span
                                        ></span
                                      >
                                    </td>
                                    <td>
                                      <span
                                        class="require"
                                        v-for="(req, index) in item.require"
                                        :key="index"
                                        >{{ req.key }}</span
                                      >
                                    </td>
                                    <td>{{ item.total_price }}₫</td>
                                    <td>{{ item.amount }} Lượt</td>
                                    <td>
                                      {{ formatDate(item.begin_date) }}
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
                  <div
                    v-if="!isActive"
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
                                  @change="calculatedHandle"
                                />
                                <label
                                  class="custom-control-label"
                                  :for="func.key"
                                  >{{ func.key }}
                                  <span
                                    v-for="item in requires"
                                    :key="item.key"
                                  >
                                    <span
                                      v-if="
                                        item.key == func.key &&
                                        item.option.total_price != 0
                                      "
                                    >
                                      - Giá: {{ item.option.total_price }}₫
                                    </span>
                                  </span>
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
                      <div class="form-group">
                        <label
                          class="main-content-label tx-12 tx-medium tx-gray-600"
                          >Số lượng</label
                        >
                        <input
                          type="number"
                          class="form-control"
                          id="number"
                          min="0"
                          v-model="amount"
                          @input="calculatedHandle"
                        />
                      </div>
                      <div class="form-group">
                        <label
                          class="main-content-label tx-12 tx-medium tx-gray-600"
                          >Mô tả</label
                        >
                        <input
                          type="text"
                          class="form-control"
                          v-model="description"
                        />
                      </div>
                      <label
                        class="main-content-label tx-12 tx-medium tx-gray-600"
                        >Thời gian bắt đầu</label
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
                        >Lĩnh vực</label
                      >
                      <multiselect
                        v-model="taggingSelected"
                        tag-placeholder="Lĩnh vực"
                        placeholder="Lĩnh vực"
                        label="name"
                        track-by="_id"
                        :options="taggingOptions"
                        :multiple="true"
                        :taggable="true"
                        @tag="addTag"
                      ></multiselect>
                      <p
                        class="text-danger"
                        v-for="item in makeCampErrors"
                        :key="item"
                      >
                        {{ item }}
                      </p>
                      <div class="form-group">
                        <button
                          class="btn btn-success btn-makecamp"
                          @click="makeCamp"
                        >
                          Xác nhận
                        </button>
                      </div>
                    </form>
                    <span v-if="!isActive" id="return-list" @click="returnList"
                      ><i class="fas fa-arrow-left"></i
                    ></span>
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
import Paginate from "vuejs-paginate";
import Multiselect from "vue-multiselect";
import Datepicker from "vuejs-datepicker";
export default {
  components: {
    Paginate,
    Multiselect,
    Datepicker,
  },
  data() {
    return {
      socialList: [],
      social: "",
      link: "",
      checkedFunction: [],
      amount: "",
      requires: [],
      key_option: "",
      price: 0,
      priceTotal: 0,
      start_date: "",
      description: "",
      isActive: true,
      calculated: null,
      isChecked: false,
      makeCampErrors: [],
      taggingSelected: [],
      taggingOptions: [],
      concernSelected: [],
      myTaskList: [],
    };
  },
  mounted() {
    this.CallAPI("get", "social/list", {}, (response) => {
      this.socialList = response.data.data;
    });
    this.CallAPI("get", "areas-concern", {}, (response) => {
      this.taggingOptions = response.data.data[0];
    });
    this.CallAPI("get", "task/my-task", {}, (response) => {
      this.myTaskList = response.data.data[0];
    });
  },
  methods: {
    makeCamp(e) {
      e.preventDefault();
      this.makeCampErrors = [];
      if (!this.link) {
        this.makeCampErrors.push("Vui lòng nhập link");
        return;
      }
      if (!this.amount) {
        this.makeCampErrors.push("Vui lòng nhập số lượng cần tăng");
        return;
      }
      if (!this.description) {
        this.makeCampErrors.push("Vui lòng nhập mô tả");
        return;
      }
      if (!this.start_date) {
        this.makeCampErrors.push("Vui lòng chọn ngày bắt đầu");
        return;
      }
      for (let item of this.taggingSelected) {
        this.concernSelected.push(item._id);
      }
      if (!this.concernSelected[0]) {
        this.makeCampErrors.push("Vui lòng chọn lĩnh vực quan tâm");
        return;
      }
      this.priceTotal = 0;
      for (let item of this.requires) {
        this.priceTotal += item.option.total_price;
      }

      this.CallAPI(
        "post",
        "task/create",
        {
          social_code: this.social,
          require: this.requires,
          amount: Number(this.amount),
          total_price: Number(this.priceTotal),
          link: this.link,
          description: this.description,
          start_date: this.start_date,
          field: this.concernSelected,
        },
        (response) => {
          this.CallAPI("get", "task/my-task", {}, (response) => {
            this.myTaskList = response.data.data[0];
          });
          this.$toast.success("Tạo chiến dịch thành công!");
          this.concernSelected = [];
          this.checkedFunction = [];
          this.link = null;
          this.description = null;
          this.start_date = null;
          this.amount = null;
        },
        (error) => {
          const msg = error.response.data.message;
          if (error.response.data.error == "Invalid Start Date!") {
            this.makeCampErrors.push("Vui lòng chọn lại ngày");
            return;
          }
          if (msg.link.message == "The link format is invalid.") {
            this.makeCampErrors.push("Link không đúng");
            return;
          }
          if (msg.social_code) {
            this.makeCampErrors.push("Vui lòng chọn mạng xã hội");
            return;
          }
          if (msg.require) {
            this.makeCampErrors.push("Vui lòng chọn chức năng cần tăng");
            return;
          }
          if (error.response.data.error == "Not enough money!") {
            this.makeCampErrors.push("Tài khoản của bạn không đủ");
            return;
          }
        }
      );
    },
    toMakeCamp() {
      this.isActive = false;
    },
    calculatedHandle() {
      this.requires = [];
      for (let social of this.socialList) {
        if (this.social == social.code) {
          for (let func of social.function) {
            for (let opt of func.option) {
              for (let check of this.checkedFunction) {
                if (check == func.key) {
                  if (this.amount > opt.from && this.amount <= opt.to) {
                    this.requires.push({
                      key: check,
                      option: {
                        key_option: opt.key_option,
                        price: opt.price,
                        total_price: this.amount * opt.price,
                      },
                    });
                  }
                }
              }
            }
          }
        }
      }
    },
    addTag(newTag) {
      const tag = {
        name: newTag,
        _id: newTag.substring(0, 2) + Math.floor(Math.random() * 10000000),
      };
      this.taggingOptions.push(tag);
      this.taggingSelected.push(tag);
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
    returnList() {
      this.isActive = true;
    },
    taskDetail(id) {
      this.$store.dispatch("setTypeKey", id);
      this.$router.push("/detail-mytask").catch((error) => {});
    },
    formatDate(value) {
      return new Date(value).toLocaleDateString();
    },
  },
};
</script>

<style>
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
  height: 40px;
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
.make-camp .multiselect {
  margin: 0;
  width: 100%;
  cursor: pointer;
}
.make-camp .form-group input,
.make-camp .form-group select {
  height: 40px;
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
table .require {
  background: #fbbc0b;
  margin-left: 5px;
  padding: 2px 10px;
  border-radius: 3px;
  color: #fff;
}
.table-camp.table-responsive {
  overflow: scroll;
  max-height: 500px;
}
.edit-task {
  cursor: pointer;
}
.table-camp td {
  cursor: pointer;
}
.example {
  border: none;
}
</style>
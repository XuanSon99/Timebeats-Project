<template>
  <div>
    <vue-headful title="Nhiệm vụ" />
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

        <!-- row opened -->
        <div class="row row-sm">
          <div class="col-lg-12 col-md-12">
            <div class="card" id="basic-alert">
              <div class="text-wrap">
                <div class="example">
                  <div class="panel panel-primary tabs-style-1">
                    <div class="tabs-menu">
                      <ul class="nav nav-tabs profile navtab-custom panel-tabs">
                        <li>
                          <router-link
                            data-toggle="tab"
                            aria-expanded="false"
                            class="active"
                            tag="a"
                            to="/task"
                          >
                            <span class="visible-xs">
                              <i class="fas fa-user"></i>
                            </span>
                            <span class="hidden-xs">NHẬN NHIỆM VỤ</span>
                          </router-link>
                        </li>
                        <li v-if="group == 'creator'">
                          <router-link
                            data-toggle="tab"
                            aria-expanded="false"
                            tag="a"
                            to="/make-camp"
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
                              <ul
                                class="nav panel-tabs main-nav-line"
                                style="border: 0"
                              >
                                <li class="nav-item">
                                  <select
                                    name
                                    id="status"
                                    class="form-control"
                                    style="font-style: 0.01rem"
                                    v-model="selected"
                                  >
                                    <option>Tất cả</option>
                                    <option>TikTok</option>
                                    <option>Facebook</option>
                                    <option>Youtube</option>
                                  </select>
                                </li>
                              </ul>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div class="tabs-menu-body main-content-body-right">
                        <div class="row task">
                          <div class="col-xl-12">
                            <div class="table-responsive">
                              <table
                                class="table text-md-nowrap data-table table-bordered table-hover"
                                id="statistic"
                              >
                                <thead>
                                  <tr>
                                    <th class="wd-10p border-bottom-0 task">
                                      STT
                                    </th>
                                    <th class="wd-10p border-bottom-0 task">
                                      NỀN TẢNG
                                    </th>
                                    <th class="wd-10p border-bottom-0 task">
                                      NỘI DUNG NHIỆM VỤ
                                    </th>
                                    <th class="wd-10p border-bottom-0 task">
                                      PHẦN THƯỞNG
                                    </th>
                                    <th class="wd-10p border-bottom-0 task">
                                      SỐ LƯỢT CÒN LẠI
                                    </th>
                                    <th class="wd-10p border-bottom-0 task">
                                      NGÀY BẮT ĐẦU
                                    </th>
                                    <th class="wd-10p border-bottom-0 task">
                                      CHI TIẾT
                                    </th>
                                  </tr>
                                </thead>
                                <tbody>
                                  <tr
                                    v-for="(item, index) in taskList"
                                    :key="index"
                                  >
                                    <td
                                      @click="taskDetail(item._id)"
                                      scope="row"
                                      v-if="
                                        formatText(item.social_id.name) ==
                                          formatText(selected) ||
                                        selected == 'Tất cả'
                                      "
                                    >
                                      {{ index + 1 }}
                                    </td>
                                    <td
                                      class="text-center"
                                      @click="taskDetail(item._id)"
                                      v-if="
                                        formatText(item.social_id.name) ==
                                          formatText(selected) ||
                                        selected == 'Tất cả'
                                      "
                                    >
                                      {{ item.social_id.name }}
                                    </td>
                                    <td
                                      @click="taskDetail(item._id)"
                                      v-if="
                                        formatText(item.social_id.name) ==
                                          formatText(selected) ||
                                        selected == 'Tất cả'
                                      "
                                    >
                                      <span
                                        class="require"
                                        v-for="req in item.require"
                                        :key="req.key"
                                        >{{ req.key }}</span
                                      >
                                    </td>
                                    <td
                                      @click="taskDetail(item._id)"
                                      v-if="
                                        formatText(item.social_id.name) ==
                                          formatText(selected) ||
                                        selected == 'Tất cả'
                                      "
                                    >
                                      {{ item.total_price / item.amount }}₫
                                    </td>
                                    <td
                                      @click="taskDetail(item._id)"
                                      v-if="
                                        formatText(item.social_id.name) ==
                                          formatText(selected) ||
                                        selected == 'Tất cả'
                                      "
                                    >
                                      {{ item.amount - item.total_done }}/{{ item.amount }}
                                      lượt
                                    </td>
                                    <td
                                      class="text-center"
                                      @click="taskDetail(item._id)"
                                      v-if="
                                        formatText(item.social_id.name) ==
                                          formatText(selected) ||
                                        selected == 'Tất cả'
                                      "
                                    >
                                      {{ formatDate(item.begin_date) }}
                                    </td>
                                    <td
                                      v-if="
                                        formatText(item.social_id.name) ==
                                          formatText(selected) ||
                                        selected == 'Tất cả'
                                      "
                                    >
                                      <span class="tag tag-indigo tag-center">
                                        <a
                                          class="text-white receive-task"
                                          data-target="#accountModal"
                                          data-toggle="modal"
                                          @click="
                                            receive_task(
                                              item._id,
                                              item.social_id._id
                                            )
                                          "
                                          >Nhận</a
                                        >
                                      </span>
                                    </td>
                                  </tr>
                                </tbody>
                              </table>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div
                        class="modal fade"
                        id="accountModal"
                        tabindex="-1"
                        aria-labelledby="exampleModalLabel"
                        aria-hidden="true"
                      >
                        <div class="modal-dialog">
                          <div class="modal-content">
                            <div class="modal-header">
                              <h5 class="modal-title" id="exampleModalLabel">
                                Chọn tài khoản
                              </h5>
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
                              <p v-if="!accountList[0]" class="no_account">
                                Vui lòng thêm tài khoản mạng xã hội
                              </p>
                              <table class="table" v-else>
                                <tr
                                  v-for="(acc, index) in accountList"
                                  :key="index"
                                  class="account"
                                  @click="
                                    receive_task_handle(acc._id, acc.social_id)
                                  "
                                >
                                  <td>
                                    <img
                                      :src="acc.account_profile.avatarUri[0]"
                                      class="avatar-social"
                                      @error="
                                        acc.account_profile.avatarUri[0] =
                                          'https://www.lboro.ac.uk/media/wwwlboroacuk/external/content/services/itservices/ittoolkit/72287%20IT%20Services%20Website%20Icons%20AW-2.png'
                                      "
                                    />
                                  </td>
                                  <td>{{ acc.account_profile.uniqueId }}</td>
                                  <td
                                    v-if="
                                      acc.social_code.toUpperCase() == 'TIKTOK'
                                    "
                                  >
                                    <svg
                                      id="Capa_1"
                                      enable-background="new 0 0 512 512"
                                      height="0.8cm"
                                      viewBox="0 0 512 512"
                                      xmlns="http://www.w3.org/2000/svg"
                                    >
                                      <g>
                                        <g fill="#f00044">
                                          <path
                                            d="m182.1 265.4c-40.6 0-73.4 32.8-72.8 73 .4 25.8 14.6 48.2 35.5 60.7-7.1-10.9-11.3-23.8-11.5-37.7-.6-40.2 32.2-73 72.8-73 8 0 15.7 1.3 22.9 3.6v-80.5c-7.5-1.1-15.2-1.7-22.9-1.7-.4 0-.7 0-1.1 0v59.2c-7.2-2.3-14.9-3.6-22.9-3.6z"
                                          />
                                          <path
                                            d="m357.6 24h-.6-20.8c6 30.1 22.9 56.3 46.5 74.1-15.5-20.5-24.9-46.1-25.1-74.1z"
                                          />
                                          <path
                                            d="m480 146.5c-7.9 0-15.5-.8-23-2.2v57.7c-27.2 0-53.6-5.3-78.4-15.9-16-6.8-30.9-15.5-44.6-26l.4 177.9c-.2 40-16 77.5-44.6 105.8-23.3 23-52.8 37.7-84.8 42.4-7.5 1.1-15.2 1.7-22.9 1.7-34.2 0-66.8-11.1-93.3-31.6 3 3.6 6.2 7.1 9.7 10.5 28.8 28.4 67 44.1 107.7 44.1 7.7 0 15.4-.6 22.9-1.7 32-4.7 61.5-19.4 84.8-42.4 28.6-28.3 44.4-65.8 44.6-105.8l-1.5-177.9c13.6 10.5 28.5 19.3 44.6 26 24.9 10.5 51.3 15.9 78.4 15.9"
                                          />
                                        </g>
                                        <path
                                          d="m98.2 254.1c28.5-28.3 66.4-44 106.8-44.3v-21.3c-7.5-1.1-15.2-1.7-22.9-1.7-40.8 0-79.1 15.7-107.9 44.3-28.3 28.1-44.5 66.5-44.4 106.4 0 40.2 15.9 77.9 44.6 106.4 4.6 4.5 9.3 8.7 14.3 12.5-22.6-26.9-34.9-60.5-35-95.9.1-39.9 16.2-78.3 44.5-106.4z"
                                          fill="#08fff9"
                                        />
                                        <path
                                          d="m457 144.3v-21.4h-.2c-27.8 0-53.4-9.2-74-24.8 17.9 23.6 44.1 40.4 74.2 46.2z"
                                          fill="#08fff9"
                                        />
                                        <path
                                          d="m202 432.2c9.5.5 18.6-.8 27-3.5 29-9.5 49.9-36.5 49.9-68.3l.1-119v-217.4h57.2c-1.5-7.5-2.3-15.1-2.4-23h-78.8v217.3l-.1 119c0 31.8-20.9 58.8-49.9 68.3-8.4 2.8-17.5 4.1-27 3.5-12.1-.7-23.4-4.3-33.2-10.1 12.3 19 33.3 31.9 57.2 33.2z"
                                          fill="#08fff9"
                                        />
                                        <path
                                          d="m205 486.2c32-4.7 61.5-19.4 84.8-42.4 28.6-28.3 44.4-65.8 44.6-105.8l-.4-177.9c13.6 10.5 28.5 19.3 44.6 26 24.9 10.5 51.3 15.9 78.4 15.9v-57.7c-30.1-5.8-56.3-22.6-74.2-46.2-23.6-17.8-40.6-44-46.5-74.1h-57.3v217.3l-.1 119c0 31.8-20.9 58.8-49.9 68.3-8.4 2.8-17.5 4.1-27 3.5-24-1.3-44.9-14.2-57.2-33.1-20.9-12.4-35.1-34.9-35.5-60.7-.6-40.2 32.2-73 72.8-73 8 0 15.7 1.3 22.9 3.6v-59.2c-40.4.3-78.3 16-106.8 44.3-28.3 28.1-44.5 66.5-44.4 106.3 0 35.4 12.3 69 35 95.9 26.6 20.5 59.1 31.6 93.3 31.6 7.7.1 15.4-.5 22.9-1.6z"
                                        />
                                      </g>
                                    </svg>
                                  </td>
                                  <td
                                    v-if="
                                      acc.social_code.toUpperCase() ==
                                      'FACEBOOK'
                                    "
                                  >
                                    <svg
                                      version="1.1"
                                      id="Capa_1"
                                      xmlns="http://www.w3.org/2000/svg"
                                      xmlns:xlink="http://www.w3.org/1999/xlink"
                                      height="0.8cm"
                                      viewBox="0 0 512 512"
                                      style="enable-background: new 0 0 512 512"
                                      xml:space="preserve"
                                    >
                                      <path
                                        style="fill: #2196f3"
                                        d="M320,85.333h64c5.891,0,10.667-4.776,10.667-10.667v-64C394.667,4.776,389.891,0,384,0h-64
                                          c-64.772,0.071-117.263,52.561-117.333,117.333V192H128c-5.891,0-10.667,4.776-10.667,10.667v64c0,5.891,4.776,10.667,10.667,10.667
                                          h74.667v224c0,5.891,4.776,10.667,10.667,10.667h64c5.891,0,10.667-4.776,10.667-10.667v-224h74.667
                                          c4.589-0.003,8.662-2.942,10.112-7.296l21.333-64c1.862-5.589-1.16-11.629-6.749-13.491c-1.084-0.361-2.22-0.546-3.363-0.547h-96
                                          v-74.667C288,99.66,302.327,85.333,320,85.333z"
                                      />
                                    </svg>
                                  </td>
                                </tr>
                              </table>
                              <p
                                class="text-danger"
                                v-for="item in error"
                                :key="item"
                                style="margin: 10px 0 0 0"
                              >
                                {{ item }}
                              </p>
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
  </div>
</template>

<script>
export default {
  data() {
    return {
      taskList: [],
      accountList: [],
      selected: "Tất cả",
      group: localStorage.getItem("group"),
      task_id: "",
      social_id: "",
      error: "",
    };
  },
  mounted() {
    this.CallAPI("get", "task", {}, (response) => {
      this.taskList = response.data.data;
    });
    this.CallAPI("get", "social/list-account", {}, (response) => {
      this.accountList = response.data.data;
    });
  },
  methods: {
    taskDetail(id) {
      this.$store.dispatch("setTypeKey", id);
      this.$router.push("/detail-task").catch((error) => {});
    },
    receive_task_handle(acc_id, social_id) {
      this.error = [];
      if (this.social_id == social_id) {
        this.CallAPI(
          "post",
          "task/receive-task",
          {
            task_id: this.task_id,
            social_account_id: acc_id,
          },
          (response) => {
            this.$toast.success("Nhận nhiệm vụ thành công!");
          },
          (error) => {
            const statusCode = error.response.data.statusCode;
            if (statusCode == 409) {
              this.$toast.warning("Bạn đã nhận nhiệm vụ này rồi!");
            }
            if (statusCode == 422) {
              this.$toast.warning("Bạn vui lòng thêm tài nguyên");
            }
            if (statusCode == 403) {
              this.$toast.warning("Nhiệm vụ này chưa bắt đầu");
            }
          }
        );
      } else {
        this.error.push("Mạng xã hội không đúng !");
      }
    },
    receive_task(id, social_id) {
      this.error = [];
      this.task_id = id;
      this.social_id = social_id;
    },
    formatDate(value) {
      return new Date(value).toLocaleDateString();
    },
    formatText(value) {
      return value.toLowerCase();
    },
  },
};
</script>

<style>
#status {
  height: 40px;
  margin-bottom: 10px;
}
.tag-center {
  margin: 0 auto;
  display: block;
  max-width: 50px;
  text-align: center;
}
th.task {
  text-align: center;
}
.task table .require {
  background: #fbbc0b;
  margin-left: 5px;
  padding: 2px 10px;
  border-radius: 3px;
  color: #fff;
}
.task table tbody tr {
  cursor: pointer;
}
.receive-task {
  cursor: pointer;
}
.example {
  border: none;
}
.tabs-style-1 .panel-tabs {
  justify-content: end;
}
.avatar-social {
  max-width: 40px;
  border-radius: 50%;
  margin-right: 5px;
  margin-right: 10px;
}
#accountModal .account {
  padding: 10px;
}
#accountModal .account td {
  vertical-align: middle;
}
#accountModal .account:last-child {
  border-bottom: none;
}
#accountModal .account:hover {
  background: rgb(0, 0, 0, 0.05);
  transition: 100ms ease all;
  cursor: pointer;
  border-radius: 5px;
}
#accountModal .no_account {
  text-align: center;
  text-transform: uppercase;
  font-weight: 500;
  margin-top: 10px;
}
#accountModal .table {
  margin-bottom: 0;
}
#accountModal .table td {
  border: none;
}
#accountModal .table tr td:first-child,
#accountModal .table tr td:last-child {
  width: 70px;
  text-align: center;
}
#accountModal .table tr:not(:last-child) td {
  border-bottom: 1px solid rgb(0, 0, 0, 0.1);
}
@media (min-width: 576px) {
  #accountModal .modal-dialog {
    max-width: 30%;
    margin: 5.75rem auto;
  }
}
</style>
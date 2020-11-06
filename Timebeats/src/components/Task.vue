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
                                      {{ item.total_done }}/{{ item.amount }}
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
                              <p v-if="!accountList[0]" class="no_account">Vui lòng thêm tài khoản mạng xã hội</p>
                              <span
                                v-for="acc in accountList"
                                :key="acc.social_id"
                                class="account"
                                @click="
                                  receive_task_handle(acc._id, acc.social_id)
                                "
                                v-else
                              >
                                <img
                                  :src="acc.account_profile.avatarUri[1]"
                                  alt=""
                                  class="avatar-social"
                                />
                                {{ acc.account_profile.uniqueId }}
                              </span>
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
}
#accountModal .account {
  display: block;
  border-radius: 5px;
  padding: 5px;
}
#accountModal .account:hover {
  background: rgb(0, 0, 0, 0.05);
  transition: 100ms ease all;
  cursor: pointer;
}
#accountModal .no_account{
  text-align: center;
  text-transform: uppercase;
  font-weight: 500;
  margin-top: 10px;
}
@media (min-width: 576px) {
  #accountModal .modal-dialog {
    max-width: 30%;
    margin: 5.75rem auto;
  }
}
</style>
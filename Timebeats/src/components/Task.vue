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
                    <div class="tab-menu-heading">
                      <div class="tabs-menu1">
                        <!-- Tabs -->
                        <ul class="nav panel-tabs main-nav-line">
                          <li class="nav-item">
                            <a href="#" class="nav-link active">Tất Cả</a>
                          </li>
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
                    <div
                      class="panel-body tabs-menu-body main-content-body-right border-top-0 border"
                    >
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
                                    SỐ LƯỢT
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
                                    {{ item.amount }} Lượt
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
                                    {{ formatDate(item.updated_at) }}
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
                  </div>
                </div>
              </div>
            </div>
            <!--/div-->
          </div>
          <!-- /row -->
        </div>
        <!-- Container closed -->
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
      social_account_id: "",
      selected: "Tất cả",
    };
  },
  mounted() {
    this.CallAPI("get", "task", {}, (response) => {
      this.taskList = response.data.data;
      console.log(this.taskList);
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
    receive_task(id, social_id) {
      for (let acc of this.accountList) {
        if (acc.social_id == social_id) {
          this.social_account_id = acc._id;
        }
      }
      this.CallAPI(
        "post",
        "task/receive-task",
        {
          task_id: id,
          social_account_id: this.social_account_id,
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
</style>
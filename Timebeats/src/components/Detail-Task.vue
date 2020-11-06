<template>
  <div id="Detail-Notify" class="main-content horizontal-content">
    <vue-headful title="Nhiệm vụ" />
    <!---->
    <div class="container">
      <div class="breadcrumb-header justify-content-between">
        <div class="my-auto">
          <div class="d-flex">
            <h4 class="content-title mb-0 my-auto">Chi tiết nhiệm vụ</h4>
          </div>
        </div>
      </div>
      <div class="row row-sm">
        <div class="col-lg-12 col-md-12">
          <div class="card card-body pd-20 pd-md-40 border shadow-none">
            <!---->
            <div class="detail-task">
              <router-link tag="a" to="/task"
                ><span id="return-list"><i class="fas fa-arrow-left"></i></span
              ></router-link>
              <span class="title">{{ detailTask.description }}</span>
              <div class="content">
                <div class="table-responsive">
                  <table
                    id="statistic"
                    class="table text-md-nowrap data-table table-bordered table-hover"
                  >
                    <thead>
                      <tr>
                        <th class="wd-10p border-bottom-0 task">NỀN TẢNG</th>
                        <th class="wd-10p border-bottom-0 task">
                          NỘI DUNG NHIỆM VỤ
                        </th>
                        <th class="wd-10p border-bottom-0 task">PHẦN THƯỞNG</th>
                        <th class="wd-10p border-bottom-0 task">CÒN LẠI</th>
                        <th class="wd-10p border-bottom-0 task">ĐÃ NHẬN</th>
                        <th class="wd-10p border-bottom-0 task">LINK</th>
                        <th class="wd-10p border-bottom-0 task">
                          Ngày bắt đầu
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td class="text-center">{{ nameSocial }}</td>
                        <td>
                          <span
                            v-for="item in detailTask.require"
                            :key="item._id"
                            class="require"
                            >{{ item.key }}</span
                          >
                        </td>
                        <td>
                          {{ detailTask.total_price / detailTask.amount }}₫/lượt
                        </td>
                        <td>
                          {{ detailTask.total_done }}/{{ detailTask.amount }}
                          lượt
                        </td>
                        <td>{{ detailTask.total_take }} lượt</td>
                        <td style="max-width: 200px">{{ detailTask.link }}</td>
                        <td class="text-center">{{ formatTime }}</td>
                      </tr>
                    </tbody>
                  </table>
                  <button
                    type="submit"
                    class="btn btn-success btn-feedback"
                    data-target="#account-Modal"
                    data-toggle="modal"
                    @click="
                      receive_task(detailTask._id, detailTask.social_id._id)
                    "
                  >
                    Nhận nhiệm vụ
                  </button>
                </div>
                <div
                  class="modal fade"
                  id="account-Modal"
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
                        <span
                          v-for="acc in accountList"
                          :key="acc.social_id"
                          class="account"
                          @click="receive_task_handle(acc._id, acc.social_id)"
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
</template>

<script>
export default {
  data() {
    return {
      detailTask: {},
      social_account_id: "",
      nameSocial: "",
    };
  },
  computed: {
    formatTime() {
      return new Date(this.detailTask.begin_date).toLocaleDateString();
    },
  },
  mounted() {
    this.CallAPI(
      "get",
      "task/detail/" + this.$store.getters.type_key,
      {},
      (response) => {
        this.detailTask = response.data.data[0];
        this.nameSocial = response.data.data[0].social_id.name;
      }
    );

    this.$root.$on("getDetailTask", (type_key) => {
      this.CallAPI("get", "task/detail/" + type_key, {}, (response) => {
        this.detailTask = response.data.data[0];
      });
    });
    this.CallAPI(
      "get",
      "social/list-account",
      {},
      (response) => {
        this.accountList = response.data.data;
      },
      (error) => {}
    );
  },
  methods: {
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
  },
};
</script>

<style>
.detail-task .title {
  display: block;
  font-size: 16px;
  font-weight: 700;
  text-transform: uppercase;
  margin-bottom: 30px;
  color: #666;
  text-align: center;
}
table .require {
  background: #fbbc0b;
  margin-left: 5px;
  padding: 2px 10px;
  border-radius: 3px;
  color: #fff;
}
.btn-feedback {
  margin: 0 auto;
  display: block;
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
#account-Modal .account {
  display: block;
  border-radius: 5px;
  padding: 5px;
}
#account-Modal .account:hover {
  background: rgb(0, 0, 0, 0.05);
  transition: 100ms ease all;
  cursor: pointer;
}
#account-Modal .no_account {
  text-align: center;
  text-transform: uppercase;
  font-weight: 500;
  margin-top: 10px;
}
@media (min-width: 576px) {
  #account-Modal .modal-dialog {
    max-width: 30%;
    margin: 5.75rem auto;
  }
}
</style>
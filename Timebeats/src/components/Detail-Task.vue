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
                        <th class="wd-10p border-bottom-0 task">SỐ LƯỢT</th>
                        <th class="wd-10p border-bottom-0 task">Ngày</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>TIKTOK</td>
                        <td>
                          <span
                            v-for="item in detailTask.require"
                            :key="item._id"
                            class="require"
                            >{{ item.key }}</span
                          >
                        </td>
                        <td>{{ detailTask.total_price }} $</td>
                        <td>{{ detailTask.amount }} Lượt</td>
                        <td>{{ formatTime }}</td>
                      </tr>
                    </tbody>
                  </table>
                  <button
                    type="submit"
                    class="btn btn-success btn-feedback"
                    @click="
                      receive_task(detailTask._id, detailTask.social_id._id)
                    "
                  >
                    Nhận nhiệm vụ
                  </button>
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
    };
  },
  computed: {
    formatTime() {
      return new Date(this.detailTask.created_at).toLocaleDateString();
    },
  },
  mounted() {
    this.CallAPI(
      "get",
      "task/detail/" + this.$store.getters.type_key,
      {},
      (response) => {
        this.detailTask = response.data.data[0];
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
        console.log(this.accountList);
      },
      ((error) => {})
    );
  },
  methods: {
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
          if (statusCode == 403) {
            this.$toast.warning("Đây là nhiệm vụ của bạn");
          }
          if (statusCode == 422) {
            this.$toast.warning("Vui lòng thêm tài nguyên");
          }
        }
      );
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
</style>
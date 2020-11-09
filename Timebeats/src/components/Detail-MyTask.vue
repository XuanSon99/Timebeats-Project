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
              <router-link tag="a" to="/make-camp"><span id="return-list"><i class="fas fa-arrow-left"></i></span></router-link>
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
                        <th class="wd-10p border-bottom-0 task">LINK</th>
                        <th class="wd-10p border-bottom-0 task">Ngày bắt đầu</th>
                        <th class="wd-10p border-bottom-0 task">Trạng thái</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td class="text-center">{{nameSocial}}</td>
                        <td>
                          <span
                            v-for="item in detailTask.require"
                            :key="item._id"
                            class="require"
                            >{{ item.key }}</span
                          >
                        </td>
                        <td>{{ detailTask.total_price/detailTask.amount }}₫/lượt</td>
                        <td>{{ detailTask.amount - detailTask.total_done }}/{{ detailTask.amount }} lượt</td>
                        <td style="max-width: 200px">{{ detailTask.link }}</td>
                        <td class="text-center">{{ formatTime }}</td>
                        <td class="text-center" v-if="detailTask.status == 'confirmed'">Đã xác nhận</td>
                        <td class="text-center" v-else>Chưa xác nhận</td>
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
</template>

<script>
export default {
  data() {
    return {
      detailTask: {},
      social_account_id: "",
      nameSocial: ""
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
        console.log(this.detailTask);
        this.nameSocial = this.detailTask.social_id.name;
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
      ((error) => {})
    );
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
</style>
<template>
  <div class="home">
    <vue-headful title="Trang chủ" />
    <div class="main-content horizontal-content">
      <div id="dasboardMobile" style="display: none">
        <br />
      </div>
      <!-- container opened -->
      <div class="container">
        <!-- row -->
        <div class="row row-sm">
          <div class="col-xl-3 col-lg-6 col-md-6 col-xm-12">
            <div class="card overflow-hidden sales-card bg-danger-gradient">
              <div class="pl-3 pt-3 pr-3 pb-2 pt-0">
                <div class>
                  <h6 class="mb-3 tx-12 text-white">THU NHẬP CHỜ DUYỆT</h6>
                </div>
                <div class="pb-0 mt-0">
                  <div class="d-flex">
                    <div class>
                      <h4 class="tx-20 font-weight-bold mb-1 text-white">
                        280.000đ
                      </h4>
                      <p class="mb-0 tx-12 text-white op-7">
                        So sánh với tuần trước
                      </p>
                    </div>
                    <span class="float-right my-auto ml-auto">
                      <i class="fas fa-arrow-circle-up text-white"></i>
                      <span class="text-white op-7">32%</span>
                    </span>
                  </div>
                </div>
              </div>
              <span id="compositeline1" class="pt-1">
                <apexchart
                  width="260"
                  type="line"
                  :options="options"
                  :series="series_1"
                ></apexchart>
              </span>
            </div>
          </div>
          <div class="col-xl-3 col-lg-6 col-md-6 col-xm-12">
            <div class="card overflow-hidden sales-card bg-success-gradient">
              <div class="pl-3 pt-3 pr-3 pb-2 pt-0">
                <div class>
                  <h6 class="mb-3 tx-12 text-white">THU NHẬP ĐÃ DUYỆT</h6>
                </div>
                <div class="pb-0 mt-0">
                  <div class="d-flex">
                    <div class>
                      <h4 class="tx-20 font-weight-bold mb-1 text-white">
                        1.280.000đ
                      </h4>
                      <p class="mb-0 tx-12 text-white op-7">
                        So sánh với tuần trước
                      </p>
                    </div>
                    <span class="float-right my-auto ml-auto">
                      <i class="fas fa-arrow-circle-up text-white"></i>
                      <span class="text-white op-7">68%</span>
                    </span>
                  </div>
                </div>
              </div>
              <span id="compositeline2" class="pt-1">
                <apexchart
                  width="260"
                  type="line"
                  :options="options"
                  :series="series_1"
                ></apexchart>
              </span>
            </div>
          </div>
          <div class="col-xl-3 col-lg-6 col-md-6 col-xm-12">
            <div class="card overflow-hidden sales-card bg-primary-gradient">
              <div class="pl-3 pt-3 pr-3 pb-2 pt-0">
                <div class>
                  <h6 class="mb-3 tx-12 text-white">CHIẾN DỊCH CỦA BẠN</h6>
                </div>
                <div class="pb-0 mt-0">
                  <div class="d-flex">
                    <div class>
                      <h4 class="tx-20 font-weight-bold mb-1 text-white">
                        750.000đ
                      </h4>
                      <p class="mb-0 tx-12 text-white op-7">
                        So sánh với tuần trước
                      </p>
                    </div>
                    <span class="float-right my-auto ml-auto">
                      <i class="fas fa-arrow-circle-up text-white"></i>
                      <span class="text-white op-7">100%</span>
                    </span>
                  </div>
                </div>
              </div>
              <span id="compositeline3" class="pt-1">
                <apexchart
                  width="260"
                  type="line"
                  :options="options"
                  :series="series_1"
                ></apexchart>
              </span>
            </div>
          </div>
          <div class="col-xl-3 col-lg-6 col-md-6 col-xm-12">
            <div class="card overflow-hidden sales-card bg-warning-gradient">
              <div class="pl-3 pt-3 pr-3 pb-2 pt-0">
                <div class>
                  <h6 class="mb-3 tx-12 text-white">SỐ DƯ TÀI KHOẢN</h6>
                </div>
                <div class="pb-0 mt-0">
                  <div class="d-flex">
                    <div class>
                      <h4 class="tx-20 font-weight-bold mb-1 text-white">
                        690.000đ
                      </h4>
                      <p class="mb-0 tx-12 text-white op-7">
                        So sánh với tuần trước
                      </p>
                    </div>
                    <span class="float-right my-auto ml-auto">
                      <i class="fas fa-arrow-circle-up text-white"></i>
                      <span class="text-white op-7">12%</span>
                    </span>
                  </div>
                </div>
              </div>
              <span id="compositeline4" class="pt-1">
                <apexchart
                  width="260"
                  type="line"
                  :options="options"
                  :series="series_1"
                ></apexchart>
              </span>
            </div>
          </div>
        </div>
        <!-- row closed -->

        <!-- row opened -->
        <div class="row row-sm">
          <div class="col-md-12 col-lg-12 col-xl-7">
            <div class="card">
              <div class="card-header bg-transparent pd-b-0 pd-t-20 bd-b-0">
                <div class="d-flex justify-content-between">
                  <h4 class="card-title mb-0">Nhiệm Vụ Dành Cho Bạn</h4>
                </div>
                <p class="tx-12 text-muted mb-0">
                  Hoàn Thành Nhanh Các Nhiệm Vụ Giới Hạn Hấp Dẫn Dành Riêng Cho
                  Bạn
                </p>
              </div>
              <div class="card-body">
                <div class="row task">
                  <div class="col-xl-12">
                    <div class="table-responsive">
                      <table
                        class="table text-md-nowrap data-table table-bordered table-hover"
                        id="statistic"
                      >
                        <thead>
                          <tr>
                            <th class="wd-10p border-bottom-0 task">STT</th>
                            <th class="wd-10p border-bottom-0 task">
                              NỀN TẢNG
                            </th>
                            <th class="wd-10p border-bottom-0 task">
                              NỘI DUNG NHIỆM VỤ
                            </th>
                            <th class="wd-10p border-bottom-0 task">
                              PHẦN THƯỞNG
                            </th>
                            <th class="wd-10p border-bottom-0 task">SỐ LƯỢT</th>
                            <th class="wd-10p border-bottom-0 task">
                              CHI TIẾT
                            </th>
                          </tr>
                        </thead>
                        <tbody>
                          <!-- <tr
                                  v-for="(item, index) in taskList"
                                  :key="index"
                                  @click="taskDetail(item._id)"
                                > -->
                          <tr v-for="(item, index) in taskList" :key="index">
                            <td @click="taskDetail(item._id)" scope="row">
                              {{ index + 1 }}
                            </td>
                            <td @click="taskDetail(item._id)">
                              {{ item.social_id.name }}
                            </td>
                            <td @click="taskDetail(item._id)">
                              <span
                                class="require"
                                v-for="req in item.require"
                                :key="req.key"
                                >{{ req.key }}</span
                              >
                            </td>
                            <td @click="taskDetail(item._id)">
                              {{ item.total_price / item.amount }}₫
                            </td>
                            <td @click="taskDetail(item._id)">
                              {{ item.amount }} Lượt
                            </td>
                            <td>
                              <span class="tag tag-indigo tag-center">
                                <a
                                  class="text-white receive-task"
                                  @click="
                                    receive_task(item._id, item.social_id._id)
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
          <div class="col-lg-12 col-xl-5">
            <div class="card card-dashboard-map-one">
              <label class="main-content-label"
                >THÔNG BÁO TỪ BAN QUẢN TRỊ</label
              >
              <span class="d-block mg-b-20 text-muted tx-12">
                Thông báo mới nhất từ các chương trình của TimeBeats sẽ được cập
                nhật tại đây. Hãy cũng TimeBeats điểm qua ngay những tin tức
                &#039;HOT&#039; nhất nhé!
              </span>
              <div class>
                <ul class="list-unstyled mb-0">
                  <li class="media d-block d-sm-flex">
                    <div class="media-body">
                      <div class>
                        <h5 class="mg-b-5 tx-inverse tx-15">
                          <img
                            style="width: 20px; height: 20px; margin-right: 5px"
                            src="../assets/vendor/img/notification-bell.png"
                            alt
                          />
                          <a
                            style="color: black"
                            href="https://timebeats.com/dashboard/notification/detail/15"
                          >
                            Thông báo tiến hành xác thực tài khoản (KYC) tại hệ
                            thống TimeBeats.
                            <span
                              style="color: #7987a1 !important"
                              class="mt-1 tx-13 mb-0"
                              >( 2020-09-01 )</span
                            >
                          </a>
                        </h5>
                      </div>
                      <p>
                        Th&acirc;n gửi qu&yacute; th&agrave;nh
                        vi&ecirc;n&nbsp;TimeBeats Việt Nam
                      </p>

                      <p>
                        Nhằm n&acirc;ng cao chất lượng cộng đồng, tăng
                        gi&aacute; trị của c&aacute;c chiến dịch, quảng
                        c&aacute;o, mở ra c&aacute;c chiến dịch, nhiệm vụ, quảng
                        c&aacute;o hướng đối tượng cũng như đảm bảo t&iacute;nh
                        c&ocirc;ng bằng cho tất cả c&aacute;c đối tượng...
                        <a
                          href="https://timebeats.com/dashboard/notification/detail/15"
                        >
                          Xem thêm
                        </a>
                      </p>
                    </div>
                  </li>
                  <li class="media d-block d-sm-flex mg-t-25">
                    <div class="media-body">
                      <div class>
                        <h5 class="mg-b-5 tx-inverse tx-15">
                          <img
                            style="width: 20px; height: 20px; margin-right: 5px"
                            src="../assets/vendor/img/notification-bell.png"
                            alt
                          />
                          <a
                            style="color: black"
                            href="https://timebeats.com/dashboard/notification/detail/14"
                          >
                            THÔNG BÁO BẢO TRÌ HỆ THỐNG
                            <span
                              style="color: #7987a1 !important"
                              class="mt-1 tx-13 mb-0"
                              >( 2020-09-01 )</span
                            >
                          </a>
                        </h5>
                      </div>
                    </div>
                  </li>
                  <li class="media d-block d-sm-flex mg-t-25">
                    <div class="media-body">
                      <div class>
                        <h5 class="mg-b-5 tx-inverse tx-15">
                          <img
                            style="width: 20px; height: 20px; margin-right: 5px"
                            src="../assets/vendor/img/notification-bell.png"
                            alt
                          />
                          <a
                            style="color: black"
                            href="https://timebeats.com/dashboard/notification/detail/13"
                          >
                            THÔNG BÁO: V/v CẬP NHẬT CHÍNH SÁCH THƯỞNG THU NHẬP
                            THÀNH VIÊN TRONG HỆ THỐNG ĐỐI VỚI CHIẾN DỊCH LIAN
                            <span
                              style="color: #7987a1 !important"
                              class="mt-1 tx-13 mb-0"
                              >( 2020-08-28 )</span
                            >
                          </a>
                        </h5>
                      </div>
                    </div>
                  </li>
                  <li class="media d-block d-sm-flex mg-t-25">
                    <div class="media-body">
                      <div class>
                        <h5 class="mg-b-5 tx-inverse tx-15">
                          <img
                            style="width: 20px; height: 20px; margin-right: 5px"
                            src="../assets/vendor/img/notification-bell.png"
                            alt
                          />
                          <a
                            style="color: black"
                            href="https://timebeats.com/dashboard/notification/detail/12"
                          >
                            THÔNG BÁO Công Bố Giải Thưởng Top 50 Chương Trình
                            Đua TOP: "CHÚNG TÔI LÀ NGƯỜI HỖ TRỢ"
                            <span
                              style="color: #7987a1 !important"
                              class="mt-1 tx-13 mb-0"
                              >( 2020-08-15 )</span
                            >
                          </a>
                        </h5>
                      </div>
                    </div>
                  </li>
                  <li class="media d-block d-sm-flex mg-t-25">
                    <div class="media-body">
                      <div class>
                        <h5 class="mg-b-5 tx-inverse tx-15">
                          <img
                            style="width: 20px; height: 20px; margin-right: 5px"
                            src="../assets/vendor/img/notification-bell.png"
                            alt
                          />
                          <a
                            style="color: black"
                            href="https://timebeats.com/dashboard/notification/detail/11"
                          >
                            Thông báo: Công bố & Trao thưởng chương trình đua
                            TOP "CHÚNG TÔI LÀ NGƯỜI HỖ TRỢ"
                            <span
                              style="color: #7987a1 !important"
                              class="mt-1 tx-13 mb-0"
                              >( 2020-08-10 )</span
                            >
                          </a>
                        </h5>
                      </div>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <!-- row closed -->
      </div>
    </div>
  </div>
</template>

<script>
import Vue from "vue";
import { mapGetters } from "vuex";
import VueApexCharts from "vue-apexcharts";
Vue.component("apexchart", VueApexCharts);

export default {
  name: "home",
  data() {
    return {
      taskList: [],
      accountList: [],
      social_account_id: "",
      options: {
        chart: {
          id: "vuechart",
        },
        xaxis: {
          categories() {
            for (let i = 1; i < 10; i++) {
              return i;
            }
          },
        },
      },
      series_1: [
        {
          name: "Chờ duyệt",
          data: [
            10,
            12,
            14,
            16,
            18,
            16,
            18,
            20,
            18,
            16,
            22,
            24,
            26,
            24,
            22,
            24,
            20,
            12,
          ],
        },
      ],
    };
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
            this.$toast.warning("Nhiệm vụ chưa bắt đầu");
          }
        }
      );
    },
  },
  mounted() {
    this.CallAPI("get", "task", {}, (response) => {
      this.taskList = response.data.data;
    });
    this.CallAPI("get", "social/list-account", {}, (response) => {
      this.accountList = response.data.data;
      console.log(this.accountList);
    });
  },
};
</script>

<style>
.tag-center {
  margin: 0 auto;
  display: block;
  max-width: 50px;
  text-align: center;
}
#compositeline,
#compositeline2,
#compositeline3,
#compositeline4 {
  position: relative;
  bottom: -1px;
  min-height: 180px;
}
.apexcharts-toolbar {
  display: none;
}
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
</style>
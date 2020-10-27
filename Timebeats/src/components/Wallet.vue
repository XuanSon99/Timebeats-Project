<template>
  <div>
    <vue-headful title="Tài khoản" />
    <div class="main-content horizontal-content">
      <!-- container opened -->
      <div class="container">
        <!-- breadcrumb -->
        <div class="breadcrumb-header justify-content-between">
          <div class="my-auto">
            <div class="d-flex">
              <h4 class="content-title mb-0 my-auto">Số Dư</h4>
            </div>
          </div>
        </div>
        <!-- breadcrumb -->

        <!-- row opened -->
        <div class="col-xl-12">
          <div class="card">
            <div class="card-header pb-0">
              <div class="d-flex justify-content-between">
                <h4 class="card-title mg-b-0">Số Dư</h4>
                <i class="mdi mdi-dots-horizontal text-gray"></i>
              </div>
            </div>
            <div class="card-body">
              <div class="table-responsive">
                <table class="table table-striped mg-b-0 text-md-nowrap">
                  <thead>
                    <tr>
                      <th>Ví</th>
                      <th>SỐ DƯ TÀI KHOẢN</th>
                      <th>RÚT TIỀN CHỜ DUYỆT</th>
                      <th>TỔNG RÚT TIỀN</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td scope="row">VÍ VND</td>
                      <td>{{ formatMoney(balance) }} ₫</td>
                      <td>800.000 ₫</td>
                      <td>6.000.000 ₫</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <!-- bd -->
            </div>
            <div class="card-footer">
              <div class="action">
                <a class="btn btn-danger">Rút tiền</a>
                <router-link class="btn btn-warning" tag="a" to="/payment"
                  >Thanh toán</router-link
                >
              </div>
            </div>
            <!-- bd -->
          </div>
          <!-- bd -->
        </div>

        <div class="col-xl-12">
          <div class="card">
            <div class="card-header pb-0">
              <div class="d-flex justify-content-between">
                <h4 class="card-title mg-b-0">LỊCH SỬ GIAO DỊCH</h4>
                <i class="mdi mdi-dots-horizontal text-gray"></i>
              </div>
            </div>
            <div class="card-body">
              <!-- <div class="row">
                <div class="col-xl-3">
                  <div class="form-group row">
                    <div class="col-xl-3 lab">
                      <label for="loc">Lọc</label>
                    </div>
                    <div class="col-xl-8">
                      <select
                        name
                        id="loc"
                        class="form-control"
                        style="margin-bottom: 10px"
                      >
                        <option value="all">Tất cả</option>
                        <option value>Chờ duyệt</option>
                        <option value>Tạm duyệt</option>
                        <option value>Đã duyệt</option>
                        <option value>Thành công</option>
                        <option value>Thất bại</option>
                      </select>
                    </div>
                  </div>
                </div>
              </div> -->
              <div class="table-responsive">
                <table
                  class="table text-md-nowrap data-table table-bordered table-hover"
                  id="withdrawal"
                >
                  <thead class="text-center">
                    <tr>
                      <th>ID</th>
                      <th>NGÀY</th>
                      <th>THỜI GIAN</th>
                      <th>TÀI KHOẢN</th>
                      <th>PHƯƠNG THỨC</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr v-for="(item, index) in withdrawalHistory" :key="index">
                      <td class="text-center">{{ index + 1 }}</td>
                      <td class="text-center">
                        {{ formatDate(item.updated_at) }}
                      </td>
                      <td class="text-center">
                        {{ formatTime(item.updated_at) }}
                      </td>
                      <td class="text-center">
                        <span v-if="item.method == 'deposit'">+</span>
                        <span v-if="item.method == 'voucher' || item.method == 'task'">- </span
                        >{{ formatMoney(item.amount) }}₫
                      </td>
                      <td>
                        <span v-if="item.method == 'deposit'">- Nạp tiền</span>
                        <span v-if="item.method == 'voucher' || item.method == 'task'">- Tạo {{ item.method }}</span>
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
</template>

<script>
export default {
  data() {
    return {
      withdrawalHistory: [],
      balance: [],
    };
  },
  mounted() {
    this.CallAPI("get", "money/v2/history", {}, (response) => {
        this.withdrawalHistory = response.data.data;
      });
    this.CallAPI("get", "money/v2/balance", {}, (response) => {
        this.balance = response.data.data[0].balance;
      });
  },
  methods: {
    formatDate(date) {
      return new Date(date).toLocaleDateString();
    },
    formatTime(date) {
      return new Date(date).toLocaleTimeString();
    },
    formatMoney(value) {
      return value.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
    },
  },
};
</script>

<style>
.withdrawal .dropdown-menu {
  top: -7px !important;
  left: -1px !important;
}
.withdrawal .dropdown-menu {
  top: -7px !important;
  left: 129px !important;
}
.table thead th {
  padding: 10px 12px;
}
.breadcrumb-header {
  padding-left: 12px;
}
.action {
  text-align: right;
}
.action > a {
  padding: 12px 20px !important;
  font-size: 14px !important;
}
.lab {
  margin-bottom: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>
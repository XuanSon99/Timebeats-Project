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
                      <td>{{ lastBanlance }} đ</td>
                      <td>{{ totalWithdrawPending }} đ</td>
                      <td>{{ totalWithdraw }} đ</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <!-- bd -->
            </div>
            <div class="card-footer">
              <div class="action">
                <a class="btn btn-danger">Rút tiền</a>
                <router-link class="btn btn-danger" tag="a" to="/payment">Thanh toán</router-link>
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
                <h4 class="card-title mg-b-0">LỊCH SỬ RÚT TIỀN</h4>
                <i class="mdi mdi-dots-horizontal text-gray"></i>
              </div>
            </div>
            <div class="card-body">
              <div class="row">
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
              </div>
              <div class="table-responsive">
                <table
                  class="table text-md-nowrap data-table table-bordered table-hover"
                  id="withdrawal"
                >
                  <thead>
                    <tr>
                      <th>ID</th>
                      <th>NGÀY</th>
                      <th>TỔNG CỘNG</th>
                      <th>PHƯƠNG THỨC RÚT TIỀN</th>
                      <th>TRẠNG THÁI</th>
                      <th>MỔ TẢ</th>
                      <th>TIỀN TỆ</th>
                      <th>HÀNH ĐỘNG</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>0</td>
                      <td>NGÀY</td>
                      <td>TỔNG CỘNG</td>
                      <td>PHƯƠNG THỨC RÚT TIỀN</td>
                      <td>TRẠNG THÁI</td>
                      <td>MỔ TẢ</td>
                      <td>TIỀN TỆ</td>
                      <td>HÀNH ĐỘNG</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <!-- bd -->
            </div>
            <!-- bd -->
          </div>
          <!-- bd -->
        </div>
        <!-- /row -->
      </div>
      <!-- Container closed -->
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      info: {},
      status: Boolean,
      message: null,
      lastBanlance: Number,
      totalDeposit: Number,
      totalWithdraw: Number,
      totalWithdrawPending: Number,
      totalWithdrawSuccess: Number,
    };
  },
  mounted() {
    this.$axios
      .get("http://192.168.100.11:3000/api/money/history", {
        headers: {
          Authorization:
            this.$store.getters.id + " " + this.$store.getters.token,
        },
      })
      .then((response) => {
        console.log(response.data.data[0]);
        this.info = response.data;
        this.status = response.data.status;
        this.lastBanlance = response.data.data[0].dataBalance.lastBalance;
        this.totalDeposit = response.data.data[0].dataBalance.totalDeposit;
        this.totalWithdraw = response.data.data[0].dataBalance.totalWithdraw;
        this.totalWithdrawPending =
          response.data.data[0].dataBalance.totalWithdrawPending;
        this.totalWithdrawSuccess =
          response.data.data[0].dataBalance.totalWithdrawSuccess;
      });
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
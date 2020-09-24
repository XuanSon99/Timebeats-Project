<template>
  <div>
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
                      <th>HÀNH ĐỘNG</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td scope="row">VÍ VND</td>
                      <td>{{lastBanlance}} đ</td>
                      <td>{{totalWithdrawPending}} đ</td>
                      <td>{{totalWithdraw}} đ</td>

                      <td>
                        <div class="dropdown withdrawal">
                          <button
                            aria-expanded="false"
                            aria-haspopup="true"
                            class="btn ripple btn-primary"
                            data-toggle="dropdown"
                            id="dropdownMenuButton"
                            type="button"
                          >
                            Hành động
                            <i class="fas fa-caret-down ml-1"></i>
                          </button>
                          <div class="dropdown-menu tx-13">
                            <router-link class="dropdown-item withdrawal" to="/Withdrawal">Rút tiền</router-link>
                            <router-link class="dropdown-item deposit" to="/Deposit">Nạp tiền</router-link>
                            <router-link class="dropdown-item banking" to="/Banking">Chuyển tiền</router-link>
                          </div>
                        </div>
                      </td>
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

        <div class="col-xl-12">
          <div class="card">
            <div class="card-header pb-0">
              <div class="d-flex justify-content-between">
                <h4 class="card-title mg-b-0">LỊCH SỬ RÚT TIỀN</h4>
                <i class="mdi mdi-dots-horizontal text-gray"></i>
              </div>
            </div>
            <div class="card-body">
              <div class="dataTables_length" id="example1_length">
                <label>
                  <span>Lọc</span>
                  <select
                    id="filter"
                    style="display: block; width: 164px"
                    name="example1_length"
                    aria-controls="example1"
                    class="custom-select custom-select-sm form-control form-control-sm"
                  >
                    <option value>TẤT CẢ</option>
                    <option value="0">TẠM DUYỆT</option>
                    <option value="1">CHỜ DUYỆT</option>
                    <option value="2">ĐÃ DUYỆT</option>
                    <option value="3">THÀNH CÔNG</option>
                    <option value="4">THẤT BẠI</option>
                    <option value="5">TỪ CHỐI</option>
                    <option value="6">HOÀN TIỀN</option>
                  </select>
                </label>
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
      totalWithdrawSuccess: Number
    }
  },
  mounted() {
    this.$axios
    .get('http://192.168.60.69:3000/api/money/history', {
      headers: {
          Authorization:
            this.$store.getters.id + " " + this.$store.getters.token,
          }
    })
    .then((response) => {
      console.log(response.data.data[0])
      this.info = response.data
      this.status = response.data.status
      this.lastBanlance = response.data.data[0].dataBalance.lastBalance
      this.totalDeposit = response.data.data[0].dataBalance.totalDeposit
      this.totalWithdraw = response.data.data[0].dataBalance.totalWithdraw
      this.totalWithdrawPending = response.data.data[0].dataBalance.totalWithdrawPending
      this.totalWithdrawSuccess = response.data.data[0].dataBalance.totalWithdrawSuccess
      
    })
  }
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
</style>
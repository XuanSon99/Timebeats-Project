<template>
  <div>
    <Header />
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
                      <th scope="row">VÍ VND</th>
                      <td>0 đ</td>
                      <td>0 đ</td>
                      <td>0 đ</td>

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
                            Rút tiền
                            <i class="fas fa-caret-down ml-1"></i>
                          </button>
                          <div class="dropdown-menu tx-13">
                            <a class="dropdown-item vnd" href>
                              VNDC
                              Wallet Pro
                            </a>
                            <a class="dropdown-item banking" href>
                              Tài
                              khoản ngân hàng
                            </a>
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
                  <tbody></tbody>
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
import Header from "./Header";
export default {
  components: {
    Header,
  },
};
</script>

<style>
.withdrawal .dropdown-menu {
  top: -7px !important;
  left: -1px !important;
}
</style>
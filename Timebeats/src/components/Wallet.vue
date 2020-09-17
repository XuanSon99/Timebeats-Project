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

        <div class="col-xl-12" id="vndc">
          <div class="card">
            <div class="card-header pb-0">
              <div class="d-flex justify-content-between">
                <h4 class="card-title mg-b-0">THÔNG TIN RÚT QUA VNDC WALLET PRO</h4>
                <i class="mdi mdi-dots-horizontal text-gray"></i>
              </div>
            </div>
            <div class="card-body">
              <form
                class="form-horizontal"
                id="withdrawFrom"
                method="post"
                action="https://timebeats.com/dashboard/withdrawal/withdraw"
              >
                <input type="hidden" name="_token" value="9CRxmKLNzjSPgU2OMwZGPGlU7RxqFNbzOhafUgRJ" />
                <div class="form-group">
                  <label class="main-content-label tx-11 tx-medium tx-gray-600">
                    ĐỊA CHỈ VÍ
                    VNDC
                  </label>
                  <div class="pos-relative">
                    <input
                      class="form-control pd-r-80"
                      placeholder="Email hoặc Số điện thoại"
                      required
                      name="address"
                      type="text"
                      value
                    />
                  </div>
                </div>
                <div class="form-group">
                  <label class="main-content-label tx-11 tx-medium tx-gray-600">
                    SỐ TIỀN (Ít nhất
                    100,000đ)
                  </label>
                  <div class="pos-relative">
                    <input class="form-control pd-r-80 amountVNC" min="100000" required type="text" />
                    <input type="hidden" name="amount" />
                    <p class="alert alert-danger validateNumber" style="display: none;">
                      Số tiền rút
                      tối thiểu là 100000.
                    </p>
                  </div>
                </div>
                <p style="font-weight: bolder;">
                  Chúng tôi sẽ gửi mail xác nhận thông tin, xin hãy cung
                  cấp chính xác email và xác nhận mail chúng tôi sẽ gửi ngay khi rút tiền.
                </p>
              </form>
            </div>
            <!-- bd -->
          </div>
          <!-- bd -->
        </div>

        <div class="col-xl-12" id="accountBanking">
          <div class="card">
            <div class="card-header pb-0">
              <div class="d-flex justify-content-between">
                <h4 class="card-title mg-b-0">THÔNG TIN RÚT TIỀN QUA NGÂN HÀNG</h4>
                <i class="mdi mdi-dots-horizontal text-gray"></i>
              </div>
            </div>
            <div class="card-body">
              <form
                class="form-horizontal"
                id="withdrawFromBanking"
                method="post"
                action="https://timebeats.com/dashboard/withdrawal/account-banking"
              >
                <input type="hidden" name="_token" value="9CRxmKLNzjSPgU2OMwZGPGlU7RxqFNbzOhafUgRJ" />
                <div class="form-group">
                  <label class="main-content-label tx-11 tx-medium tx-gray-600">CHỦ TÀI KHOẢN</label>
                  <div class="pos-relative">
                    <input
                      class="form-control pd-r-80"
                      placeholder="Ví dụ: Nguyen Van A"
                      required
                      name="name"
                      type="text"
                      value
                    />
                  </div>
                </div>

                <div class="form-group">
                  <label class="main-content-label tx-11 tx-medium tx-gray-600">SỐ CMND/ CCCD</label>
                  <div class="pos-relative">
                    <input
                      class="form-control pd-r-80"
                      placeholder="Ví dụ: 24377651168"
                      required
                      name="id"
                      type="text"
                      value
                    />
                  </div>
                </div>

                <div class="form-group">
                  <label class="main-content-label tx-11 tx-medium tx-gray-600">SỐ TÀI KHOẢN</label>
                  <div class="pos-relative">
                    <input
                      class="form-control pd-r-80"
                      placeholder="Ví dụ: 24377651168"
                      required
                      name="account"
                      type="text"
                      value
                    />
                  </div>
                </div>

                <!-- <div class="form-group">
                  <label class="main-content-label tx-11 tx-medium tx-gray-600">TÊN NGÂN HÀNG</label>
                  <div class="pos-relative">
                    <select name="banking" class="form-control pd-r-80">
                      <option key="NH TMCP Á Châu (ACB Bank)">NH TMCP Á Châu (ACB Bank)</option>
                      <option key="NH TMCP Quân Đội (MB Bank)">NH TMCP Quân Đội (MB Bank)</option>
                      <option key="NHTMCP Ngoại Thương Việt Nam (Vietcombank)">
                        NHTMCP Ngoại Thương
                        Việt Nam (Vietcombank)
                      </option>
                      <option key="NHTMCP Kỹ Thương Việt Nam (Techcombank)">
                        NHTMCP Kỹ Thương Việt
                        Nam (Techcombank)
                      </option>
                      <option key="NH TMCP Công thương Việt Nam (Vietinbank)">
                        NH TMCP Công thương
                        Việt Nam (Vietinbank)
                      </option>
                      <option key="NHTMCP Sài Gòn Thương Tín (Sacombank)">
                        NHTMCP Sài Gòn Thương Tín
                        (Sacombank)
                      </option>
                      <option key="NH TMCP Đầu Tư và Phát triển Việt Nam (BIDV)">
                        NH TMCP Đầu Tư và
                        Phát triển Việt Nam (BIDV)
                      </option>
                      <option
                        key="Ngân
                        hàng
                        TM
                        TNHH
                        MTV
                        Dầu
                        khí
                        Toàn
                        Cầu
                        (Global
                        Petrolimex
                        Bank)"
                      >Ngân hàng TM TNHH MTV Dầu khí Toàn Cầu (Global Petrolimex Bank)</option>
                      <option key="Ngân hàng TMCP Bản Việt (Vietcapital Bank)">
                        Ngân hàng TMCP Bản
                        Việt (Vietcapital Bank)
                      </option>
                      <option key="Ngân hàng TMCP Đông Nam Á (South East Asia Bank)">
                        Ngân hàng TMCP
                        Đông Nam Á (South East Asia Bank)
                      </option>
                      <option key="Ngân hàng TMCP Nam Á (Nam A Bank)">
                        Ngân hàng TMCP Nam Á (Nam A
                        Bank)
                      </option>
                      <option
                        key="Ngân
                        hàng
                        TMCP
                        Phát
                        triển
                        Thành
                        phố
                        Hồ
                        Chí
                        Minh
                        (Ho
                        Chi
                        Development
                        Bank)"
                      >
                        Ngân hàng TMCP Phát triển Thành phố Hồ Chí Minh (Ho
                        Chi Minh Development Bank)
                      </option>
                      <option key="Ngân hàng TMCP Phương Đông (Orient Commercial Bank)">
                        Ngân hàng
                        TMCP Phương Đông (Orient Commercial Bank)
                      </option>
                      <option key="Ngân hàng TMCP Quốc tế Việt Nam (Vietnam Internation Bank)">
                        Ngân
                        hàng TMCP Quốc tế Việt Nam (Vietnam Internation Bank)
                      </option>
                      <option key="Ngân hàng TMCP Sài Gòn Hà Nội (Saigon Hanoi Bank)">
                        Ngân hàng
                        TMCP Sài Gòn Hà Nội (Saigon Hanoi Bank)
                      </option>
                      <option key="Ngân hàng TMCP Sài Gòn (Sai Gon Commercial Bank)">
                        Ngân hàng TMCP
                        Sài Gòn (Sai Gon Commercial Bank)
                      </option>
                      <option key="Ngân hàng TMCP Việt Á (VietA Bank)">
                        Ngân hàng TMCP Việt Á (VietA
                        Bank)
                      </option>
                      <option key="Ngân hàng TNHH MTV ANZ Việt Nam (ANZ Bank)">
                        Ngân hàng TNHH MTV
                        ANZ Việt Nam (ANZ Bank)
                      </option>
                      <option key="Ngân hàng TNHH MTV CIMB Việt Nam (CIMB BANK)">
                        Ngân hàng TNHH MTV
                        CIMB Việt Nam (CIMB BANK)
                      </option>
                      <option key="Ngân hàng TNHH MTV Standard Chartered Việt Nam (Standard Bank)">
                        Ngân hàng TNHH MTV Standard Chartered Việt Nam
                        (Standard Chartered Bank)
                      </option>
                      <option key="Ngân hàng TMCP Tiên Phong (Tien Bank)">
                        Ngân hàng TMCP Tiên
                        Phong (Tien Phong Bank)
                      </option>
                      <option key="Ngân hàng TMCP Bảo Việt (Bao Viet Bank)">
                        Ngân hàng TMCP Bảo Việt
                        (Bao Viet Bank)
                      </option>
                      <option key="Ngân hàng TNHH MTV Shinhan Việt Nam (Shinhan Bank Vietnam)">
                        Ngân
                        hàng TNHH MTV Shinhan Việt Nam (Shinhan Bank Vietnam)
                      </option>
                      <option key="Ngân hàng TNHH Indovina (Indovina Bank)">
                        Ngân hàng TNHH Indovina
                        (Indovina Bank)
                      </option>
                      <option
                        key="Ngân
                        hàng
                        TMCP
                        Việt
                        Nam
                        thương
                        tín
                        (Việt
                        Thương
                        Tín
                        Bank
                        (Viet
                        Bank)"
                      >
                        Ngân hàng TMCP Việt Nam thương tín (Việt Nam Thương Tín
                        Bank (Viet Bank)
                      </option>
                      <option key="Ngân" hàng TMCP Quốc Dân (National Citizen Bank)>
                        Ngân hàng TMCP
                        Quốc Dân (National Citizen Bank)
                      </option>
                      <option
                        key="Ngân"
                        hàng
                        TNHH
                        MTV
                        Woori
                        Việt
                        Nam
                        (Woori
                        Bank
                        Vietnam
                        Limited)
                      >Ngân hàng TNHH MTV Woori Việt Nam (Woori Bank Vietnam Limited)</option>
                      <option
                        key="Ngân"
                        hàng
                        TMCP
                        Đại
                        chúng
                        Việt
                        Nam
                        (Public
                        Vietnam
                        Commercial
                        Bank
                        (Pvcom
                        Bank)
                      >
                        Ngân hàng TMCP Đại chúng Việt Nam (Public Vietnam
                        Commercial Bank (Pvcom Bank)
                      </option>
                      <option
                        key="Ngân"
                        hàng
                        TMCP
                        Xăng
                        dầu
                        Petrolimex
                        (Petrolimex
                        Group
                        Bank
                        (PG
                        Bank))
                      >
                        Ngân hàng TMCP Xăng dầu Petrolimex (Petrolimex Group Bank (PG
                        Bank))
                      </option>
                      <option key="Ngân" hàng TMCP Bắc Á (North Asia Commercial Bank (NASB)>
                        Ngân
                        hàng TMCP Bắc Á (North Asia Commercial Bank (NASB)
                      </option>
                      <option key="Ngân" hàng Citibank (Citibank)>Ngân hàng Citibank (Citibank)</option>
                      <option key="NHTMCP" An Bình (An Binh Bank)>NHTMCP An Bình (An Binh Bank)</option>
                      <option key="NHTMCP" Hàng Hải (Maritime Bank)>NHTMCP Hàng Hải (Maritime Bank)</option>
                      <option key="NH" Việt Nam Thịnh Vượng (VP Bank)>
                        NH Việt Nam Thịnh Vượng (VP
                        Bank)
                      </option>
                      <option key="NH" Nông nghiệp và Phát triển thôn Việt Nam (Agribank)>
                        NH
                        Nông nghiệp và Phát triển Nông thôn Việt Nam (Agribank)
                      </option>
                      <option key="NH" TMCP Xuất Nhập Khẩu (Eximbank)>
                        NH TMCP Xuất Nhập Khẩu
                        (Eximbank)
                      </option>
                      <option key="NHTM" MTV Xây Dựng Việt Nam (CB)>NHTM MTV Xây Dựng Việt Nam (CB)</option>
                      <option key="NH" Hong Leong Việt Nam (Hongleong Bank)>
                        NH Hong Leong Việt Nam
                        (Hongleong Bank)
                      </option>
                      <option key="NH" TMCP Kiên Long (KienLong Bank)>
                        NH TMCP Kiên Long (KienLong
                        Bank)
                      </option>
                      <option key="NH" TMCP Bưu Điện Liên Việt (LienVietPost Bank)>
                        NH TMCP Bưu Điện
                        Liên Việt (LienVietPost Bank)
                      </option>
                      <option key="NH" TM TNHH MTV Đại Dương (Ocean Bank)>
                        NH TM TNHH MTV Đại Dương
                        (Ocean Bank)
                      </option>
                      <option key="NH" TNHH MTV Public Việt Nam (Public Bank)>
                        NH TNHH MTV Public
                        Việt Nam (Public Bank)
                      </option>
                      <option key="NH" Liên Doanh Việt -Nga (VRB)>NH Liên Doanh Việt -Nga (VRB)</option>
                      <option key="NH" Deutsche Bank (DEUTSCHEBANK)>NH Deutsche Bank (DEUTSCHEBANK)</option>
                      <option key="NH" TNHH MTV HSBC (Việt Nam) (HSBC Bank Vietnam Ltd.)>
                        NH TNHH
                        MTV HSBC (Việt Nam) (HSBC Bank Vietnam Ltd.)
                      </option>
                    </select>
                  </div>
                </div>-->

                <div class="form-group">
                  <label class="main-content-label tx-11 tx-medium tx-gray-600">CHI NHÁNH</label>
                  <div class="pos-relative">
                    <input
                      class="form-control pd-r-80"
                      placeholder="Ví dụ: Ho Chi Minh City"
                      required
                      name="branch"
                      type="text"
                      value
                    />
                  </div>
                </div>

                <div class="form-group">
                  <label class="main-content-label tx-11 tx-medium tx-gray-600">
                    SỐ TIỀN (Ít nhất
                    200,000đ)
                  </label>
                  <div class="pos-relative">
                    <input
                      class="form-control pd-r-80 amountBanking"
                      min="100000"
                      required
                      type="text"
                    />
                    <input type="hidden" name="amountBanking" />
                    <p class="alert alert-danger validateBanking" style="display: none;">
                      Số tiền rút
                      tối thiểu là 200000.
                    </p>
                  </div>
                </div>
                <div class="form-group">
                  <label class="main-content-label tx-11 tx-medium tx-gray-600">
                    SỐ TIỀN THỰC NHẬN SAU
                    KHI TẠM KHẤU TRỪ 10% THUẾ TNCN
                  </label>
                  <div class="pos-relative">
                    <input class="form-control pd-r-80" type="text" readonly id="total" />
                  </div>
                </div>
                <p style="font-weight: bolder;">
                  Chúng tôi sẽ gửi mail xác nhận thông tin, xin hãy cung
                  cấp chính xác email và xác nhận mail chúng tôi sẽ gửi ngay khi rút tiền.
                </p>
                <div>
                  <a class="btn btn-danger">Tài khoản bạn chưa xác thưc KYC</a>
                </div>
              </form>
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
export default {};
</script>

<style>
.withdrawal .dropdown-menu {
  top: -7px !important;
  left: -1px !important;
}
</style>
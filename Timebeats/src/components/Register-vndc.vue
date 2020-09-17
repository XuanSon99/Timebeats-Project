<template>
  <div>
    <div class="main-content horizontal-content">
      <!-- container opened -->
      <div class="container">
        <!-- breadcrumb -->
        <div class="breadcrumb-header justify-content-between">
          <div class="my-auto">
            <div class="d-flex">
              <h4 class="content-title mb-0 my-auto">ĐĂNG KÝ VNDC</h4>
            </div>
          </div>
        </div>
        <!-- breadcrumb -->
        <div class="row row-sm">
          <div class="col-sm-12">
            <div class="card">
              <div class="card-body">
                <div class="tabs-menu">
                  <!-- Tabs -->
                  <ul class="nav nav-tabs profile navtab-custom panel-tabs">
                    <li>
                      <a
                        href="#registerVNDC"
                        class="active"
                        data-toggle="tab"
                        aria-expanded="false"
                      >
                        <span class="visible-xs">
                          <i class="las la-images tx-15 mr-1"></i>
                        </span>
                        <span class="hidden-xs">ĐĂNG KÝ VNDC</span>
                      </a>
                    </li>
                    <li>
                      <a href="#verifyOTP" data-toggle="tab" aria-expanded="false">
                        <span class="visible-xs">
                          <i class="las la-cog tx-16 mr-1"></i>
                        </span>
                        <span class="hidden-xs">XÁC MINH OTP</span>
                      </a>
                    </li>
                  </ul>
                </div>
                <div class="tab-content border-left border-bottom border-right border-top-0 p-4">
                  <div class="tab-pane active" id="registerVNDC">
                    <div class="row">
                      <div class="col-md-10 col-lg-8 col-xl-6 mx-auto d-block">
                        <div class="card card-body pd-20 pd-md-40 border shadow-none">
                          <form class="form-horizontal" method="post" action>
                            <input
                              type="hidden"
                              name="_token"
                              value="9CRxmKLNzjSPgU2OMwZGPGlU7RxqFNbzOhafUgRJ"
                            />
                            <h5 class="card-title mg-b-20">ĐĂNG KÝ VNDC</h5>
                            <div class="form-group">
                              <label class="main-content-label tx-11 tx-medium tx-gray-600">
                                Số
                                điện thoại
                              </label>
                              <input class="form-control" value required type="number" name="phone" />
                            </div>
                            <div class="form-group">
                              <label class="main-content-label tx-11 tx-medium tx-gray-600">
                                Mật
                                khẩu
                              </label>
                              <div class="pos-relative">
                                <input
                                  class="form-control pd-r-80"
                                  required
                                  name="password"
                                  type="password"
                                />
                              </div>
                            </div>
                            <button type="submit" class="btn btn-main-primary btn-block">Đăng ký</button>
                          </form>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="tab-pane" id="verifyOTP">
                    <div class="mb-4 main-content-label">Xác minh OTP</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <!-- Container closed -->
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style>
</style>
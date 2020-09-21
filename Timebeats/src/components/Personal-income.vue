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
              <h4 class="content-title mb-0 my-auto">THU NHẬP CÁ NHÂN</h4>
            </div>
          </div>
        </div>
        <!-- breadcrumb -->

        <!-- row opened -->
        <div class="row row-sm">
          <div class="col-lg-12 col-md-12">
            <div class="card" id="basic-alert">
              <div class="text-wrap">
                <div class="example">
                  <div class="panel panel-primary tabs-style-1">
                    <div class="tab-menu-heading">
                      <div class="tabs-menu1">
                        <!-- Tabs -->
                        <ul class="nav panel-tabs main-nav-line">
                          <li class="nav-item">
                            <a
                              href="https://timebeats.com/dashboard/personal-income?type=mission"
                              class="nav-link active"
                            >Nhiệm vụ</a>
                          </li>
                          <li class="nav-item">
                            <a href="#" class="nav-link">
                              Chiến dịch
                              <img
                                src="../assets/vendor/img/coming.svg?v="
                                class="ml-2"
                                style="max-height:16px; position: absolute; width: 58px; top: 30px; left: 14px"
                              />
                            </a>
                          </li>
                          <li class="nav-item">
                            <a href="#" class="nav-link">
                              Hoàn tiền
                              <img
                                src="../assets/vendor/img/coming.svg?v="
                                class="ml-2"
                                style="max-height:16px; position: absolute; width: 58px; top: 30px; left: 13px"
                              />
                            </a>
                          </li>
                          <li class="nav-item">
                            <a
                              href="https://timebeats.com/dashboard/view-ads/report"
                              class="nav-link"
                            >Xem quảng cáo</a>
                          </li>
                          <li class="nav-item">
                            <a
                              href="https://timebeats.com/dashboard/shorten/report?group=0"
                              class="nav-link"
                            >Rút gọn link</a>
                          </li>
                        </ul>
                      </div>
                    </div>
                    <div
                      class="panel-body tabs-menu-body main-content-body-right border-top-0 border"
                    >
                      <div class="row">
                        <div class="col-xl-12">
                          <div class="row">
                            <div class="col-lg-6 col-xl-3 col-md-6 col-12">
                              <div class="card bg-primary-gradient text-white">
                                <div class="card-body">
                                  <div class="row">
                                    <div class="col-2">
                                      <div class="icon1 mt-2 text-center">
                                        <i class="fe fe-bar-chart-2 tx-40"></i>
                                      </div>
                                    </div>
                                    <div class="col-10">
                                      <div class="mt-0 text-center">
                                        <span class="text-white">
                                          Chờ
                                          duyệt
                                        </span>
                                        <h2 class="text-white mb-0">0đ</h2>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>

                            <div class="col-lg-6 col-xl-3 col-md-6 col-12">
                              <div class="card bg-success-gradient text-white">
                                <div class="card-body">
                                  <div class="row">
                                    <div class="col-2">
                                      <div class="icon1 mt-2 text-center">
                                        <i class="fe fe-bar-chart-2 tx-40"></i>
                                      </div>
                                    </div>
                                    <div class="col-10">
                                      <div class="mt-0 text-center">
                                        <span class="text-white">
                                          Tạm
                                          duyệt
                                        </span>
                                        <h2 class="text-white mb-0">0đ</h2>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div class="col-lg-6 col-xl-3 col-md-6 col-12">
                              <div class="card bg-warning-gradient text-white">
                                <div class="card-body">
                                  <div class="row">
                                    <div class="col-2">
                                      <div class="icon1 mt-2 text-center">
                                        <i class="fe fe-bar-chart-2 tx-40"></i>
                                      </div>
                                    </div>
                                    <div class="col-10">
                                      <div class="mt-0 text-center">
                                        <span class="text-white">Đã duyệt</span>
                                        <h2 class="text-white mb-0">0đ</h2>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div class="col-lg-6 col-xl-3 col-md-6 col-12">
                              <div class="card bg-danger-gradient text-white">
                                <div class="card-body">
                                  <div class="row">
                                    <div class="col-2">
                                      <div class="icon1 mt-2 text-center">
                                        <i class="fe fe-bar-chart-2 tx-40"></i>
                                      </div>
                                    </div>
                                    <div class="col-10">
                                      <div class="mt-0 text-center">
                                        <span class="text-white">Từ chối</span>
                                        <h2 class="text-white mb-0">0đ</h2>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div class="row" style="margin-left: 0px">
                            <div class="col-xs-6">
                              <label for>Trạng thái</label>
                              <select name id="status" class="form-control">
                                <option value>Tất cả</option>
                                <option value="0">Chờ duyệt</option>
                                <option value="2">Tạm duyệt</option>
                                <option value="1">Đã duyệt</option>
                                <option value="3">Từ chối</option>
                              </select>
                            </div>
                          </div>
                          <div class="table-responsive">
                            <table
                              class="table text-md-nowrap data-table table-bordered table-hover"
                              id="statistic"
                            >
                              <thead>
                                <tr>
                                  <th class="wd-5p border-bottom-0">ID</th>
                                  <th class="wd-10p border-bottom-0">NGÀY TẠO</th>
                                  <th class="wd-10p border-bottom-0">NỘI DUNG</th>
                                  <th class="wd-10p border-bottom-0">ORDER ID</th>
                                  <th class="wd-10p border-bottom-0">HOA HÔNG</th>
                                  <th class="wd-10p border-bottom-0">TỪ THÀNH VIÊN</th>
                                  <th class="wd-5p border-bottom-0">CẤP</th>
                                  <th class="wd-10p border-bottom-0">TRẠNG THÁI</th>
                                </tr>
                              </thead>
                              <tbody></tbody>
                            </table>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <!--/div-->
          </div>
          <!-- /row -->
        </div>
        <!-- Container closed -->
      </div>
      <!-- Container closed -->

      <!-- Sidebar-right-->

      <!--/Sidebar-right-->

      <!-- Message Modal -->

      <!--Video Modal -->
      <!-- modal -->

      <!-- Audio Modal -->
      <!-- modal -->

      <!-- Footer opened -->
      <div class="main-footer ht-40">
        <div class="container-fluid pd-t-0-f ht-100p">
          <span>
            Copyright © 2020
            <a href="#">TimeBeats</a>
          </span>
        </div>
      </div>
      <!-- Footer closed -->
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
</style>
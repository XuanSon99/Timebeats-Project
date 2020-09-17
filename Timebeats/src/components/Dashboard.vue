<template>
  <div class="home">
    <vue-headful title="Trang chủ" />
    <Header />
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
                      <h4 class="tx-20 font-weight-bold mb-1 text-white">0đ</h4>
                      <p class="mb-0 tx-12 text-white op-7">So sánh với tuần trước</p>
                    </div>
                    <span class="float-right my-auto ml-auto">
                      <i class="fas fa-arrow-circle-up text-white"></i>
                      <span class="text-white op-7">0%</span>
                    </span>
                  </div>
                </div>
              </div>
              <span id="compositeline1" class="pt-1"></span>
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
                      <h4 class="tx-20 font-weight-bold mb-1 text-white">0đ</h4>
                      <p class="mb-0 tx-12 text-white op-7">So sánh với tuần trước</p>
                    </div>
                    <span class="float-right my-auto ml-auto">
                      <i class="fas fa-arrow-circle-up text-white"></i>
                      <span class="text-white op-7">0%</span>
                    </span>
                  </div>
                </div>
              </div>
              <span id="compositeline2" class="pt-1"></span>
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
                      <h4 class="tx-20 font-weight-bold mb-1 text-white">0</h4>
                      <p class="mb-0 tx-12 text-white op-7">So sánh với tuần trước</p>
                    </div>
                    <span class="float-right my-auto ml-auto">
                      <i class="fas fa-arrow-circle-up text-white"></i>
                      <span class="text-white op-7">0%</span>
                    </span>
                  </div>
                </div>
              </div>
              <span id="compositeline3" class="pt-1"></span>
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
                      <h4 class="tx-20 font-weight-bold mb-1 text-white">0đ</h4>
                      <p class="mb-0 tx-12 text-white op-7">So sánh với tuần trước</p>
                    </div>
                    <span class="float-right my-auto ml-auto">
                      <i class="fas fa-arrow-circle-up text-white"></i>
                      <span class="text-white op-7">0%</span>
                    </span>
                  </div>
                </div>
              </div>
              <span id="compositeline4" class="pt-1"></span>
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
                <p
                  class="tx-12 text-muted mb-0"
                >Hoàn Thành Nhanh Các Nhiệm Vụ Giới Hạn Hấp Dẫn Dành Riêng Cho Bạn</p>
              </div>
              <div class="card-body">
                <div class="table-responsive">
                  <table
                    class="table text-md-nowrap data-table table-bordered table-hover"
                    id="statistic"
                  >
                    <thead>
                      <tr>
                        <th>STT</th>
                        <th>Mô Tả</th>
                        <th>Phần Thưởng</th>
                        <th>Còn Lại</th>
                        <th>Chi Tiết</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <th scope="row">1</th>
                        <td>Follow TikTok</td>
                        <td>10 $</td>
                        <td>999 Lượt</td>
                        <td>
                          <span class="tag tag-indigo tag-center">
                            <a style="color: white" href>Nhận</a>
                          </span>
                        </td>
                      </tr>
                      <tr>
                        <th scope="row">1</th>
                        <td>Follow TikTok</td>
                        <td>10 $</td>
                        <td>999 Lượt</td>
                        <td>
                          <span class="tag tag-indigo tag-center">
                            <a style="color: white" href>Nhận</a>
                          </span>
                        </td>
                      </tr>
                      <tr>
                        <th scope="row">1</th>
                        <td>Follow TikTok</td>
                        <td>10 $</td>
                        <td>999 Lượt</td>
                        <td>
                          <span class="tag tag-indigo tag-center">
                            <a style="color: white" href>Nhận</a>
                          </span>
                        </td>
                      </tr>
                      <tr>
                        <th scope="row">1</th>
                        <td>Follow TikTok</td>
                        <td>10 $</td>
                        <td>999 Lượt</td>
                        <td>
                          <span class="tag tag-indigo tag-center">
                            <a style="color: white" href>Nhận</a>
                          </span>
                        </td>
                      </tr>
                      <tr>
                        <th scope="row">1</th>
                        <td>Follow TikTok</td>
                        <td>10 $</td>
                        <td>999 Lượt</td>
                        <td>
                          <span class="tag tag-indigo tag-center">
                            <a style="color: white" href>Nhận</a>
                          </span>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
          <div class="col-lg-12 col-xl-5">
            <div class="card card-dashboard-map-one">
              <label class="main-content-label">THÔNG BÁO TỪ BAN QUẢN TRỊ</label>
              <span class="d-block mg-b-20 text-muted tx-12">
                Thông báo mới nhất từ các chương trình của
                TimeBeats sẽ được cập nhật tại đây. Hãy cũng TimeBeats điểm qua ngay những tin tức
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
                            Thông
                            báo tiến hành xác thực tài khoản (KYC) tại hệ thống TimeBeats.
                            <span
                              style="color: #7987a1 !important;"
                              class="mt-1 tx-13 mb-0"
                            >( 2020-09-01 )</span>
                          </a>
                        </h5>
                      </div>
                      <p>Th&acirc;n gửi qu&yacute; th&agrave;nh vi&ecirc;n&nbsp;TimeBeats Việt Nam</p>

                      <p>
                        Nhằm n&acirc;ng cao chất lượng cộng đồng, tăng gi&aacute; trị của
                        c&aacute;c chiến dịch, quảng c&aacute;o, mở ra c&aacute;c chiến dịch,
                        nhiệm vụ, quảng c&aacute;o hướng đối tượng cũng như đảm bảo t&iacute;nh
                        c&ocirc;ng bằng cho tất cả c&aacute;c đối tượng...
                        <a
                          href="https://timebeats.com/dashboard/notification/detail/15"
                        >
                          Xem
                          thêm
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
                            THÔNG
                            BÁO BẢO TRÌ HỆ THỐNG
                            <span
                              style="color: #7987a1 !important;"
                              class="mt-1 tx-13 mb-0"
                            >( 2020-09-01 )</span>
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
                            THÔNG
                            BÁO: V/v CẬP NHẬT CHÍNH SÁCH THƯỞNG THU NHẬP THÀNH VIÊN TRONG HỆ
                            THỐNG ĐỐI VỚI CHIẾN DỊCH LIAN
                            <span
                              style="color: #7987a1 !important;"
                              class="mt-1 tx-13 mb-0"
                            >( 2020-08-28 )</span>
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
                            THÔNG
                            BÁO Công Bố Giải Thưởng Top 50 Chương Trình Đua TOP: "CHÚNG TÔI
                            LÀ NGƯỜI HỖ TRỢ"
                            <span
                              style="color: #7987a1 !important;"
                              class="mt-1 tx-13 mb-0"
                            >( 2020-08-15 )</span>
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
                            Thông
                            báo: Công bố & Trao thưởng chương trình đua TOP "CHÚNG TÔI LÀ
                            NGƯỜI HỖ TRỢ"
                            <span
                              style="color: #7987a1 !important;"
                              class="mt-1 tx-13 mb-0"
                            >( 2020-08-10 )</span>
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
import Header from "./Header";
export default {
  name: "home",
  data() {
    return {};
  },
  components: {
    Header,
  },
};
</script>

<style>
.tag-center{
  margin: 0 auto;
  display: block;
  max-width: 50px;
  text-align: center;
}
</style>
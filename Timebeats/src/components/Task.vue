<template>
  <div>
    <div class="main-content horizontal-content">
      <!-- container opened -->
      <div class="container">
        <!-- breadcrumb -->
        <div class="breadcrumb-header justify-content-between">
          <div class="my-auto">
            <div class="d-flex">
              <h4 class="content-title mb-0 my-auto">Nhiệm Vụ</h4>
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
                            <a href="#" class="nav-link active">Tất Cả</a>
                          </li>
                          <li class="nav-item">
                            <select
                              name
                              id="status"
                              class="form-control"
                              style="font-style: 0.01rem;"
                            >
                              <option value>Sắp Xếp Theo</option>
                              <option value="0">Mới Nhất</option>
                              <option value="2">Giá Cao Nhất</option>
                              <option value="1">Nền Tảng</option>
                            </select>
                          </li>
                        </ul>
                      </div>
                    </div>
                    <div
                      class="panel-body tabs-menu-body main-content-body-right border-top-0 border"
                    >
                      <div class="row">
                        <div class="col-xl-12">
                          <div class="row"></div>

                          <div class="table-responsive">
                            <table
                              class="table text-md-nowrap data-table table-bordered table-hover"
                              id="statistic"
                            >
                              <thead>
                                <tr>
                                  <th class="wd-10p border-bottom-0">STT</th>
                                  <th class="wd-10p border-bottom-0">NỀN TẢNG</th>
                                  <th class="wd-10p border-bottom-0">NỘI DUNG NHIỆM VỤ</th>
                                  <th class="wd-10p border-bottom-0">PHẦN THƯỞNG</th>
                                  <th class="wd-10p border-bottom-0">SỐ LƯỢT</th>
                                  <th class="wd-10p border-bottom-0">CHI TIẾT</th>
                                </tr>
                              </thead>
                              <tbody>
                                <tr>
                                  <td scope="row">1</td>
                                  <td>TikTok</td>
                                  <td>Follow TikTok</td>
                                  <td>10 $</td>
                                  <td>999 Lượt</td>
                                  <td>
                                    <span class="tag tag-indigo tag-center">
                                      <a style="color: white" href="#">Nhận</a>
                                    </span>
                                  </td>
                                </tr>
                                <tr>
                                  <td scope="row">1</td>
                                  <td>TikTok</td>
                                  <td>Follow TikTok</td>
                                  <td>10 $</td>
                                  <td>999 Lượt</td>
                                  <td>
                                    <span class="tag tag-indigo tag-center">
                                      <a style="color: white" href="#">Nhận</a>
                                    </span>
                                  </td>
                                </tr>
                                <tr>
                                  <td scope="row">1</td>
                                  <td>TikTok</td>
                                  <td>Follow TikTok</td>
                                  <td>10 $</td>
                                  <td>999 Lượt</td>
                                  <td>
                                    <span class="tag tag-indigo tag-center">
                                      <a style="color: white" href="#">Nhận</a>
                                    </span>
                                  </td>
                                </tr>
                                <tr>
                                  <td scope="row">1</td>
                                  <td>TikTok</td>
                                  <td>Follow TikTok</td>
                                  <td>10 $</td>
                                  <td>999 Lượt</td>
                                  <td>
                                    <span class="tag tag-indigo tag-center">
                                      <a style="color: white" href="#">Nhận</a>
                                    </span>
                                  </td>
                                </tr>
                                <tr>
                                  <td scope="row">1</td>
                                  <td>TikTok</td>
                                  <td>Follow TikTok</td>
                                  <td>10 $</td>
                                  <td>999 Lượt</td>
                                  <td>
                                    <span class="tag tag-indigo tag-center">
                                      <a style="color: white" href="#">Nhận</a>
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
              </div>
            </div>
            <!--/div-->
          </div>
          <!-- /row -->
        </div>
        <!-- Container closed -->
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style>
#status {
  height: 40px;
}
.tag-center{
  margin: 0 auto;
  display: block;
  max-width: 50px;
  text-align: center;
}
th{
  text-align: center;
}
</style>
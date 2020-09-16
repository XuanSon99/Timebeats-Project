<template>
  <div>
    <div class="main-content horizontal-content">
      <!-- container opened -->
      <div class="container">
        <!-- breadcrumb -->
        <div class="breadcrumb-header justify-content-between">
          <div class="my-auto">
            <div class="d-flex">
              <h4 class="content-title mb-0 my-auto">Cài đặt tài khoản</h4>
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
                    <li class>
                      <a href="#resource" class="active" data-toggle="tab" aria-expanded="false">
                        <span class="visible-xs">
                          <i class="fas fa-code"></i>
                        </span>
                        <span class="hidden-xs">QUẢN LÝ TÀI NGUYÊN</span>
                      </a>
                    </li>
                    <li class>
                      <a href="#download" data-toggle="tab" aria-expanded="false">
                        <span class="visible-xs">
                          <i class="fas fa-download"></i>
                        </span>
                        <span class="hidden-xs">TẢI VỀ</span>
                      </a>
                    </li>
                  </ul>
                </div>
                <div class="tab-content border-left border-bottom border-right border-top-0 p-4">
                  <div class="tab-pane active" id="resource">
                    <div class="mb-4 main-content-label">QUẢN LÝ TÀI NGUYÊN</div>
                    <div class="form-group">
                      <label for>Nền tảng</label>
                      <select name id class="form-control" style="margin-bottom: 10px;">
                        <option value>Facebook</option>
                        <option value>Youtube</option>
                        <option value>TikTok</option>
                        <option value>Instagram</option>
                        <option value>NhacCuaTui</option>
                        <option value>ZingMp3</option>
                      </select>
                    </div>
                    <div class="form-group">
                      <button
                        aria-expanded="false"
                        aria-haspopup="true"
                        class="btn ripple btn-primary"
                        id
                        type="button"
                        data-toggle="modal"
                        data-target="#modal-resource"
                        style="float: right;"
                      >+ Thêm tài nguyên</button>
                    </div>
                    <div class="table-responsive">
                      <table
                        class="table text-md-nowrap data-table table-bordered table-hover"
                        id="statistic"
                        style="font-size: 14px;"
                      >
                        <thead>
                          <tr>
                            <th
                              style="padding: 12px; font-size: 14px;"
                              class="wd-5p border-bottom-0"
                            >ID</th>
                            <th
                              style="padding: 12px; font-size: 14px;"
                              class="wd-10p border-bottom-0"
                            >NỀN TẢNG</th>
                            <th
                              style="padding: 12px; font-size: 14px;"
                              class="wd-15p border-bottom-0"
                            >TRẠNG THÁI</th>
                            <th
                              style="padding: 12px; font-size: 14px;"
                              class="wd-10p border-bottom-0"
                            >THÔNG TIN TÀI KHOẢN</th>
                            <th
                              style="padding: 12px; font-size: 14px;"
                              class="wd-10p border-bottom-0"
                            >NGÀY TẠO</th>
                            <th
                              style="padding: 12px; font-size: 14px;"
                              class="wd-10p border-bottom-0"
                            >CÔNG CỤ</th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr>
                            <th scope="row">1</th>
                            <td>TikTok</td>
                            <td>Follow TikTok</td>
                            <td>10 $</td>
                            <td>999 Lượt</td>
                            <td class="tools">
                              <button class="btn ripple btn-danger" id type="button">Xóa</button>
                            </td>
                          </tr>
                          <tr>
                            <th scope="row">1</th>
                            <td>TikTok</td>
                            <td>Follow TikTok</td>
                            <td>10 $</td>
                            <td>999 Lượt</td>
                            <td class="tools">
                              <button class="btn ripple btn-danger" id type="button">Xóa</button>
                            </td>
                          </tr>
                          <tr>
                            <th scope="row">1</th>
                            <td>TikTok</td>
                            <td>Follow TikTok</td>
                            <td>10 $</td>
                            <td>999 Lượt</td>
                            <td class="tools">
                              <button class="btn ripple btn-danger" id type="button">Xóa</button>
                            </td>
                          </tr>
                          <tr>
                            <th scope="row">1</th>
                            <td>TikTok</td>
                            <td>Follow TikTok</td>
                            <td>10 $</td>
                            <td>999 Lượt</td>
                            <td class="tools">
                              <button class="btn ripple btn-danger" id type="button">Xóa</button>
                            </td>
                          </tr>
                          <tr>
                            <th scope="row">1</th>
                            <td>TikTok</td>
                            <td>Follow TikTok</td>
                            <td>10 $</td>
                            <td>999 Lượt</td>
                            <td class="tools">
                              <button class="btn ripple btn-danger" id type="button">Xóa</button>
                            </td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </div>

                  <div class="tab-pane" id="download">
                    <div class="mb-4 main-content-label">TẢI VỀ</div>
                  </div>
                </div>
                <!-- Modal -->
                <div
                  class="modal fade"
                  id="modal-resource"
                  tabindex="-1"
                  aria-labelledby="exampleModalLabel"
                  aria-hidden="true"
                >
                  <div class="modal-dialog">
                    <div class="modal-content">
                      <div class="modal-header">
                        <h5 class="modal-title" id>THÊM MỚI TÀI NGUYÊN</h5>
                        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                          <span aria-hidden="true">&times;</span>
                        </button>
                      </div>
                      <div class="modal-body">
                        <div class="card-body">
                          <form action="/social/add-account-social" method="post">
                            <p class="text-danger"></p>
                            <input
                              type="hidden"
                              name="_token"
                              value="NUsQFF66-HgOai8bOxrFrGkWgHwMqN9FNOwk"
                            />
                            <div class="form-body">
                              <h6 class="card-title">Mạng xã hội</h6>
                              <div class="row">
                                <div class="col-md-12">
                                  <div class="form-group">
                                    <select class="form-control" required name="social_code">
                                      <option value>Tất cả</option>
                                      <option value>Facebook</option>
                                      <option value>Youtube</option>
                                      <option value>TikTok</option>
                                      <option value>ZingMp3</option>
                                      <option value>NhacCuaTui</option>
                                    </select>
                                  </div>
                                </div>
                              </div>
                              <h5>
                                Yêu cầu (cung cấp thông tin tài khoản
                                <b class="text-danger">*</b>)
                              </h5>
                              <div id="requre_area">
                                <h6 class="card-title user-pass-show">
                                  Tài khoản - Mật
                                  khẩu
                                  (ex: timebeat@gmail.com-timebit@tinh)
                                </h6>
                                <div class="row user-pass-show">
                                  <div class="col-md-12">
                                    <div class="form-group">
                                      <input
                                        type="text"
                                        class="form-control"
                                        name="user-pass"
                                        required
                                      />
                                    </div>
                                  </div>
                                </div>
                                <h6 class="card-title">Cookie</h6>
                                <div class="row">
                                  <div class="col-md-12">
                                    <div class="form-group">
                                      <textarea
                                        name="cookie"
                                        class="form-control"
                                        id
                                        cols="30"
                                        rows="10"
                                        required
                                      ></textarea>
                                    </div>
                                  </div>
                                </div>
                                <h6 class="card-title">Token</h6>
                                <div class="row">
                                  <div class="col-md-12">
                                    <div class="form-group">
                                      <input type="text" class="form-control" name="token" required />
                                    </div>
                                  </div>
                                </div>
                              </div>

                              <div class="form-actions">
                                <div class="text-center">
                                  <button type="submit" class="btn btn-info">Lưu</button>
                                </div>
                              </div>
                            </div>
                          </form>
                        </div>
                      </div>
                    </div>
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
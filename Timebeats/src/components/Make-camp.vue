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
              <h4 class="content-title mb-0 my-auto">Tạo Chiến Dịch</h4>
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
                            <a href="#" class="nav-link active">
                              Lịch Sử
                              Chiến Dịch
                            </a>
                          </li>
                          <li class="nav-item">
                            <button
                              aria-expanded="false"
                              aria-haspopup="true"
                              class="btn ripple btn-primary"
                              id
                              type="button"
                              data-toggle="modal"
                              data-target="#modal-make-camp"
                            >
                              + Tạo
                              Chiến Dịch
                              <i class></i>
                            </button>
                            <!-- Modal -->
                            <div
                              class="modal fade"
                              id="modal-make-camp"
                              tabindex="-1"
                              aria-labelledby="exampleModalLabel"
                              aria-hidden="true"
                            >
                              <div class="modal-dialog">
                                <div class="modal-content">
                                  <div class="modal-header">
                                    <h5 class="modal-title" id>Tạo chiến dịch</h5>
                                    <button
                                      type="button"
                                      class="close"
                                      data-dismiss="modal"
                                      aria-label="Close"
                                    >
                                      <span aria-hidden="true">&times;</span>
                                    </button>
                                  </div>
                                  <div class="modal-body" style="font-size: 14px;">
                                    <form>
                                      <div class="form-group">
                                        <label for="link">Chọn nền tảng</label>
                                        <select
                                          name
                                          id
                                          class="form-control"
                                          style="margin-bottom: 10px;"
                                        >
                                          <option value>Facebook</option>
                                          <option value>Youtube</option>
                                          <option value>TikTok</option>
                                          <option value>Instagram</option>
                                          <option value>NhacCuaTui</option>
                                          <option value>ZingMp3</option>
                                        </select>
                                      </div>
                                      <div class="form-group">
                                        <label for="link">
                                          Nhập
                                          Link
                                        </label>
                                        <input type="text" class="form-control" id="link" />
                                        <p
                                          class="alert text-danger"
                                          style="background: #fef1f3; margin-bottom: 10px;"
                                        >
                                          <b>
                                            - Lưu ý: Hiện tại tính năng này
                                            đang
                                            thử nghiệm nên chưa ổn đinh, có
                                            thể
                                            lên không đủ hoặc lên chậm, vui
                                            lòng
                                            buff dư thêm 30 - 50% trên tổng
                                            số
                                            lượng để tránh tụt hoặc chọn gói
                                            bảo
                                            hành để được hoàn tiền nếu
                                            tụt.
                                          </b>
                                          <br />
                                          <span class="text-body">
                                            Mfb
                                            <b>KHÔNG BẢO HÀNH</b> dịch
                                            vụ này, vui
                                            lòng cài đặt số lượng nhỏ để
                                            test
                                            trước, tránh không tăng được mất
                                            tiền !
                                          </span>
                                        </p>
                                      </div>
                                      <div class="form-group">
                                        <label for="number">
                                          Số Lượng
                                          Cần Tăng
                                        </label>
                                        <input
                                          type="number"
                                          class="form-control"
                                          id="number"
                                          min="0"
                                          value="100"
                                        />
                                      </div>
                                      <div class="form-group">
                                        <label for="time">
                                          Thời
                                          Gian Xem
                                        </label>
                                        <select
                                          name
                                          id="time"
                                          class="form-control"
                                          style="margin-bottom: 10px;"
                                        >
                                          <option value="1" style="display: none;">1 Giây</option>
                                          <option value="2" style="display: none;">2 Giây</option>
                                          <option value="3" style="display: none;">3 Giây</option>
                                          <option value="4" style="display: none;">4 Giây</option>
                                          <option value="5">5 Giây</option>
                                          <option value="6">6 Giây</option>
                                          <option value="7">7 Giây</option>
                                          <option value="8">8 Giây</option>
                                          <option value="9">9 Giây</option>
                                          <option value="10">10 Giây</option>
                                          <option value="11">11 Giây</option>
                                          <option value="12">12 Giây</option>
                                          <option value="13">13 Giây</option>
                                          <option value="14">14 Giây</option>
                                          <option value="15">15 Giây</option>
                                          <option value="16">16 Giây</option>
                                          <option value="17">17 Giây</option>
                                          <option value="18">18 Giây</option>
                                          <option value="19">19 Giây</option>
                                          <option value="20">20 Giây</option>
                                          <option value="21">21 Giây</option>
                                          <option value="22">22 Giây</option>
                                          <option value="23">23 Giây</option>
                                          <option value="24">24 Giây</option>
                                          <option value="25">25 Giây</option>
                                          <option value="26">26 Giây</option>
                                          <option value="27">27 Giây</option>
                                          <option value="28">28 Giây</option>
                                          <option value="29">29 Giây</option>
                                          <option value="30">30 Giây</option>
                                          <option value="31">31 Giây</option>
                                          <option value="32">32 Giây</option>
                                          <option value="33">33 Giây</option>
                                          <option value="34">34 Giây</option>
                                          <option value="35">35 Giây</option>
                                          <option value="36">36 Giây</option>
                                          <option value="37">37 Giây</option>
                                          <option value="38">38 Giây</option>
                                          <option value="39">39 Giây</option>
                                          <option value="40">40 Giây</option>
                                          <option value="41">41 Giây</option>
                                          <option value="42">42 Giây</option>
                                          <option value="43">43 Giây</option>
                                          <option value="44">44 Giây</option>
                                          <option value="45">45 Giây</option>
                                          <option value="46">46 Giây</option>
                                          <option value="47">47 Giây</option>
                                          <option value="48">48 Giây</option>
                                          <option value="49">49 Giây</option>
                                          <option value="50">50 Giây</option>
                                          <option value="51">51 Giây</option>
                                          <option value="52">52 Giây</option>
                                          <option value="53">53 Giây</option>
                                          <option value="54">54 Giây</option>
                                          <option value="55">55 Giây</option>
                                          <option value="56">56 Giây</option>
                                          <option value="57">57 Giây</option>
                                          <option value="58">58 Giây</option>
                                          <option value="59">59 Giây</option>
                                          <option value="60">60 Giây</option>
                                          <option value="61">61 Giây</option>
                                          <option value="62">62 Giây</option>
                                          <option value="63">63 Giây</option>
                                          <option value="64">64 Giây</option>
                                          <option value="65">65 Giây</option>
                                          <option value="66">66 Giây</option>
                                          <option value="67">67 Giây</option>
                                          <option value="68">68 Giây</option>
                                          <option value="69">69 Giây</option>
                                          <option value="70">70 Giây</option>
                                          <option value="71">71 Giây</option>
                                          <option value="72">72 Giây</option>
                                          <option value="73">73 Giây</option>
                                          <option value="74">74 Giây</option>
                                          <option value="75">75 Giây</option>
                                          <option value="76">76 Giây</option>
                                          <option value="77">77 Giây</option>
                                          <option value="78">78 Giây</option>
                                          <option value="79">79 Giây</option>
                                          <option value="80">80 Giây</option>
                                          <option value="81">81 Giây</option>
                                          <option value="82">82 Giây</option>
                                          <option value="83">83 Giây</option>
                                          <option value="84">84 Giây</option>
                                          <option value="85">85 Giây</option>
                                          <option value="86">86 Giây</option>
                                          <option value="87">87 Giây</option>
                                          <option value="88">88 Giây</option>
                                          <option value="89">89 Giây</option>
                                          <option value="90">90 Giây</option>
                                          <option value="91">91 Giây</option>
                                          <option value="92">92 Giây</option>
                                          <option value="93">93 Giây</option>
                                          <option value="94">94 Giây</option>
                                          <option value="95">95 Giây</option>
                                          <option value="96">96 Giây</option>
                                          <option value="97">97 Giây</option>
                                          <option value="98">98 Giây</option>
                                          <option value="99">99 Giây</option>
                                          <option value="100">100 Giây</option>
                                          <option value="101">101 Giây</option>
                                          <option value="102">102 Giây</option>
                                          <option value="103">103 Giây</option>
                                          <option value="104">104 Giây</option>
                                          <option value="105">105 Giây</option>
                                          <option value="106">106 Giây</option>
                                          <option value="107">107 Giây</option>
                                          <option value="108">108 Giây</option>
                                          <option value="109">109 Giây</option>
                                          <option value="110">110 Giây</option>
                                          <option value="111">111 Giây</option>
                                          <option value="112">112 Giây</option>
                                          <option value="113">113 Giây</option>
                                          <option value="114">114 Giây</option>
                                          <option value="115">115 Giây</option>
                                          <option value="116">116 Giây</option>
                                          <option value="117">117 Giây</option>
                                          <option value="118">118 Giây</option>
                                          <option value="119">119 Giây</option>
                                          <option value="120">120 Giây</option>
                                        </select>
                                        <p class="alert text-danger" style="background: #fef1f3">
                                          <b>
                                            Giá
                                            tiền
                                            1 view = 1 mCoin x (thời
                                            gian xem video)
                                          </b>
                                          <br />
                                          <span class="text-body">
                                            Mẹo nhỏ: Thời gian xem càng dài
                                            thì
                                            View càng chất lượng, vui lòng
                                            tùy
                                            chỉnh cho phù hợp với mục đích
                                            của
                                            bạn!
                                          </span>
                                        </p>
                                      </div>
                                    </form>
                                    <div class="text-danger note">
                                      <b>
                                        Lưu ý
                                        <br />- Ngiêm cấm Buff các ID Seeding có nội
                                        dung
                                        vi phạm pháp luật, chính trị, đồ trụy...
                                        Nếu
                                        cố tình buff bạn sẽ bị trừ hết tiền và
                                        band
                                        khỏi hệ thống mfb vĩnh viễn, và phải
                                        chịu
                                        hoàn toàn trách nhiệm trước pháp luật.
                                        <br />
                                      </b>
                                      - Hệ thống sử dụng 99% tài khoản người VN,
                                      fb thật để tương tác.
                                      <br />- Thời gian làm việc (tăng seeding) và bảo
                                      hành tính từ ngày bắt đầu cho đến ngày kết
                                      thúc job, tối đa là 1 tuần
                                      <br />- Hết thời gian của job đã order nếu không
                                      đủ số lượng mfb sẽ tự động hoàn lại số tiền
                                      seeding chưa tăng cho bạn trong vòng 1 đến 3
                                      ngày
                                      <br />- Vui lòng lấy đúng id bài viết, công khai
                                      và check kỹ job tránh tạo nhầm, tính năng
                                      đang trong giai đoạn thử nghiệm nên sẽ không
                                      hoàn tiền nếu bạn tạo nhầm
                                      <br />- Nhập id lỗi hoặc trong thời gian chạy die
                                      id thì hệ thống không hoàn lại tiền.
                                      <br />- Mỗi id có thể Buff tối đa 10 lần trên hệ
                                      thống để tránh Spam, max 10k trong ngày
                                      (hoặc hơn nếu order giá cao), trên 1k thời
                                      gian lên chậm hơn trong vòng 7 ngày
                                      <br />
                                    </div>
                                  </div>
                                  <div class="modal-footer">
                                    <button
                                      type="button"
                                      class="btn btn-primary"
                                      style="padding: 9px 30px;"
                                    >Xác nhận</button>
                                  </div>
                                </div>
                              </div>
                            </div>
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
                                  <th class="wd-5p border-bottom-0">STT</th>
                                  <th class="wd-10p border-bottom-0">NỀN TẢNG</th>
                                  <th class="wd-55p border-bottom-0">NỘI DUNG NHIỆM VỤ</th>
                                  <th class="wd-10p border-bottom-0">KINH PHÍ</th>
                                  <th class="wd-10p border-bottom-0">SỐ LƯỢT</th>
                                  <th class="wd-10p border-bottom-0">TRẠNG THÁI</th>
                                </tr>
                              </thead>
                              <tbody>
                                <tr>
                                  <th scope="row">1</th>
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
                                  <th scope="row">1</th>
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
                                  <th scope="row">1</th>
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
                                  <th scope="row">1</th>
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
                                  <th scope="row">1</th>
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
  </div>
</template>

<script>
import Header from './Header'
export default {
  components: {
    Header
  }
};
</script>

<style>
button {
  margin-top: 0 !important;
}
</style>
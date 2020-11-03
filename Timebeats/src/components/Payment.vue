<template>
  <div class="payment">
    <vue-headful title="Thanh toán" />
    <div class="main-content horizontal-content">
      <!-- container opened -->
      <div class="container">
        <!-- breadcrumb -->
        <div class="breadcrumb-header justify-content-between">
          <div class="my-auto">
            <div class="d-flex">
              <h4 class="content-title mb-0 my-auto">Tài khoản của bạn</h4>
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
                    <li class="">
                      <a
                        href="#profile"
                        class="active"
                        data-toggle="tab"
                        aria-expanded="false"
                      >
                        <span class="visible-xs"
                          ><i class="fas fa-qrcode"></i
                        ></span>
                        <span class="hidden-xs">THÔNG TIN TÀI KHOẢN</span>
                      </a>
                    </li>
                    <li class="">
                      <a
                        href="#history"
                        data-toggle="tab"
                        aria-expanded="false"
                      >
                        <span class="visible-xs"
                          ><i class="fas fa-history"></i
                        ></span>
                        <span class="hidden-xs">LỊCH SỬ GIAO DỊCH</span>
                      </a>
                    </li>
                    <li class="">
                      <a
                        href="#withdraw"
                        data-toggle="tab"
                        aria-expanded="false"
                      >
                        <span class="visible-xs"
                          ><i class="fas fa-coins"></i
                        ></span>
                        <span class="hidden-xs">RÚT TIỀN</span>
                      </a>
                    </li>
                    <li class="">
                      <a
                        href="#depositByEBC"
                        data-toggle="tab"
                        aria-expanded="false"
                      >
                        <span class="visible-xs"
                          ><i class="fas fa-money-check-alt"></i
                        ></span>
                        <span class="hidden-xs">NẠP TIỀN EBC</span>
                      </a>
                    </li>
                    <li class="">
                      <a
                        href="#depositByVoucher"
                        data-toggle="tab"
                        aria-expanded="false"
                      >
                        <span class="visible-xs"
                          ><i class="fas fa-gifts"></i
                        ></span>
                        <span class="hidden-xs">NẠP VOUCHER</span>
                      </a>
                    </li>
                    <li class="">
                      <a
                        href="#makeVoucher"
                        data-toggle="tab"
                        aria-expanded="false"
                      >
                        <span class="visible-xs"
                          ><i class="fas fa-hand-holding-usd"></i
                        ></span>
                        <span class="hidden-xs">TẠO VOUCHER</span>
                      </a>
                    </li>
                    <li class="">
                      <a
                        href="#tutorial"
                        data-toggle="tab"
                        aria-expanded="false"
                      >
                        <span class="visible-xs"
                          ><i class="fas fa-info"></i
                        ></span>
                        <span class="hidden-xs">HƯỚNG DẪN</span>
                      </a>
                    </li>
                  </ul>
                </div>
                <div
                  class="tab-content border-left border-bottom border-right border-top-0 p-4"
                >
                  <div class="tab-pane active" id="profile">
                    <div
                      class="card card-body pd-20 pd-md-40 border shadow-none"
                    >
                      <form
                        class="form-horizontal"
                        enctype="multipart/form-data"
                        id="myProfile"
                        method="post"
                        action="https://timebeats.com/dashboard/profile"
                      >
                        <div class="form-group">
                          <div class="row">
                            <div class="col-md-12">
                              <h6>
                                <i class="fas fa-user-tie"></i> CHỦ TÀI KHOẢN:
                                ANONYMOUS
                              </h6>
                            </div>
                            <div class="col-md-12">
                              <h6>
                                <i class="far fa-id-badge"></i> ID TÀI KHOẢN:
                                1492627900875762
                              </h6>
                            </div>
                            <div class="col-md-12">
                              <h6>
                                <i class="fas fa-coins"></i> SỐ DƯ:
                                {{ formatMoney(balance) }}₫
                              </h6>
                            </div>
                          </div>
                        </div>
                      </form>
                    </div>
                  </div>
                  <div class="tab-pane" id="withdraw">
                    <div
                      class="card card-body pd-20 pd-md-40 border shadow-none"
                    >
                      <form class="form-horizontal" role="form">
                        <label
                          class="main-content-label tx-12 tx-medium tx-gray-600"
                          >Số tiền</label
                        >
                        <div class="form-group">
                          <input
                            type="number"
                            class="form-control"
                            required
                            v-model="amount"
                          />
                        </div>
                        <label
                          class="main-content-label tx-12 tx-medium tx-gray-600"
                          >Thông tin tài khoản</label
                        >
                        <div class="form-group">
                          <textarea
                            class="form-control"
                            v-model="info"
                            cols="30"
                            rows="5"
                          ></textarea>
                        </div>
                        <label
                          class="main-content-label tx-12 tx-medium tx-gray-600"
                          >Mã 2FA</label
                        >
                        <div class="form-group">
                          <input
                            type="text"
                            class="form-control"
                            required
                            v-model="code_2fa"
                          />
                        </div>
                        <p
                          class="text-danger"
                          v-for="item in withdrawErrors"
                          :key="item"
                        >
                          {{ item }}
                        </p>
                        <button
                          type="button"
                          class="btn btn-main-primary btn-block"
                          @click="withdrawRequest"
                        >
                          XÁC NHẬN
                        </button>
                      </form>
                    </div>
                    <h5 class="card-title mg-b-20">Lịch sử yêu cầu rút tiền</h5>
                    <table class="table voucher-table">
                      <thead>
                        <tr>
                          <td>STT</td>
                          <td scope="col">Số tiền</td>
                          <td scope="col">Ngày</td>
                          <td scope="col">Trạng thái</td>
                        </tr>
                      </thead>
                      <tbody>
                        <tr
                          v-for="(item, index) in withdrawHistory"
                          :key="index"
                        >
                          <td class="text-center">{{ index + 1 }}</td>
                          <td class="text-center">
                            {{ formatMoney(item.amount) }}
                          </td>
                          <td class="text-center">
                            {{ formatDate(item.created_at) }}
                          </td>
                          <td
                            class="text-center"
                            v-if="item.status == 'pending'"
                          >
                            Đang chờ
                          </td>
                          <td class="text-center" v-if="item.status == 'fail'">
                            Thất Bại
                          </td>
                          <td
                            class="text-center"
                            v-if="item.status == 'success'"
                          >
                            Thành công
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                  <div class="tab-pane" id="depositByEBC">
                    <div
                      class="card card-body pd-20 pd-md-40 border shadow-none"
                    >
                      <form>
                        <h5 class="card-title mg-b-20">CHỌN NGUỒN TIỀN NẠP</h5>
                        <!-- <div class="form-group">
                          <select
                            class="form-control"
                            v-model="depositType"
                            style="margin-bottom: 10px"
                          >
                            <option>Voucher</option>
                            <option>EBC (Etherbanking)</option>
                          </select>
                        </div> -->
                        <div class="form-group">
                          <select v-model="ecbAddress" class="form-control">
                            <option v-for="list in walletList" :key="list.id">
                              {{ list.currency }}
                            </option>
                          </select>
                          <div v-for="list in walletList" :key="list.id">
                            <div v-if="list.currency == ecbAddress">
                              <span v-for="item in list.address" :key="item.id">
                                <br /><label
                                  class="main-content-label tx-12 tx-medium tx-gray-600"
                                  >MÃ QR</label
                                >
                                <span id="qr_ebc"
                                  ><Vue-qrcode
                                    :value="item.address"
                                    :width="200"
                                /></span>
                                <div class="form-group">
                                  <label
                                    class="main-content-label tx-12 tx-medium tx-gray-600"
                                    >ĐỊA CHỈ VÍ</label
                                  >
                                  <input
                                    class="form-control"
                                    :value="item.address"
                                    type="text"
                                    readonly
                                    id="addressCopied"
                                  />
                                </div>
                              </span>
                            </div>
                          </div>
                        </div>
                        <button
                          type="button"
                          class="btn btn-main-primary btn-block"
                          @click="copyToClipBoard('addressCopied')"
                        >
                          COPY ĐỊA CHỈ
                        </button>
                      </form>
                    </div>
                  </div>
                  <div class="tab-pane" id="depositByVoucher">
                    <div
                      class="card card-body pd-20 pd-md-40 border shadow-none"
                    >
                      <form
                        class="form-horizontal"
                        role="form"
                        method="post"
                        action=""
                      >
                        <label
                          class="main-content-label tx-12 tx-medium tx-gray-600"
                          >MÃ 2FA</label
                        >
                        <div class="form-group">
                          <input
                            type="text"
                            required="required"
                            class="form-control"
                            v-model="verify_2fa_code_useVoucher"
                          />
                        </div>
                        <label
                          class="main-content-label tx-12 tx-medium tx-gray-600"
                          >MÃ Voucher</label
                        >
                        <div class="form-group">
                          <input
                            type=""
                            v-model="voucher"
                            class="form-control"
                            id="voucher"
                            required=""
                          />
                        </div>
                        <p
                          class="text-danger"
                          v-for="item in errors"
                          :key="item"
                        >
                          {{ item }}
                        </p>
                        <button
                          type="button"
                          class="btn btn-main-primary btn-block"
                          @click="useVoucher"
                        >
                          XÁC NHẬN
                        </button>
                      </form>
                    </div>
                  </div>
                  <div class="tab-pane" id="makeVoucher">
                    <div
                      class="card card-body pd-20 pd-md-40 border shadow-none"
                    >
                      <form
                        class="form-horizontal"
                        role="form"
                        method="post"
                        action=""
                      >
                        <label
                          class="main-content-label tx-12 tx-medium tx-gray-600"
                          >MÃ 2FA</label
                        >
                        <div class="form-group">
                          <input
                            type="text"
                            class="form-control"
                            required
                            v-model="verify_2fa_code_makeVoucher"
                          />
                        </div>
                        <label
                          class="main-content-label tx-12 tx-medium tx-gray-600"
                          >Số tiền</label
                        >
                        <div class="form-group">
                          <input
                            type="number"
                            class="form-control"
                            required
                            v-model="money"
                          />
                        </div>
                        <p
                          class="text-danger"
                          v-for="item in makeVoucherErrors"
                          :key="item"
                        >
                          {{ item }}
                        </p>
                        <button
                          type="button"
                          class="btn btn-main-primary btn-block"
                          @click="makeVoucher"
                        >
                          XÁC NHẬN
                        </button>
                      </form>
                    </div>
                    <h5 class="card-title mg-b-20">
                      DANH SÁCH VOUCHER CỦA BẠN
                    </h5>
                    <table class="table voucher-table">
                      <thead>
                        <tr>
                          <td>STT</td>
                          <td scope="col">Trị giá</td>
                          <td scope="col" colspan="2">Mã Voucher</td>
                          <td scope="col">Trạng thái</td>
                        </tr>
                      </thead>
                      <tbody>
                        <tr
                          v-for="(voucher, index) in voucherList"
                          :key="index"
                        >
                          <th scope="row">{{ index + 1 }}</th>
                          <td>{{ formatMoney(voucher.amount) }}₫</td>
                          <td>
                            <input
                              type="text"
                              readonly="readonly"
                              :id="voucher._id"
                              :value="voucher._id"
                            />
                          </td>
                          <td>
                            <span
                              class="tag tag-indigo ml-1"
                              style="cursor: pointer"
                              @click="copyToClipBoard(voucher._id)"
                              v-if="voucher.count == 1"
                              >Copy</span
                            >
                          </td>
                          <td v-if="voucher.count == 2">Đã sử dụng</td>
                          <td v-else>Chưa sử dụng</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                  <div class="tab-pane" id="tutorial">
                    <div
                      class="card card-body pd-20 pd-md-40 border shadow-none"
                    >
                      <h5 class="card-title mg-b-20">Nạp tiền</h5>
                      Bạn có thế nạp tiền từ EBC hoặc Voucher. Ok!
                    </div>
                  </div>
                  <div class="tab-pane" id="history">
                    <div class="card-header pb-0">
                      <div class="d-flex justify-content-between">
                        <h4 class="card-title mg-b-0">LỊCH SỬ GIAO DỊCH</h4>
                        <i class="mdi mdi-dots-horizontal text-gray"></i>
                      </div>
                    </div>
                    <div class="card-body">
                      <!-- <div class="row">
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
              </div> -->
                      <div class="table-responsive">
                        <table
                          class="table text-md-nowrap data-table table-bordered table-hover"
                          id="withdrawal"
                        >
                          <thead class="text-center">
                            <tr>
                              <th>ID</th>
                              <th>NGÀY</th>
                              <th>THỜI GIAN</th>
                              <th>TÀI KHOẢN</th>
                              <th>PHƯƠNG THỨC</th>
                            </tr>
                          </thead>
                          <tbody>
                            <tr v-for="(item, index) in history" :key="index">
                              <td class="text-center">{{ index + 1 }}</td>
                              <td class="text-center">
                                {{ formatDate(item.updated_at) }}
                              </td>
                              <td class="text-center">
                                {{ formatTime(item.updated_at) }}
                              </td>
                              <td class="text-center">
                                <span v-if="uid == item.destination">+</span>
                                <span v-if="uid == item.source">-</span>
                                {{ formatMoney(item.amount) }}₫
                              </td>
                              <td>
                                <span
                                  v-if="
                                    uid == item.destination &&
                                    item.method == 'deposit'
                                  "
                                  >- Nạp tiền</span
                                >
                                <span
                                  v-if="
                                    uid == item.destination &&
                                    item.method == 'task'
                                  "
                                  >- Nhận nhiệm vụ</span
                                >
                                <span
                                  v-if="
                                    uid == item.source && item.method == 'task'
                                  "
                                  >- Tạo nhiệm vụ</span
                                >
                                <span v-if="item.method == 'withdraw'"
                                  >- Rút tiền</span
                                >
                                <span
                                  v-if="
                                    uid == item.source &&
                                    item.method == 'voucher'
                                  "
                                  >- Tạo Voucher</span
                                >
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
      </div>
      <!-- Container closed -->
    </div>
  </div>
</template>

<script>
import VueQrcode from "vue-qrcode";
export default {
  components: {
    VueQrcode,
  },
  data() {
    return {
      walletList: [],
      depositType: "Voucher",
      ecbAddress: "BTC",
      errors: [],
      money: null,
      verify_2fa_code_makeVoucher: "",
      verify_2fa_code_useVoucher: "",
      makeVoucherErrors: [],
      voucherList: [],
      voucher: "",
      balance: Number,
      code_2fa: "",
      info: "",
      amount: "",
      withdrawErrors: [],
      withdrawHistory: [],
      history: [],
      uid: this.$store.getters.id,
    };
  },
  mounted() {
    this.CallAPI("get", "money/list-wallet-system", {}, (response) => {
      this.walletList = response.data.data;
    });
    this.CallAPI("get", "money/voucher", {}, (response) => {
      this.voucherList = response.data.data;
    });
    this.CallAPI("get", "money/v2/balance", {}, (response) => {
      this.balance = response.data.data[0].balance;
    });
    this.CallAPI("get", "money/my-request-withdraw", {}, (response) => {
      this.withdrawHistory = response.data.data;
    });
    this.CallAPI("get", "money/v2/history", {}, (response) => {
      this.history = response.data.data;
    });
  },
  methods: {
    copy(value) {},
    copyToClipBoard(value) {
      var copyText = document.getElementById(value);
      copyText.select();
      copyText.setSelectionRange(0, 99999);
      document.execCommand("copy");
      this.$toast.success("Copy thành công!");
    },
    makeVoucher() {
      this.makeVoucherErrors = [];
      if (!this.verify_2fa_code_makeVoucher || !this.money) {
        this.makeVoucherErrors.push("Vui lòng nhập đủ thông tin");
        return;
      }
      // if (this.money < 10000) {
      //   this.makeVoucherErrors.push("Số tiền tối thiểu là 10.000đ");
      //   return;
      // }
      // if (this.money > 1000000) {
      //   this.makeVoucherErrors.push("Số tiền tối đa là 1.000.000đ");
      //   return;
      // }
      this.CallAPI(
        "post",
        "money/create-voucher",
        {
          verify_2fa_code: this.verify_2fa_code_makeVoucher,
          amount: this.money,
        },
        (response) => {
          this.CallAPI("get", "money/voucher", {}, (response) => {
            this.voucherList = response.data.data;
          });
          this.CallAPI("get", "money/v2/balance", {}, (response) => {
            this.balance = response.data.data[0].balance;
          });
          this.CallAPI("get", "money/v2/history", {}, (response) => {
            this.history = response.data.data;
          });
          this.$toast.success("Tạo thành công!");
          this.money = "";
          this.verify_2fa_code_makeVoucher = "";
        },
        (error) => {
          const statusCode = error.response.data.statusCode;
          if (statusCode == 406) {
            this.makeVoucherErrors.push("Tài khoản của bạn không đủ");
            return;
          }
          if (statusCode == 422) {
            this.makeVoucherErrors.push("Mã 2FA không đúng");
            return;
          }
          if (statusCode == 500) {
            this.makeVoucherErrors.push("Lỗi không mong đợi");
            return;
          }
        }
      );
      //Get api list voucher
      this.CallAPI("get", "money/voucher", {}, (response) => {
        this.voucherList = response.data.data;
      });
      //Get api balance
      this.CallAPI("get", "money/v2/balance", {}, (response) => {
        this.balance = response.data.data[0].balance;
      });
    },
    useVoucher() {
      this.errors = [];
      if (!this.voucher || !this.verify_2fa_code_useVoucher) {
        this.errors.push("Vui lòng nhập đủ thông tin");
        return;
      }
      this.CallAPI(
        "post",
        "money/deposit-voucher",
        {
          voucher: this.voucher,
          verify_2fa_code: this.verify_2fa_code_useVoucher,
        },
        (response) => {
          this.CallAPI("get", "money/v2/balance", {}, (response) => {
            this.balance = response.data.data[0].balance;
          });
          this.CallAPI("get", "money/v2/history", {}, (response) => {
            this.history = response.data.data;
          });
          this.$toast.success("Nạp tiền thành công!");
          this.voucher = "";
          this.verify_2fa_code_useVoucher = "";
        },
        (error) => {
          if (error.response.data.error == "Invalid 2fa code!") {
            this.errors.push("Mã 2FA không đúng");
            return;
          }
          if (error.response.data.message == "Invalid Input!") {
            this.errors.push("Mã voucher không đúng");
            return;
          }
          if (error.response.data.statusCode == 500) {
            this.errors.push("Không thể sử dụng voucher của bạn");
            return;
          }
        }
      );
    },
    formatMoney(value) {
      return value.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
    },
    formatDate(value) {
      return new Date(value).toLocaleDateString();
    },
    formatTime(date) {
      return new Date(date).toLocaleTimeString();
    },
    withdrawRequest() {
      this.withdrawErrors = [];
      if (!this.amount || !this.info || !this.code_2fa) {
        this.withdrawErrors.push("Vui lòng nhập đủ thông tin");
        return;
      }
      if (this.amount > this.balance) {
        this.withdrawErrors.push("Tài khoản không đủ");
        return;
      }
      const data = {
        amount: Number(this.amount),
        info: this.info,
        verify_2fa_code: this.code_2fa,
      };
      this.CallAPI(
        "post",
        "money/withdraw",
        data,
        (response) => {
          this.$toast.success("Gửi yêu cầu thành công");
          this.amount = "";
          this.info = "";
          this.code_2fa = "";
          this.CallAPI("get", "money/my-request-withdraw", {}, (response) => {
            this.withdrawHistory = response.data.data;
          });
        },
        (error) => {
          if (error.response.data.error == "Invalid 2fa code!") {
            this.withdrawErrors.push("Mã 2FA không đúng");
            return;
          }
        }
      );
    },
  },
};
</script>

<style>
#qr_ebc {
  display: block;
  text-align: center;
}
#depositByEBC .card,
#depositByVoucher .card,
#makeVoucher .card,
#tutorial .card,
#withdraw .card {
  width: 52%;
  margin: 0 auto;
}
.tab-content #qr_ebc img {
  width: 200px;
}
.voucherCode {
  display: flex;
  justify-content: space-between;
}
.voucherCode .form-control {
  width: 77%;
}
.voucher-table thead td {
  height: 40px;
  line-height: 40px;
  color: #fff;
  text-align: center;
}
.voucher-table thead {
  background: #22c03c;
}
.voucher-table input {
  width: 100%;
  border: none;
  outline: none;
}
#profile .card {
  text-align: left;
}
@media (max-width: 375px) {
  #depositByEBC .card,
  #depositByVoucher .card,
  #makeVoucher .card,
  #tutorial .card {
    width: 100%;
    margin: 0 auto;
  }
  .voucherCode {
    display: block;
  }
  .voucherCode .form-control {
    width: 100%;
  }
  .voucherCode button {
    width: 100%;
    margin-top: 16px;
  }
}
</style>
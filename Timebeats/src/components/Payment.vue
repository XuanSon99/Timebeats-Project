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
                        href="#depositByEBC"
                        data-toggle="tab"
                        aria-expanded="false"
                      >
                        <span class="visible-xs"
                          ><i class="fas fa-money-check-alt"></i
                        ></span>
                        <span class="hidden-xs">NẠP TIỀN TỪ EBC</span>
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
                        <span class="hidden-xs">NẠP TIỀN TỪ VOUCHER</span>
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
                              <h6>CHỦ TÀI KHOẢN: ANONYMOUS</h6>
                            </div>
                            <div class="col-md-12">
                              <h6>ID TÀI KHOẢN: 1492627900875762</h6>
                            </div>
                            <div class="col-md-12">
                              <h6>SỐ DƯ: {{ formatMoney(balance) }}₫</h6>
                            </div>
                          </div>
                        </div>
                      </form>
                    </div>
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
                              v-if="!voucher.destination"
                              >Copy</span
                            >
                          </td>
                          <td v-if="voucher.destination">Đã sử dụng</td>
                          <td v-if="!voucher.destination">Chưa sử dụng</td>
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
      statusCode: "",
      makeVoucherErrors: [],
      voucherList: [],
      voucher: "",
      balance: Number,
    };
  },
  mounted() {
    //Get api list wallet ebc system
    this.$axios
      .get("http://192.168.100.11:3000/api/money/list-wallet-system", {
        headers: {
          Authorization:
            this.$store.getters.id + " " + this.$store.getters.token,
        },
      })
      .then((response) => {
        this.walletList = response.data.data;
      });
    //Get api list voucher
    this.$axios
      .get("http://192.168.100.11:3000/api/money/voucher", {
        headers: {
          Authorization:
            this.$store.getters.id + " " + this.$store.getters.token,
        },
      })
      .then((response) => {
        this.voucherList = response.data.data;
      });
    //Get api balance
    this.$axios
      .get("http://192.168.100.11:3000/api/money/v2/balance", {
        headers: {
          Authorization:
            this.$store.getters.id + " " + this.$store.getters.token,
        },
      })
      .then((response) => {
        this.balance = response.data.data[0].balance;
      });
  },
  methods: {
    copy(value) {},
    copyToClipBoard(value) {
      var copyText = document.getElementById(value);
      copyText.select();
      copyText.setSelectionRange(0, 99999);
      document.execCommand("copy");
      this.$toast.success("Copy thành công!", {
        position: "top-right",
        timeout: 3000,
        closeOnClick: true,
        pauseOnFocusLoss: true,
        pauseOnHover: true,
        draggable: true,
        draggablePercent: 0.85,
        showCloseButtonOnHover: true,
        hideProgressBar: false,
        closeButton: "button",
        icon: true,
        rtl: false,
      });
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

      this.$axios
        .post(
          "http://192.168.100.11:3000/api/money/create-voucher",
          {
            verify_2fa_code: this.verify_2fa_code_makeVoucher,
            amount: this.money,
          },
          {
            headers: {
              Authorization:
                this.$store.getters.id + " " + this.$store.getters.token,
            },
          }
        )
        .then((response) => {
          this.$toast.success("Tạo thành công!", {
            position: "top-right",
            timeout: 2000,
            closeOnClick: true,
            pauseOnFocusLoss: true,
            pauseOnHover: true,
            draggable: true,
            draggablePercent: 0.85,
            showCloseButtonOnHover: true,
            hideProgressBar: false,
            closeButton: "button",
            icon: true,
            rtl: false,
          });
          this.money = "";
          this.verify_2fa_code_makeVoucher = "";
        })
        .catch((error, response) => {
          this.statusCode = error.response.data.statusCode;
          if (this.statusCode == 406) {
            this.makeVoucherErrors.push("Tài khoản của bạn không đủ");
            return;
          }
          if (this.statusCode == 422) {
            this.makeVoucherErrors.push("Mã 2FA không đúng");
            return;
          }
        });
      //Get api list voucher
      this.$axios
        .get("http://192.168.100.11:3000/api/money/voucher", {
          headers: {
            Authorization:
              this.$store.getters.id + " " + this.$store.getters.token,
          },
        })
        .then((response) => {
          this.voucherList = response.data.data;
        });
      //Get api balance
      this.$axios
        .get("http://192.168.100.11:3000/api/money/v2/balance", {
          headers: {
            Authorization:
              this.$store.getters.id + " " + this.$store.getters.token,
          },
        })
        .then((response) => {
          this.balance = response.data.data[0].balance;
        });
    },
    useVoucher() {
      this.errors = [];
      if (!this.voucher || !this.verify_2fa_code_useVoucher) {
        this.errors.push("Vui lòng nhập đủ thông tin");
        return;
      }
      this.$axios
        .post(
          "http://192.168.100.11:3000/api/money/deposit-voucher",
          {
            voucher: this.voucher,
            verify_2fa_code: this.verify_2fa_code_useVoucher,
          },
          {
            headers: {
              Authorization:
                this.$store.getters.id + " " + this.$store.getters.token,
            },
          }
        )
        .then((response) => {
          this.$toast.success("Nạp tiền thành công!", {
            position: "top-right",
            timeout: 2000,
            closeOnClick: true,
            pauseOnFocusLoss: true,
            pauseOnHover: true,
            draggable: true,
            draggablePercent: 0.85,
            showCloseButtonOnHover: true,
            hideProgressBar: false,
            closeButton: "button",
            icon: true,
            rtl: false,
          });
          this.voucher = "";
          this.verify_2fa_code_useVoucher = "";
        })
        .catch((error, response) => {
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
        });
    },
    formatMoney(value) {
      return value.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
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
#tutorial .card {
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
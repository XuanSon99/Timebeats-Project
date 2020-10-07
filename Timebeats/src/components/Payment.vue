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
                              <h6>SỐ DƯ: 100.000.000</h6>
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
                        <h5 class="card-title mg-b-20">NHẬP MÃ VOUCHER</h5>

                        <div class="form-group">
                          <input
                            type=""
                            name="voucher"
                            class="form-control text-center"
                            id="voucher"
                            placeholder="VOUCHER"
                            required=""
                          />
                        </div>

                        <button
                          type="submit"
                          class="btn btn-main-primary btn-block"
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
                        <h5 class="card-title mg-b-20">Số tiền</h5>

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
                          v-for="item in errors"
                          :key="item"
                        >
                          {{ item }}
                        </p>
                        <p
                          class="text-success"
                          v-for="item in success"
                          :key="item"
                        >
                          {{ item }}
                        </p>
                        <label
                          v-if="success.length > 0"
                          class="main-content-label tx-12 tx-medium tx-gray-600"
                          >MÃ VOUCHER</label
                        >
                        <div
                          class="form-group voucherCode"
                          v-if="success.length > 0"
                        >
                          <input
                            type="text"
                            class="form-control"
                            readonly
                            v-model="voucherCode"
                            id="voucherCode"
                          />
                          <button
                            type="button"
                            class="btn btn-danger"
                            @click="copyToClipBoard('voucherCode')"
                          >
                            COPY MÃ
                          </button>
                        </div>
                        <button
                          type="button"
                          class="btn btn-main-primary btn-block"
                          @click="makeVoucher"
                        >
                          XÁC NHẬN
                        </button>
                      </form>
                    </div>
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
      success: [],
      money: 100000,
      voucherCode: "",
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
        console.log(this.walletList);
      });
  },
  methods: {
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
      this.errors = [];
      this.success = [];
      if (this.money < 10000) {
        this.errors.push("Số tiền tối thiểu là 10.000đ");
        return;
      }
      if (this.money > 1000000) {
        this.errors.push("Số tiền tối đa là 1.000.000đ");
        return;
      }
      const success =
        "Đã tạo thành công voucher mệnh giá " +
        this.formatPrice(this.money) +
        "đ";
      this.success.push(success);

      //make random voucher code
      this.voucherCode = "";
      var characters =
        "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
      for (var i = 0; i < 10; i++) {
        this.voucherCode += characters.charAt(
          Math.floor(Math.random() * characters.length)
        );
      }
    },
    formatPrice(value) {
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
</style>
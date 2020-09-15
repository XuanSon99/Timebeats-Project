<template>
  <section id="body">
    <div class="main-content horizontal-content">
      <!-- main-content opened -->

      <!-- container opened -->
      <div class="container">
        <!-- breadcrumb -->
        <div class="breadcrumb-header justify-content-between">
          <div class="my-auto">
            <div class="d-flex">
              <h4 class="content-title mb-0 my-auto">CÀI ĐẶT XÁC THỰC HAI LỚP</h4>
            </div>
          </div>
        </div>
        <!-- breadcrumb -->

        <!-- row -->
        <div class="row">
          <div class="col-lg-12 col-md-12">
            <div class="card">
              <div class="card-body">
                <div class="main-content-label mg-b-5">BẬT XÁC THỰC HAI LỚP</div>
                <p class="mg-b-20">
                  Để bắt đầu sử dụng,
                  <br />Xin hãy sử dụng điện thoại của bạn để Scan mã QR dưới đây. Ví dụ: sử dụng ứng dụng
                  Google Authenticator
                  <br />Sau đó, nhập mã xác minh được tạo từ ứng dụng.
                </p>
                <div class="row">
                  <div class="col-md-10 col-lg-8 col-xl-6 mx-auto d-block">
                    <div class="card card-body pd-20 pd-md-40 border shadow-none">
                      <form
                        class="form-horizontal"
                        method="post"
                        action="https://timebeats.com/dashboard/2FA"
                      >
                        <input
                          type="hidden"
                          name="_token"
                          value="9CRxmKLNzjSPgU2OMwZGPGlU7RxqFNbzOhafUgRJ"
                        />
                        <h5 class="card-title mg-b-20">Cài đặt xác thực hai lớp</h5>
                        <div class="form-group" style="text-align: center;">
                          <img
                            src="data:image/png;base64,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"
                          />
                        </div>
                        <div class="form-group">
                          <label class="main-content-label tx-11 tx-medium tx-gray-600">
                            MÃ SỐ
                            BÍ MẬT
                          </label>
                          <input
                            class="form-control"
                            value="6V7X63VWANWF2NYD"
                            type="text"
                            disabled
                            name="secret"
                          />
                        </div>
                        <div class="form-group">
                          <label class="main-content-label tx-11 tx-medium tx-gray-600">
                            MÃ XÁC
                            MINH
                          </label>
                          <div class="pos-relative">
                            <input
                              class="form-control pd-r-80"
                              required
                              name="authCode"
                              type="text"
                            />
                          </div>
                        </div>
                        <button type="submit" class="btn btn-main-primary btn-block">Bật</button>
                      </form>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <!-- /row -->
      </div>
      <!-- Container closed -->
    </div>
  </section>
</template>

<script>
export default {

	beforeMount(){
		
	}

};

function copyToClipboard(element) {
  var $temp = $("<input>");
  $("body").append($temp);
  $temp.val($(element).html()).select();
  document.execCommand("copy");
  $temp.remove();
  notif({
    msg: "Bạn đã copy link giới thiệu &lt;b&gt;thành công&lt;/b&gt;!",
    type: "success",
  });
}
</script>

<style>
</style>
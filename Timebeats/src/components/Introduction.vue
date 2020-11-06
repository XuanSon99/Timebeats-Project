<template>
  <div class="profile-comp">
    <!---->
    <div class="main-content horizontal-content">
      <div class="container">
        <div class="breadcrumb-header justify-content-between">
          <div class="my-auto">
            <div class="d-flex">
              <h4 class="content-title mb-0 my-auto">Giới thiệu & Chính sách</h4>
            </div>
          </div>
        </div>
        <div class="row row-sm">
          <div class="col-sm-12">
            <div class="card">
              <div class="card-body">
                <div class="tabs-menu">
                  <ul class="nav nav-tabs profile navtab-custom panel-tabs">
                    <li class="active">
                      <a
                        href="#introduction"
                        data-toggle="tab"
                        aria-expanded="false"
                        class=""
                        ><span class="visible-xs"
                          ><i class="fas fa-address-card"></i
                        ></span>
                        <span class="hidden-xs">GIỚI THIỆU</span></a
                      >
                    </li>
                    <li>
                      <a
                        href="#policy"
                        data-toggle="tab"
                        aria-expanded="false"
                        ><span class="visible-xs"
                          ><i class="fas fa-user-lock"></i
                        ></span>
                        <span class="hidden-xs">CHÍNH SÁCH</span></a
                      >
                    </li>
                  </ul>
                </div>
                <div
                  class="tab-content border-left border-bottom border-right border-top-0 p-4"
                >
                  <div id="introduction" class="tab-pane active">
                    <div class="mb-4 main-content-label">Giới thiệu</div>
                  </div>
                  <div id="policy" class="tab-pane">
                    <div class="mb-4 main-content-label">Chính sách</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style>
</style>
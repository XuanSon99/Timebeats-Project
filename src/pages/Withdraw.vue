<template>
  <div class="content">
    <div class="container-fluid">
      <div class="row">
        <div class="col-md-2"></div>
        <div class="col-md-8">
          <div class="card" v-if="card.list">
            <div class="card-header">
              <h4 class="card-title">Danh sách rút tiền</h4>
            </div>
            <div class="card-body">
              <div class="scroll">
                <table class="table table-hover">
                  <thead>
                    <tr>
                      <th scope="col">#</th>
                      <th scope="col">User name</th>
                      <th scope="col">Tiền rút</th>
                      <th scope="col">Trạng thái</th>
                      <th scope="col">Ngày rút</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr
                      v-for="(item, index) in list"
                      :key="index"
                      @click="getWidthdraw(item)"
                    >
                      <th scope="row">{{ index + 1 }}</th>
                      <td>{{ item.uid.display_name }}</td>
                      <td>{{ item.amount }}</td>
                      <td>{{ item.status }}</td>
                      <td>{{ formatDate(item.created_at) }}</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
            <div class="card-footer"></div>
          </div>
          <div class="card" v-if="card.request">
            <div class="card-header">
              <div class="display-flex space-between">
                <h4 class="card-title">Xét duyệt</h4>
                <button class="btn btn-success" @click="back">
                  <i class="fas fa-arrow-circle-left"></i> Quay lại
                </button>
              </div>
            </div>
            <div class="card-body">
              <form action="">
                <div class="row">
                  <div class="col-md-12">
                    <div class="form-group">
                      <label for="">ID giao dịch</label>
                      <input
                        type="text"
                        class="form-control"
                        v-model="list_send.id"
                        disabled
                      />
                    </div>
                  </div>
                </div>
                <div class="row">
                  <div class="col-md-12">
                    <div class="form-group">
                      <label for="">Thông tin tài khoản</label>
                      <textarea
                        class="form-control"
                        v-model="list_send.stk"
                        rows="5"
                        disabled
                      />
                    </div>
                  </div>
                </div>
                <div class="row">
                  <div class="col-md-6">
                    <div class="form-group">
                      <label for="">User name</label>
                      <input
                        type="text"
                        class="form-control"
                        v-model="list_send.username"
                      />
                    </div>
                  </div>
                  <div class="col-md-3">
                    <div class="form-group">
                      <label for="">Giới tính</label>
                      <input
                        type="text"
                        class="form-control"
                        v-model="list_send.gender"
                      />
                    </div>
                  </div>
                  <div class="col-md-3">
                    <div>
                      <label class="typo__label">Trạng thái</label>
                      <multiselect
                        v-model="value"
                        deselect-label="Can't remove this value"
                        track-by="status"
                        label="status"
                        placeholder="Select one"
                        :options="options"
                        :searchable="false"
                        :allow-empty="false"
                      >
                        <template slot="singleLabel" slot-scope="{ option }"
                          ><strong>{{ option.status }}</strong></template
                        >
                      </multiselect>
                    </div>
                  </div>
                </div>
                <div class="row">
                  <div class="col-md-12">
                    <div class="form-group">
                      <label for="">Nội dung</label>
                      <textarea
                        class="form-control"
                        v-model="content"
                        rows="3"
                      ></textarea>
                    </div>
                  </div>
                </div>
                <div class="row">
                  <div class="col-md-12">
                    <p class="text-danger" v-for="item in error" :key="item">
                      {{ item }}
                    </p>
                  </div>
                </div>
                <div class="row">
                  <div class="col-md-12 text-center">
                    <button class="btn btn-success" @click="accept">
                      Xác nhận <i class="fas fa-check"></i>
                    </button>
                  </div>
                </div>
              </form>
            </div>
            <div class="card-footer"></div>
          </div>
        </div>
        <div class="col-md-2"></div>
      </div>
    </div>
  </div>
</template>

<script>
import Multiselect from "vue-multiselect";
export default {
  components: {
    Multiselect,
  },
  data() {
    return {
      card: {
        list: true,
        request: false,
      },
      list: [],
      content: null,
      list_send: {
        id: null,
        stk: null,
        username: null,
        amount: null,
        gender: null,
      },
      value: {},
      options: [
        { status: "success" },
        { status: "fail" },
        { status: "pending" },
      ],
      error: [],
    };
  },
  mounted() {
    this.CallAPI(
      "get",
      this.$urlAPI + "money/list-request-withdraw-admin",
      {},
      (data) => {
        this.list = data.data;
      }
    );
  },
  methods: {
    formatDate(time) {
      return new Date(time).toLocaleDateString();
    },
    back() {
      this.card.list = true;
      this.card.request = false;
      this.list_send.id = null;
      this.list_send.amount = null;
      this.list_send.stk = null;
      this.list_send.username = null;
      this.list_send.gender = null;
      this.value = {};
    },
    getWidthdraw(item) {
      this.card.list = false;
      this.card.request = true;
      this.list_send.id = item._id;
      this.list_send.amount = item.amount;
      this.list_send.stk = item.external_info.info;
      this.list_send.username = item.uid.display_name;
      this.list_send.gender = item.uid.gender;
      this.value = { status: item.status };
    },
    accept(e) {
      this.error = [];
      e.preventDefault();
      if (!this.content) {
        this.error.push("Vui lòng nhập đầy đủ thông tin");
        return;
      }
      this.CallAPI(
        "post",
        this.$urlAPI + "money/reply-request-withdraw-admin",
        {
          transaction_id: this.list_send.id,
          reason: this.content,
          status: this.value.status,
        },
        (data) => {
          this.$toast.success("Thành công !");
        },
        (error) => {
          this.$toast.error("Thất bại !");
        }
      );
    },
  },
};
</script>

<style>
</style>
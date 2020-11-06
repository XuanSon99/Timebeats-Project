<template>
  <div class="content">
    <div class="row">
      <div class="col-md-2"></div>
      <div class="col-md-8">
        <div class="card" v-if="card.list">
          <div class="card-header">
            <h4 class="card-title">List Request</h4>
          </div>
          <div class="card-body">
            <div class="scroll">
              <table class="table table-hover">
                <thead>
                  <tr>
                    <th scope="col">#</th>
                    <th scope="col">Uid</th>
                    <th scope="col">Lý do</th>
                    <th scope="col">Ngày gửi</th>
                    <th scope="col">Trạng thái</th>

                    <th scope="col" class="text-center">Hành động</th>
                  </tr>
                </thead>
                <tbody>
                  <tr v-for="(item, index) in list_request" :key="index">
                    <th scope="row">{{ index + 1 }}</th>
                    <td @click="get_id_request(item._id)">{{ item.uid }}</td>
                    <td @click="get_id_request(item._id)">
                      {{ item.note.reason }}
                    </td>
                    <td>{{ formatDate(item.created_at) }}</td>
                    <td>{{ item.status }}</td>
                    <td class="text-center">
                      <button class="btn btn-danger" @click="Delete(item._id)">
                        <i class="fas fa-trash-alt"></i>
                      </button>
                    </td>
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
              <h4 class="card-title">Xét duyệt yêu cầu</h4>
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
                    <label for="">Request ID</label>
                    <input
                      type="text"
                      class="form-control"
                      disabled
                      :value="id"
                    />
                  </div>
                </div>
              </div>
              <div class="row">
                <div class="col-md-12">
                  <div class="form-group text-center">
                    <button class="btn btn-success" @click="accept_req">
                      Xác nhận <i class="fas fa-check"></i>
                    </button>
                  </div>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
      <div class="col-md-2"></div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      card: {
        list: true,
        request: false,
      },
      list_request: [],
      id: null,
    };
  },
  mounted() {
    this.CallAPI(
      "get",
      this.$urlAPI + "setting/list-request-admin",
      {},
      (data) => {
        this.list_request = data.data[0].docs;
      }
    );
  },
  methods: {
    formatDate(time) {
      return new Date(time).toLocaleDateString();
    },
    Delete(id) {
      let isConfirm = confirm("Bạn có chắc chắn muốn xóa ?");
      console.log(id);
    },
    back() {
      this.card.list = true;
      this.card.request = false;
    },
    get_id_request(id) {
      this.card.list = false;
      this.card.request = true;
      this.id = id;
    },
    accept_req(e) {
      e.preventDefault();
      this.CallAPI(
        "post",
        this.$urlAPI + "setting/active-request-creator-admin",
        {
          request_id: this.id,
        },
        (data) => {
          this.$toast.success("Duyệt thành công !");
          this.card.list = true;
          this.card.request = false;
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
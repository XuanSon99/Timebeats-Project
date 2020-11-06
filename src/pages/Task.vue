<template>
  <div class="content">
    <div class="row">
      <div class="col-md-2"></div>
      <div class="col-md-8">
        <div class="card" v-if="card.list">
          <div class="card-header">
            <h4 class="card-title">Danh sách nhiệm vụ cần xét duyệt</h4>
          </div>
          <div class="card-body">
            <div class="scroll">
              <table class="table table-hover">
                <thead>
                  <tr>
                    <th scope="col">#</th>
                    <th scope="col">Tên người dùng</th>

                    <th scope="col">Trạng thái</th>
                    <th scope="col">Ngày tạo</th>
                  </tr>
                </thead>
                <tbody>
                  <tr v-for="(item, index) in list_task" :key="index">
                    <th scope="row">{{ index + 1 }}</th>
                    <td @click="accept_task(item)">
                      {{ item.uid.display_name }}
                    </td>

                    <td @click="accept_task(item)">{{ item.status }}</td>
                    <td @click="accept_task(item)">
                      {{ formatDate(item.created_at) }}
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
          <div class="card-footer"></div>
        </div>
        <div class="card" v-if="card.accept">
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
                    <label for="">Task ID</label>
                    <input
                      type="text"
                      class="form-control"
                      :value="user_task.id"
                      disabled
                    />
                  </div>
                </div>
              </div>
              <div class="row">
                <div class="col-md-6">
                  <div class="form-group">
                    <label for="">Link</label>
                    <input
                      type="text"
                      class="form-control"
                      disabled
                      :value="user_task.link"
                    />
                  </div>
                </div>
                <div class="col-md-6">
                  <div>
                    <label class="typo__label">Trạng thái</label>
                    <multiselect
                      v-model="value_confirm"
                      deselect-label="Can't remove this value"
                      track-by="status"
                      label="status"
                      placeholder="Select one"
                      :options="options_confirm"
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
                    <label for="">Mô tả nhiệm vụ</label>
                    <textarea
                      type="text"
                      class="form-control"
                      rows="3"
                      :value="user_task.id"
                      disabled
                    ></textarea>
                  </div>
                </div>
              </div>
              <div class="row">
                <div class="col-md-12">
                  <div class="form-group">
                    <label for="">Nội dung</label>
                    <textarea
                      type="text"
                      class="form-control"
                      rows="3"
                      v-model="content"
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
                <div class="col-md-12">
                  <div class="form-group text-center">
                    <button class="btn btn-success" @click="Active_task">
                      <i class="fas fa-check"></i> Xác nhận
                    </button>
                  </div>
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
</template>
<script>
import multiselect from "vue-multiselect";
export default {
  data() {
    return {
      card: {
        list: true,
        accept: false,
      },
      content: null,
      user_task: {
        link: null,
        id: null,
        description: null,
      },
      list_task: [],
      value_confirm: {},
      options_confirm: [
        { status: "confirmed" },
        { status: "unconfirmed", $isDisabled: true },
      ],
      error: [],
    };
  },
  components: {
    multiselect,
  },
  mounted() {
    this.CallAPI("get", this.$urlAPI + "task/list-task-admin", {}, (data) => {
      this.list_task = data.data;
    });
  },
  methods: {
    accept_task(item) {
      this.card.list = false;
      this.card.accept = true;
      this.user_task.link = item.link;
      this.user_task.id = item._id;
      this.user_task.description = item.description;
      this.value_confirm.status = item.status;
    },
    Active_task(e) {
      this.error = [];
      e.preventDefault();
      if (!this.content) {
        this.error.push("Vui lòng nhập đầy đủ thông tin");
        return;
      }
      this.CallAPI(
        "post",
        this.$urlAPI + "task/active-task-admin",
        {
          task_id: this.user_task.id,
          content: this.content,
          status: this.value_confirm.status,
        },
        (data) => {
          this.$toast.success("Xét duyệt thành công !");
        }
      );
    },
    formatDate(time) {
      return new Date(time).toLocaleDateString();
    },
    back() {
      this.card.list = true;
      this.card.accept = false;
    },
  },
};
</script>

<style>
</style>
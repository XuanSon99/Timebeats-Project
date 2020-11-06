<template>
  <div class="content">
    <div class="container-fluid">
      <div class="row">
        <div class="col-md-2"></div>
        <div class="col-md-8">
          <div class="card" v-if="card.list">
            <div class="card-header">
              <h4 class="card-title">Danh sách chiến dịch</h4>
            </div>
            <div class="card-body">
              <div class="scroll">
                <table class="table table-hover">
                  <thead>
                    <tr>
                      <th scope="col">#</th>
                      <th scope="col">Username</th>
                      <th scope="col">Nền tảng</th>
                      <th scope="col">Trạng thái</th>
                      <th scope="col">Ngày tạo</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr
                      v-for="(item, index) in get_list"
                      :key="index"
                      @click="getItem(item)"
                    >
                      <th scope="row">{{ index + 1 }}</th>
                      <td>{{ item.uid.display_name }}</td>
                      <td>{{ item.social_id.name }}</td>
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
                <button @click="back" class="btn btn-success">
                  <i class="fas fa-arrow-circle-left"></i> Quay lại
                </button>
              </div>
            </div>
            <div class="card-body">
              <form action="">
                <div class="row">
                  <div class="col-md-8">
                    <div class="form-group">
                      <label for="">TASK ID</label>
                      <input
                        type="text"
                        class="form-control"
                        :value="user_task.task_id"
                        disabled
                      />
                    </div>
                  </div>
                  <div class="col-md-4">
                    <div>
                      <label class="typo__label">Trạng thái</label>
                      <multiselect
                        v-model="value_status"
                        deselect-label="Can't remove this value"
                        track-by="name"
                        label="name"
                        placeholder="Select one"
                        :options="options_status"
                        :searchable="false"
                        :allow-empty="false"
                      >
                        <template slot="singleLabel" slot-scope="{ option }"
                          ><strong>{{ option.name }}</strong></template
                        >
                      </multiselect>
                    </div>
                  </div>
                </div>
                <div class="row">
                  <div class="col-md-6">
                    <div class="form-group">
                      <label for="">Tên người dùng</label>
                      <input
                        type="text"
                        class="form-control"
                        :value="user_task.uid.display_name"
                        disabled
                      />
                    </div>
                  </div>
                  <div class="col-md-6">
                    <div>
                      <label class="typo__label">Lĩnh vực</label>
                      <multiselect
                        v-model="value"
                        tag-placeholder="Add this as new tag"
                        placeholder="Search or add a tag"
                        label="name"
                        track-by="id"
                        :options="options"
                        :multiple="true"
                        :taggable="true"
                      ></multiselect>
                    </div>
                  </div>
                </div>
                <div class="row">
                  <div class="col-md-12">
                    <div class="form-group">
                      <label for="">Nội dung nhiệm vụ</label>
                      <textarea
                        class="form-control"
                        name=""
                        id=""
                        cols="4"
                        rows="4"
                        v-model="user_task.description"
                      ></textarea>
                    </div>
                  </div>
                </div>
                <div class="row">
                  <div class="col-md-12">
                    <div class="form-group text-center">
                      <button class="btn btn-success" @click="accept">
                        Xác nhận <i class="fas fa-check"></i>
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
  </div>
</template>
<script>
import Card from "src/components/Cards/Card.vue";
import Multiselect from "vue-multiselect";
export default {
  components: {
    Card,
    Multiselect,
  },
  data() {
    return {
      card: {
        list: true,
        request: false,
      },
      get_list: [],
      user_task: {
        uid: {
          display_name: null,
        },
        task_id: null,
        description: null,
      },
      value: [],
      options: [],
      value_status: {},
      options_status: [{ name: "confirmed" }, { name: "unconfirmed" }],
      error: [],
    };
  },
  mounted() {
    this.CallAPI("get", this.$urlAPI + "task/list-task-admin", {}, (data) => {
      this.get_list = data.data;
    });
  },
  methods: {
    back() {
      this.card.list = true;
      this.card.request = false;
      this.value_status = {};
      this.value = [];
    },
    getItem(arr) {
      this.card.list = false;
      this.card.request = true;
      this.user_task.uid.display_name = arr.uid.display_name;
      this.user_task.task_id = arr._id;
      this.user_task.description = arr.description;
      this.value_status = { name: arr.status };
      for (let item of arr.field) {
        this.options.push({ name: item.name, id: item._id });
        this.value.push({ name: item.name, id: item._id });
      }
    },
    accept(e) {
      this.error = [];
      e.preventDefault();
      if (!this.user_task.description) {
        this.error.push("Vui lòng điền đầy đủ thông tin!");
        return;
      }
      this.CallAPI(
        "post",
        this.$urlAPI + "task/active-task-admin",
        {
          task_id: this.user_task.task_id,
          content: this.user_task.description,
          status: this.value_status.name,
        },
        (data) => {
          this.$toast.success("Xét duyệt thành công");
        },
        (error) => {
          this.$toast.error("Xét duyệt thất bại!");
        }
      );
    },
    formatDate(time) {
      return new Date(time).toLocaleDateString();
    },
  },
};
</script>
<style>
</style>

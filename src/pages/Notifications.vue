<template>
  <div class="content">
    <div class="row">
      <div class="col-md-1"></div>
      <div class="col-md-10">
        <div class="card">
          <div class="card-header">
            <span class="font-weight-bold">Thông báo</span>
          </div>
          <div class="card-body">
            <span class="font-weight-bold">Tạo thông báo</span>
            <form>
              <div class="form-group">
                <div>
                  <label class="typo__label">Loại thông báo</label>
                  <multiselect
                    v-model="valueNotify"
                    deselect-label="Không thể xóa giá trị"
                    track-by="type"
                    label="name"
                    placeholder="Lựa chọn Thông báo"
                    :options="optionsType"
                    :searchable="false"
                    :allow-empty="false"
                  >
                    <template slot="singleLabel" slot-scope="{ option }"
                      ><strong>{{ option.name }} </strong></template
                    >
                  </multiselect>
                </div>
              </div>
              <div class="form-group uploadAvatar">
                <label for="inputImg" class="profile-edit choose-avatar"
                  ><i class="fas fa-camera-retro"></i
                ></label>
                <img alt :src="url" id="profileImg" />
                <input
                  type="file"
                  id="inputImg"
                  style="display: none"
                  @change="uploadImage($event)"
                  accept="image/*"
                />
              </div>
              <div class="form-group">
                <label for="title-notification">Tiêu đề</label>
                <input
                  type="text"
                  class="form-control"
                  id="title-notification"
                  v-model="title"
                />
              </div>
              <div class="form-group">
                <label for="content-notification">Nội dung thông báo</label>
                <textarea
                  class="form-control"
                  id="content-notification"
                  rows="3"
                  v-model="content"
                ></textarea>
              </div>
              <div class="form-group">
                <div>
                  <label class="typo__label">Người dùng</label>
                  <multiselect
                    v-model="valueUser"
                    placeholder="Lựa chọn người dùng thông báo"
                    label="label"
                    track-by="value"
                    :options="optionsUser"
                    :multiple="true"
                    :taggable="true"
                  ></multiselect>
                </div>
              </div>
              <div class="form-group">
                <div>
                  <label class="typo__label">Nhóm</label>
                  <multiselect
                    v-model="valueGroup"
                    placeholder="Lựa chọn nhóm người dùng cần thông báo"
                    label="value"
                    track-by="value"
                    :options="optionsGroup"
                    :multiple="true"
                    :taggable="true"
                  ></multiselect>
                </div>
              </div>
              <div class="form-group">
                <p v-for="item in errors" :key="item" class="text-danger">
                  {{ item }}
                </p>
              </div>
              <div class="form-group text-center">
                <button
                  type="submit"
                  class="btn btn-success"
                  @click="addNotify"
                >
                  Thêm thông báo
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
      <div class="col-md-1"></div>
    </div>
  </div>
</template>
<script>
import Card from "src/components/Cards/Card.vue";
import multiselect from "vue-multiselect";
export default {
  components: {
    Card,
    multiselect,
  },
  data() {
    return {
      type: ["", "info", "success", "warning", "danger"],
      notifications: {
        topCenter: false,
      },
      url: null,
      srcImg: {},
      errors: [],
      typeNotify: null,
      title: "",
      content: "",
      valueGroup: [],
      optionsGroup: [],
      valueUser: [],
      optionsUser: [],
      itemInValue: [],
      valueNotify: [],
      optionsType: [
        { name: "Thông thường", type: "normal" },
        { name: "Nhiệm vụ mới", type: "new_task" },
      ],
    };
  },
  mounted() {
    // GET LIST GROUP
    this.CallAPI(
      "get",
      this.$urlAPI + "setting/list-group-admin",
      {},
      (data) => {
        var item = data.data[0];
        for (let index in item) {
          this.optionsGroup.push({ type: "group", value: item[index].code });
        }
      }
    );
    this.CallAPI(
      "get",
      this.$urlAPI + "user/list-admin?uid=&keyword=&email=",
      {},
      (data) => {
        var item = data.data[0];
        for (let index in item) {
          this.optionsUser.push({
            type: "user",
            value: item[index]._id,
            label: item[index].email,
          });
        }
      }
    );
  },
  methods: {
    notifyVue(verticalAlign, horizontalAlign) {
      const color = Math.floor(Math.random() * 4 + 1);
      this.$notifications.notify({
        message: `<span>Welcome to <b>Light Bootstrap Dashboard</b> - a beautiful freebie for every web developer.</span>`,
        icon: "nc-icon nc-app",
        horizontalAlign: horizontalAlign,
        verticalAlign: verticalAlign,
        type: this.type[color],
      });
    },

    uploadImage(event) {
      this.srcImg = event.target.files[0];
      this.url = URL.createObjectURL(this.srcImg);
    },
    addNotify(e) {
      this.errors = [];
      e.preventDefault();
      if (!this.title || !this.content || !this.url || !this.type) {
        this.errors.push("Vui lòng nhập đầy đủ thông tin !");
        return;
      }
      for (let item of this.valueGroup) {
        let type = item.type;
        let value = item.value;
        this.itemInValue.push({ type: type, value: value });
      }
      for (let item of this.valueUser) {
        let type = item.type;
        let value = item.value;
        this.itemInValue.push({ type: type, value: value });
      }
      this.typeNotify = this.valueNotify.type;
      let dataR = new FormData();
      dataR.append("type", this.typeNotify);
      dataR.append("title", this.title);
      dataR.append("content", this.content);
      dataR.append("to", JSON.stringify(this.itemInValue));
      dataR.append("avatar", this.srcImg);
      this.CallAPI(
        "post",
        this.$urlAPI + "notify/send-admin",
        dataR,
        (data) => {
          this.$toast.success("Thông báo thành công !");
        },
        (error) => {
          this.$toast.error("Thông báo thất bại !");
        }
      );
    },
  },
};
</script>
<style lang="scss">
#uploadAvatar {
  display: none !important;
}
.uploadAvatar {
  width: 200px;
  height: 200px;
  position: relative;
}
.uploadAvatar label {
  position: absolute;
  text-align: left;
}
.uploadAvatar label i {
  font-size: 24px;
}
.uploadAvatar img {
  width: 100%;
  height: 100%;
}
.uploadAvatar span {
  margin-right: 15px;
}
.choose-avatar {
  cursor: pointer;
}
.choose-avatar:hover {
  color: #22c03c;
}
.btn-success {
  color: #fff !important;
  background-color: #28a745 !important;
  border-color: #28a745 !important;
}
</style>

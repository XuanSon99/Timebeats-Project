<template>
  <div class="content display-flex">
    <div class="container-fluid">
      <div class="row">
        <div class="col-md-2"></div>
        <div class="col-md-8">
          <div class="card" v-if="card.list_card">
            <div class="card-header">
              <span class="font-weight-bold">Danh sách Social</span>
            </div>
            <div class="card-body">
              <div class="scroll">
                <table class="table table-hover table-bordered">
                  <thead>
                    <tr>
                      <th scope="col">#</th>
                      <th scope="col">ID</th>
                      <th scope="col" class="text-center">Nền tảng</th>
                      <th scope="col" class="text-center">trạng thái</th>
                      <th scope="col" class="text-center">Hành động</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr v-for="(item, index) in list_social" :key="index">
                      <th scope="row">{{ index + 1 }}</th>
                      <td @click="getSocial(item)">{{ item._id }}</td>
                      <td @click="getSocial(item)" class="text-center">{{ item.name }}</td>
                      <td @click="getSocial(item)" class="text-center">
                        {{ translate(item.status) }}
                      </td>
                      <td class="text-center">
                        <button
                          class="btn btn-danger"
                          @click="remove_social(item._id)"
                        >
                          <i class="fas fa-trash-alt"></i>
                        </button>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
          <div class="card" v-if="card.update_card">
            <div class="card-header">
              <div class="display-flex space-between">
                <span class="font-weight-bold">Cập nhật Social</span>
                <button class="btn btn-success" @click="back">
                  <i class="fas fa-arrow-circle-left"></i> Danh sách
                </button>
              </div>
            </div>
            <div class="card-body">
              <form action="">
                <div class="row">
                  <div class="col-md-12">
                    <div
                      style="
                        border: 1px solid rgba(0, 0, 0, 0.125);
                        width: 52px;
                      "
                    >
                      <img :src="url" alt="" class="avatar" />
                    </div>
                  </div>
                </div>
                <div class="row">
                  <div class="col-md-12">
                    <div class="form-group">
                      <label for="">Link ảnh</label>
                      <input
                        type="text"
                        class="form-control"
                        placeholder="Nhập vào một đường link"
                        v-model="url"
                      />
                    </div>
                  </div>
                </div>
                <div class="row">
                  <div class="col-md-6">
                    <div class="form-group">
                      <label for="">Social ID</label>
                      <input
                        type="text"
                        v-model="social_id"
                        class="form-control"
                      />
                    </div>
                  </div>
                  <div class="col-md-3">
                    <div class="form-group">
                      <label class="typo__label">Nền tảng</label>
                      <multiselect
                        v-model="value_Platform"
                        deselect-label="Can't remove this value"
                        track-by="code"
                        label="name"
                        placeholder="Select one"
                        :options="options_Platform"
                        :searchable="false"
                        :allow-empty="false"
                      >
                        <template slot="singleLabel" slot-scope="{ option }"
                          ><strong>{{ option.name }}</strong>
                        </template>
                      </multiselect>
                    </div>
                  </div>
                  <div class="col-md-3">
                    <div class="form-group">
                      <label for="">Phí hệ thống</label>
                      <input type="number" class="form-control" v-model="system_fee">
                    </div>
                  </div>
                </div>
                <div class="row">
                  <div class="col-md-12">
                    <div class="form-group">
                      <div>
                        <label class="typo__label">Key</label>
                        <multiselect
                          v-model="value_key"
                          tag-placeholder="Add this as new tag"
                          placeholder="Search or add a tag"
                          label="key"
                          track-by="key"
                          :options="options_key"
                          :multiple="true"
                          :taggable="true"
                        ></multiselect>
                      </div>
                      <div
                        class="card"
                        v-for="(item, index) in value_key"
                        :key="index"
                      >
                        <div class="card-header display-flex space-between">
                          <span class="font-weight-bold">{{item.key}}</span>

                          <button
                            type="button"
                            class="btn btn-success"
                            @click="add_option(index)"
                          >
                            <i class="fas fa-plus-circle"></i> Thêm option
                          </button>
                        </div>
                        <div class="card-body">
                          <div class="row">
                            <div class="col-md-3">
                              <div>
                                <multiselect
                                  v-model="item.type"
                                  :options="options_type"
                                  deselect-label="Can't remove this value"
                                  :allow-empty="false"
                                  :searchable="false"
                                ></multiselect>
                              </div>
                            </div>
                          </div>
                          <table class="table table-bordered">
                            <thead>
                              <tr>
                                <th scope="col">#</th>
                                <th scope="col">option_key</th>
                                <th scope="col">from</th>
                                <th scope="col">to</th>
                                <th scope="col">price</th>
                                <th scope="col" class="text-center">Action</th>
                              </tr>
                            </thead>
                            <tbody>
                              <tr v-for="(option, i) in item.option" :key="i">
                                <th scope="row">{{ i + 1 }}</th>
                                <td>
                                  <input
                                    type="text"
                                    class="form-control edit_input"
                                    v-model="option.key_option"
                                    placeholder="Nhập key"
                                  />
                                </td>
                                <td>
                                  <input
                                    type="number"
                                    class="form-control edit_input"
                                    v-model="option.from"
                                    placeholder="Nhập một số"
                                  />
                                </td>
                                <td>
                                  <input
                                    type="number"
                                    class="form-control edit_input"
                                    v-model="option.to"
                                    placeholder="Nhập một số"
                                  />
                                </td>
                                <td>
                                  <input
                                    type="number"
                                    class="form-control edit_input"
                                    v-model="option.price"
                                    placeholder="Nhập một số"
                                  />
                                </td>
                                <td class="text-center">
                                  <button
                                    class="btn btn-danger"
                                    type="button"
                                    @click="remove_option(index, i)"
                                  >
                                    <i class="fas fa-trash-alt"></i>
                                  </button>
                                </td>
                              </tr>
                            </tbody>
                          </table>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="row">
                  <div class="col-md-12">
                    <div class="form-group text-center">
                      <button class="btn btn-success" @click="update">
                        <i class="fas fa-spinner"></i> Cập nhật
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
import multiselect from "vue-multiselect";
export default {
  components: {
    Card,
    multiselect,
  },
  data() {
    return {
      isEdit: false,
      picker: null,
      name: null,
      value: null,
      url: null,
      system_fee: null,
      option_social: {
        key_option: null,
        from: null,
        to: null,
        price: null,
      },
      arr_option_social: [],
      social_id: null,
      user_social: {},
      key: [],
      card: {
        list_card: true,
        add_card: false,
        update_card: false,
      },
      list_social: [],
      options: [
        { name: "Hoạt động", value: "active" },
        { name: "Không hoạt động", value: "" },
      ],
      value_Platform: {},
      options_Platform: [
        {
          name: "facebook",
          code: "FB",
        },
        {
          name: "TIKTOK",
          code: "TIKTOK",
        },
      ],
      value_key: [],
      options_type: ["auto", "manual"],
      options_key: [
        {
          key: "like",
          require: "link",
          status: "active",
          type: "auto",
          option: [],
        },
        {
          key: "share",
          require: "link",
          status: "active",
          type: "auto",
          option: [],
        },
        {
          key: "follow",
          require: "link",
          status: "active",
          type: "auto",
          option: [],
        },
        {
          key: "view",
          require: "link",
          status: "active",
          type: "auto",
          option: [],
        },
      ],
      option_of_key: [],
    };
  },
  mounted() {
    this.CallAPI(
      "get",
      "social/list-social-admin",
      {},
      (data) => {
        this.list_social = data.data[0].docs;
      }
    );
    this.CallAPI("get","social/list", {}, (data) => {});
  },
  methods: {
    getSocial(user_social) {
      this.card.list_card = false;
      this.card.update_card = true;
      this.card.add_card = false;
      this.user_social = user_social;
      this.url = this.user_social.avatar;
      this.social_id = this.user_social._id;
      this.system_fee = user_social.system_fee;
      
      console.log(user_social);
      this.value_Platform = {
        name: this.user_social.name,
        code: this.user_social.code,
      };
      for (let item of this.user_social.function) {
        this.value_key.push({
          key: item.key,
          require: item.require,
          status: item.status,
          type: item.type,
          option: item.option,
        });
        let index = this.options_key.findIndex((x) => x.key == item.key);
        this.options_key.splice(index, 1);
        this.options_key.push({
          key: item.key,
          require: item.require,
          status: item.status,
          type: item.type,
          option: item.option,
          system_fee: this.system_fee
        });
      }
    },
    back() {
      this.card.list_card = true;
      this.card.update_card = false;
      this.card.add_card = false;
      this.value_Platform = [];
      this.value_key = [];
    },
    remove_social(id) {
      console.log("id: ", id);
      let cf = confirm("Bạn có chắc chắn muốn xóa social này ?");
      if (cf) alert("Deleted!!!");
    },
    Edit(e) {
      e.preventDefault();
      this.isEdit = true;
    },
    add_option(index) {
      let length = this.value_key[index].option.length;
      this.value_key[index].option.push({
        key_option: `option_${length + 1}`,
        from: null,
        to: null,
        price: null,
      });
    },
    Edit_option_key(e) {
      e.preventDefault();
      this.isEdit = true;
    },
    getOption(option, i) {
      const optionR = option;
      this.arr_option = optionR;
      this.arr_option_social = this.arr_option;
    },

    update(e) {
      e.preventDefault();
      let req = [
        {
          key: "user-pass",
          status: "active",
        },
        {
          key: "cookie",
          status: "active",
        },
        {
          key: "token",
          status: "active",
        },
      ];
      this.CallAPI(
        "post",
        "social/update-social-admin",
        {
          social_id: this.social_id,
          status: "active",
          code: this.value_Platform.code,
          name: this.value_Platform.name,
          avatar: this.url,
          function: JSON.stringify(this.value_key),
          require: req,
          system_fee: this.system_fee
        },
        (data) => {
          this.$toast.success("Cập nhật thành công!");
          location.reload();
          this.card.list_card = true;
          this.card.update_card = false;
        },
        (error) => {
          this.$toast.error("Cập nhật không thành công!");
        }
      );
    },
    remove_option(index, i) {
      let cf = confirm("Bạn có chắc chắn muốn xóa option này ?");
      if (cf) this.value_key[index].option.splice(i, 1);
    },
    translate(status) {
      if(status === 'active') {
        return "Hoạt động";
      }
      if(status == 'manual') {
        return "Thủ công";
      }
      else if(status == 'auto') {
        return "Tự động";
      }
    }
  },
};
</script>
<style>
#active,
#Noactive {
  display: none;
}
.btn-outline-secondary:hover {
  color: #fff;
  background-color: #6c757d;
  border-color: #6c757d;
}
#upload {
  display: none;
}
.upload {
  width: 80px;
  height: 80px;
  border: 1px #87cb16 solid;
  position: relative;
}
.upload img {
  width: 100%;
  height: 100%;
}
.upload i {
  position: absolute;
  top: -4px;
  left: -3px;
  cursor: pointer;
  z-index: 9999;
  color: #87cb16 !important;
}
.display-flex {
  display: flex;
  align-items: center;
}
</style>

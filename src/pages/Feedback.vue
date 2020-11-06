<template>
  <div class="content">
    <div class="row">
      <div class="col-md-12">
        <div class="row">
          <div class="col-md-1"></div>
          <div class="col-md-10">
            <div class="card" v-if="list">
              <div class="card-header">
                <span class="font-weight-bold">Danh sách câu hỏi</span>
              </div>
              <div class="card-body">
                <div class="scroll">
                  <table class="table table-hover table-bordered">
                    <thead>
                      <tr>
                        <th scope="col">#</th>

                        <th scope="col">Người gửi</th>
                        <th scope="col">Tiêu đề</th>
                        <th scope="col">Thời gian</th>
                        <th scope="col" class="text-center">Hành động</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr v-for="(item, index) in listQuestions" :key="index">
                        <th scope="row">{{ index + 1 }}</th>
                        <td
                          v-on:click="
                            getQuestion(
                              item._id,
                              item.title,
                              item.content,
                              item.uid.email,
                              item.uid.avatar,
                              item.uid.display_name,
                              item.image
                            )
                          "
                          style="cursor: pointer"
                        >
                          {{ item.uid.email }}
                        </td>
                        <td
                          v-on:click="
                            getQuestion(
                              item._id,
                              item.title,
                              item.content,
                              item.uid.email,
                              item.uid.avatar,
                              item.uid.display_name,
                              item.image
                            )
                          "
                          style="cursor: pointer"
                        >
                          {{ item.title }}
                        </td>
                        <td>{{ formatDate(item.updated_at) }}</td>
                        <th scope="row" class="text-center">
                          <button class="btn btn-danger">
                            <i class="fas fa-trash-alt"></i>
                          </button>
                        </th>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
              <div class="card-footer"></div>
            </div>
            <div class="card" v-if="isReply">
              <div class="card-header">
                <span class="font-weight-bold">
                  <img
                    :src="$urlSever + '/' + user.avatar"
                    alt=""
                    class="avatar"
                  />
                  <span style="margin-left: 15px"
                    ><strong>{{ user.display_name }}</strong></span
                  >
                  <small>&lt;{{ user.email }}&gt;</small>
                </span>
              </div>
              <div class="card-body">
                <div class="row">
                  <div class="col-md-12">
                    <h3>{{ title }}</h3>
                    <p>{{ content }}</p>
                    <div class="row">
                      <div class="col-md-4" v-for="item in image" :key="item">
                        <img class="qs-img" :src="item" alt="" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="card-footer">
                <div class="display-flex space-between">
                  <button class="btn btn-success" @click="back">
                    <i class="fas fa-arrow-circle-left"></i> Danh sách
                  </button>
                  <button class="btn btn-success" @click="reply">
                    <i class="fas fa-comment-dots"></i> Trả lời
                  </button>
                </div>
              </div>
            </div>
            <div class="card" v-if="isSend">
              <div class="card-header">
                <span class="font-weight-bold">Phản hồi</span>
              </div>
              <div class="card-body">
                <form action="">
                  <div class="row">
                    <div class="col-md-12">
                      <div class="form-group">
                        <label for="">Tiêu đề</label>
                        <input
                          type="text"
                          class="form-control"
                          placeholder="Tiêu đề"
                          v-model="titleREP"
                        />
                      </div>
                    </div>
                  </div>
                  <div class="row">
                    <div class="col-md-12">
                      <div class="form-group">
                        <label for="">Nội dung</label>
                        <textarea
                          class="form-control"
                          placeholder="Nhập nội dung phản hồi"
                          rows="4"
                          v-model="contentREP"
                        ></textarea>
                      </div>
                    </div>
                  </div>
                  <div class="row">
                    <div class="col-md-12">
                      <p class="text-danger" v-for="item in errors" :key="item">
                        {{ item }}
                      </p>
                    </div>
                  </div>
                </form>
              </div>
              <div class="card-footer">
                <div class="display-flex space-between">
                  <button class="btn btn-success" @click="backQS">
                    <i class="fas fa-arrow-circle-left"></i> Câu hỏi
                  </button>
                  <button class="btn btn-success" @click="send">
                    <i class="fas fa-paper-plane"></i>
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div class="col-md-1"></div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import "../assets/css/feedback.css";
export default {
  data() {
    return {
      listQuestions: [],
      info: [],
      id: null,
      isReply: false,
      list: true,
      isSend: false,
      title: null,
      content: null,
      titleREP: null,
      contentREP: null,
      errors: [],
      image: [],
      user: {
        avatar: null,
        email: null,
        display_name: null,
      },
    };
  },
  beforeMount() {
    this.CallAPI("get", this.$urlAPI + "faq/feedback-admin", {}, (data) => {
      this.listQuestions = data.data.docs;
    });
  },
  methods: {
    formatDate(time) {
      return new Date(time).toLocaleDateString();
    },
    getQuestion(id, title, content, email, avatar, display_name, image) {
      this.id = id;
      this.title = title;
      this.content = content;
      this.user.email = email;
      this.user.avatar = avatar;
      this.user.display_name = display_name;
      this.image = image;
      this.isSend = false;
      this.list = false;
      this.isReply = true;
    },
    reply() {
      this.isSend = true;
      this.list = false;
      this.isReply = false;
    },
    back() {
      this.isSend = false;
      this.list = true;
      this.isReply = false;
    },
    backQS() {
      this.isSend = false;
      this.list = false;
      this.isReply = true;
    },

    send(e) {
      this.errors = [];
      e.preventDefault();
      if (!this.titleREP || !this.contentREP) {
        this.errors.push("Vui lòng nhập đầy đủ thông tin !");
        return;
      }
      this.CallAPI(
        "post",
        this.$urlAPI + "faq/feedback-admin-reply",
        {
          feedback_id: this.id,
          content: `<h3>${this.titleREP}</h3><p>${this.contentREP}</p>`,
        },
        (data) => {
          this.$toast.success("Phản hồi thành công !");
          this.titleREP = null;
          this.contentREP = null;
          this.back();
        }
      );
    },
  },
};
</script>
<style>
.qs-img {
  width: 100%;
  height: auto;
}
</style>
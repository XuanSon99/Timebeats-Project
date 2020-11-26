<template>
  <div class="content display-flex">
    <div class="container-fluid">
      <div class="row">
        <div class="col-md-1"></div>
        <div class="col-md-10">
          <div class="card">
            <div class="card-header font-weight-bold">
              Chính sách của Timebeat
            </div>
            <div class="card-body">
              <ckeditor
                :editor="editor"
                v-model="editorData"
                :config="editorConfig"
              ></ckeditor>
            </div>
            <div class="card-footer text-right">
              <button class="btn btn-success" type="button" @click="send">
                Gửi <i class="fas fa-paper-plane"></i>
              </button>
            </div>
          </div>
        </div>
        <div class="col-md-1"></div>
      </div>
    </div>
  </div>
</template>

<script>
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";
export default {
  data() {
    return {
      errors: [],
      editor: ClassicEditor,
      editorData: "<h1>Tạo chính sách....</h1>",
      editorConfig: {
        // The configuration of the editor.
      },
    };
  },
  methods: {
    send() {
      this.errors = [];
      if (!this.editor) {
        this.errors.push("Vui lòng nhập đầy đủ thông tin !");
        return;
      }
    },
  },
};
</script>

<style>
.ck-blurred.ck.ck-content.ck-editor__editable.ck-rounded-corners.ck-editor__editable_inline {
  height: 400px;
}
.ck.ck-content.ck-editor__editable.ck-rounded-corners.ck-editor__editable_inline.ck-focused {
  height: 400px;
}
</style>
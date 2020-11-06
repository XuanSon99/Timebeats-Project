<template>
  <div class="content">
    <div class="row">
      <div class="col-md-1"></div>
      <div class="col-md-10">
        <h1 class="text-info">Giới thiệu về Timebeat</h1>
      </div>
      <div class="col-md-1"></div>
    </div>
    <div class="row">
      <div class="col-md-1"></div>
      <div class="col-md-10">
        <ckeditor
          :editor="editor"
          v-model="editorData"
          :config="editorConfig"
        ></ckeditor>
        <div class="send text-right" style="margin-top: 20px">
          <button class="btn btn-success" type="button" @click="send">
            <i class="fas fa-paper-plane"></i>
          </button>
        </div>
      </div>
      <div class="col-md-1"></div>
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
      editorData: "<h1>Viết giới thiệu....</h1>",
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
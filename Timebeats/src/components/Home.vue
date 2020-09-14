<template>
  <div class="home">
    <vue-headful title="Trang chủ" />
    <h4>User: {{user}}</h4>
    <button @click="logOut" class="btn btn-success">Log Out</button>
  </div>
</template>

<script>
export default {
  name: "home",
  data() {
    return {
      user: localStorage.getItem("LoggedUser"),
    };
  },
  methods: {
    logOut() {
      localStorage.removeItem("LoggedUser");
      this.$router.push({ name: "Login" }).catch((error) => {});
    },
  },
};
</script>

<style>
</style>
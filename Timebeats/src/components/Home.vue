<template>
  <div class="home">
    <Header></Header>
    <vue-headful title="Trang chủ" />
    <h4>User: {{user}}</h4>
    <button @click="logOut" class="btn btn-success">Log Out</button>
  </div>
</template>

<script>
import Header from './Header'
export default {
  name: "home",
  data() {
    return {
      user: localStorage.getItem("LoggedUser"),
    };
  },
  components: {
    Header
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
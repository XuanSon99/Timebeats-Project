import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)
const state = { token: null }
const store = new Vuex.Store({
  state,
  mutations: {
    increment (state) {
      state.token = response.token
    }
  }
})
export default store
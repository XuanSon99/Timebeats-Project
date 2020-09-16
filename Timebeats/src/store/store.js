import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    name: "Nguyễn Xuân Sơn",
  },
  getters: {
    name(state) {
      return state.name
    }
  },
  mutations: {
    SET_NAME(state, payload) {
      state.name = payload
    }
  },
  actions: {
    setName({ commit }, payload) {
      commit('SET_NAME', payload)
    }
  }
})
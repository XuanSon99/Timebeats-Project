import Vue from 'vue'
import Vuex from 'vuex'
import createPersistedState from 'vuex-persistedstate'
import * as Cookies from 'js-cookie'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    token: null,
    id: null,
  },
  getters: {
    token(state) {
      return state.token
    },
    id(state) {
      return state.id
    },
  },
  mutations: {
    SET_TOKEN(state, payload) {
      state.token = payload
    },
    SET_ID(state, payload) {
      state.id = payload
    },
  },
  actions: {
    setToken({ commit }, payload) {
      commit('SET_TOKEN', payload)
    },
    setID({ commit }, payload) {
      commit('SET_ID', payload)
    },
  },
  plugins: [
    createPersistedState({
      GET_NAMES: (name) => Cookies.getJSON(name),
      SET_NAMES: (name, state) => Cookies.set(name, state, { expires: 3, secure: true })
    })
  ]
})

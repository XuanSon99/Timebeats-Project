import Vue from 'vue'
import Vuex from 'vuex'
import createPersistedState from 'vuex-persistedstate'
import * as Cookies from 'js-cookie'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    name: null,
    token: ""
  },
  getters: {
    name(state) {
      return state.name
    },
    token(state) {
      return state.token
    }
  },
  mutations: {
    SET_NAME(state, payload) {
      state.name = payload
    },
    SET_TOKEN(state, payload) {
      state.token = payload
    }
  },
  actions: {
    setName({ commit }, payload) {
      console.log({ payload })
      commit('SET_NAME', payload)
    },
    setToken({ commit }, payload) {
      console.log({ payload })
      commit('SET_TOKEN', payload)
    }
  },
  plugins: [
    createPersistedState({
      GET_NAMES: (name) => Cookies.getJSON(name),
      SET_NAMES: (name, state) => Cookies.set(name, state, { expires: 3, secure: true })
    })
  ]
})
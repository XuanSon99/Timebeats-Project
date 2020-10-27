import Vue from 'vue'
import Vuex from 'vuex'
import createPersistedState from 'vuex-persistedstate'
import * as Cookies from 'js-cookie'
import { setStore, getStore } from '@/config/utils'
Vue.use(Vuex)
const user = getStore('user')

export default new Vuex.Store({
  state: {
    token: null,
    id: null,
    name: null,
    avatar: null,
    loginUser: user,
    idNotify: null,
    type_key: null,
  },
  getters: {
    token(state) {
      return state.token
    },
    id(state) {
      return state.id
    },
    name(state) {
      return state.name
    },
    avatar(state) {
      return state.avatar
    },
    getLoginUserInfo(state) {
      return state.loginUser
    },
    idNotify(state){
      return state.idNotify
    },
    type_key(state){
      return state.type_key
    }
  },
  mutations: {
    SET_TOKEN(state, payload) {
      state.token = payload
    },
    SET_ID(state, payload) {
      state.id = payload
    },
    SET_NAME(state, payload) {
      state.name = payload
    },
    SET_AVATAR(state, payload) {
      state.avatar = payload
    },
    setLoginUser(state, user) {
      state.loginUser = user
      setStore('user', user)
    },
    SET_ID_NOTIFY(state, payload){
      state.idNotify = payload
    },
    SET_TYPE_KEY(state, payload){
      state.type_key = payload
    }
  },
  actions: {
    setToken({ commit }, payload) {
      commit('SET_TOKEN', payload)
    },
    setID({ commit }, payload) {
      commit('SET_ID', payload)
    },
    setName({ commit }, payload) {
      commit('SET_NAME', payload)
    },
    setAvatar({ commit }, payload) {
      commit('SET_AVATAR', payload)
    },
    setIdNotify({ commit }, payload) {
      commit('SET_ID_NOTIFY', payload)
    },
    setTypeKey({ commit }, payload) {
      commit('SET_TYPE_KEY', payload)
    },
  },
  plugins: [
    createPersistedState({
      GET_NAMES: (name) => Cookies.getJSON(name),
      SET_NAMES: (name, state) => Cookies.set(name, state, { expires: 3, secure: true })
    })
  ]
})

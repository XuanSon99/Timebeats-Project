// import Vue from 'vue'
// import Vuex from 'vuex'

// Vue.use(Vuex)

// export default new Vuex.Store({
//   state: {
//     name: "Nguyễn Xuân Sơn",
//   },
//   getters: {
//     name(state) {
//       return state.name
//     }
//   },
//   mutations: {
//     SET_NAME(state, payload) {
//       state.name = payload
//     }
//   },
//   actions: {
//     setName({ commit }, payload) {
//       commit('SET_NAME', payload)
//     }
//   }
// })
import Vue from 'vue'
import Vuex from 'vuex'
import createPersistedState from 'vuex-persistedstate'
import * as Cookies from 'js-cookie'
<<<<<<< HEAD

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
=======
Vue.use(Vuex)
const state = { token: null }
const store = new Vuex.Store({
  state,
  mutations: {
    LOGIN_SUCCESS(state, response) {
      state.token = response.data.data[0].access_token
    }
  },
  plugins: [
    createPersistedState({
      getState: (key) => Cookies.getJSON(key),
      setState: (key, state) => Cookies.set(key, state, { expires: 3, secure: true })
    })
  ]
})
export default store
>>>>>>> 2a21197f9edb4e05b7ce05ede3abddbc5ad85a93

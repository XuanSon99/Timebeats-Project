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

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    name: null,
    token: "",
    id: ""
  },
  getters: {
    name(state) {
      return state.name
    },
    token(state) {
      return state.token
    },
    id(state) {
      return state.id
    }
  },
  mutations: {
    SET_NAME(state, payload) {
      state.name = payload
    },
    SET_TOKEN(state, payload) {
      state.token = payload
    },
    SET_ID(state, payload) {
      state.id = payload
    }
  },
  actions: {
    setName({ commit }, payload) {
      commit('SET_NAME', payload)
    },
    setToken({ commit }, payload) {
      commit('SET_TOKEN', payload)
    },
    setID({ commit }, payload) {
      commit('SET_ID', payload)
    }
  },
  plugins: [
    createPersistedState({
      GET_NAMES: (name) => Cookies.getJSON(name),
      SET_NAMES: (name, state) => Cookies.set(name, state, { expires: 3, secure: true })
    })
  ]
})

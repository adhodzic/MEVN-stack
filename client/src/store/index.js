import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);



export default new Vuex.Store({
  state: {
    user: JSON.parse(localStorage.getItem("user")) || null,
    token: localStorage.getItem("token") || null,
    roles: []
  },
  getters:{
    getUser(state){
      return state.user
    },
    getToken(state){
      return state.token
    }
  },
  mutations: {
    setUser(state, user){
      state.user = user;
    },
    setToken(state, token){
      state.token = token;
    },
    setRoles(state, roles){
      state.roles = roles
    },
    resetToken(state){
      state.user = null;
      state.token = null;
    }
  },
  actions: {},
  modules: {},
});

import Vue from "vue";
import Vuex from "vuex";
import VueRouter from "vue-router";

Vue.use(Vuex);
Vue.use(VueRouter);

export const store = new Vuex.Store({
  state: {
    flavor: ""
  },
  mutations: {
    change(state, flavor) {
      state.flavor = flavor;
    }
  },
  getters: {
    flavor: state => state.flavor
  }
});

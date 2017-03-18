import Vue from 'vue';
import Vuex from 'vuex';

import * as getters from './getters';
import * as mutations from './mutations';
import * as actions from './actions';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    booksList: null,
    loading: false,
    pricesSum: 0,
    buyPopUp: false
  },

  mutations,
  getters,
  actions
});

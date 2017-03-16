import Vue from 'vue';
import Vuex from 'vuex';

import books from './books';
import * as getters from './getters';
import * as mutations from './mutations';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    booksList: books,
    loading: false
  },

  mutations,
  getters
});

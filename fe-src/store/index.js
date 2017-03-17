import Vue from 'vue';
import Vuex from 'vuex';

import books from './books';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    booksList: books,
    loading: true
  },

  mutations: {
    ADD_TO_MY(state) {
      state.booksList.find(book => book.id === +state.route.params.id).added = true;
    },
    REMOVE_FROM_MY(state) {
      state.booksList.find(book => book.id === +state.route.params.id).added = false;
    },

    BUY(state) {
      state.booksList.forEach((book) => {
        book.added = false;
      });
    },
    TOGGLE_LOADER(state) {
      state.loading = !state.loading;
    }
  },

  getters: {
    getBookById: state => state.booksList.find(book => book.id === +state.route.params.id),

    getBooks: state => (type) => {
      if (type === 'user') {
        return state.booksList.filter(book => book.added === true);
      }
      return state.booksList;
    },

    getAddedBooksQuantity: state => state.booksList.filter(book => book.added === true).length,

    getPrice: state => state.booksList.reduce((sum, book) => {
      if (book.added) {
        sum += book.price;
      }

      return sum;
    }, 0)
  }
});

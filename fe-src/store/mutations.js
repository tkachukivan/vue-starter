export const TOGGLE_BOOK_TO_MY = (state) => {
  state.booksList.forEach((book) => {
    if (book.id === +state.route.params.id) {
      book.added = !book.added;
    }
  });
};

export const BOUGHT = (state) => {
  state.booksList.forEach((book) => {
    book.added = false;
  });
};

export const LOAD_BOOKS = (state, payload) => {
  state.booksList = payload;
};

export const COUNT_PRICES_SUM = (state) => {
  state.pricesSum = state.booksList.reduce((sum, book) => {
    if (book.added) {
      sum += book.price;
    }

    return sum;
  }, 0);
};

export const SET_PRICES_SUM = (state, payload) => {
  if (state.pricesSum !== payload) {
    state.pricesSum = payload;
  }
};

export const RESET_PRICES_SUM = (state) => {
  state.pricesSum = 0;
};

export const TOGGLE_LOADER = (state) => {
  state.loading = !state.loading;
};

export const TOGGLE_BUY_POPUP = (state) => {
  state.buyPopUp = !state.buyPopUp;
};

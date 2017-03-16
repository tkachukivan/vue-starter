export const ADD_TO_MY = (state) => {
  state.booksList.find(book => book.id === +state.route.params.id).added = true;
};

export const REMOVE_FROM_MY = (state) => {
  state.booksList.find(book => book.id === +state.route.params.id).added = false;
};

export const BUY = (state) => {
  state.booksList.forEach((book) => {
    book.added = false;
  });
};

export const TOGGLE_LOADER = (state) => {
  state.loading = !state.loading;
};

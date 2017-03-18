export const getBookById = (state) => {
  if (state.booksList) {
    return state.booksList.find(book => book.id === +state.route.params.id);
  }
  return {};
};

export const getBooks = (state) => {
  if (state.route.path === '/books' && state.booksList) {
    return state.booksList.filter(book => book.added === true);
  }
  return state.booksList;
};

export const getAddedBooksQuantity = (state) => {
  if (!state.booksList) {
    return 0;
  }
  return state.booksList.filter(book => book.added === true).length;
};

export const getPriceSum = state => state.pricesSum;

export const getBuyPopUpStatus = state => state.buyPopUp;

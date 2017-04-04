export const getBooks = (state) => {
  if (state.route.path === '/books' && state.booksList) {
    return state.booksList.filter(book => book.added === true);
  }
  return state.booksList;
};

export const getAddedBooksQuantity = state => state.addedBooks;

export const getPriceSum = state => state.pricesSum;


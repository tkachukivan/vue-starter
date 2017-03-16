export const getBookById = state => state.booksList.find(book => book.id === +state.route.params.id);

export const getBooks = (state) => {
  if (state.route.path === '/books') {
    return state.booksList.filter(book => book.added === true);
  }
  return state.booksList;
};

export const getAddedBooksQuantity = state => state.booksList.filter(book => book.added === true).length;

export const getPrice = state => state.booksList.reduce((sum, book) => {
  if (book.added) {
    sum += book.price;
  }

  return sum;
}, 0);

const { books } = require('./../model/books');

const updateBook = (req, res) => {
  const bookId = +req.params.id;
  const bookById = books.find(book => book.id === bookId);

  console.log(`put to book with id ${bookId} and change added to ${!bookById.added}`);

  bookById.added = !bookById.added;

  res.send();
};

const getBook = (req, res) => {
  const bookId = +req.params.id;
  const bookById = books.find(book => book.id === bookId);

  if (!bookById) {
    res.send('not found');
    return;
  }
  res.send(bookById);
};

exports.updateBook = updateBook;
exports.getBook = getBook;

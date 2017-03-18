const { books } = require('./../model/books');

const updateBook = (req, res) => {
  const bookId = req.params.id;
  const bookById = books.find(book => book.id === bookId);

  bookById.added = !bookById.added;
  const type = bookById.added ? 'add' : 'remove';

  console.log(`put to book with id ${bookId} with type ${type}`);

  res.send({
    type
  });
};

const getBook = (req, res) => {
  const bookId = req.params.id;
  const bookById = books.find(book => book.id === bookId);
  const addedBooks = books.filter(book => book.added === true).length;

  console.log(`get book by id ${bookId}`);

  if (!bookById) {
    console.log(`can\`t find book with id ${bookId}`);
    res.send({
      addedBooks,
      not_found: true
    });
    return;
  }
  res.send({
    bookById,
    addedBooks
  });
};

exports.updateBook = updateBook;
exports.getBook = getBook;

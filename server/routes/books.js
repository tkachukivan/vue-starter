const { books } = require('./../model/books');

const getBooks = (req, res) => {
  const addedBooks = books.filter(book => book.added === true).length;
  const booksArray = [];

  books.forEach((book) => {
    booksArray.push({
      id: book.id,
      author: book.author,
      name: book.name,
      added: book.added,
      price: book.price
    });
  });
  console.log('get to books');

  res.send({
    booksArray,
    addedBooks
  });
};

exports.getBooks = getBooks;

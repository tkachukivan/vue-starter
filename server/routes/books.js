const { books } = require('./../model/books');

const getBooks = (req, res) => {
  console.log('get to books');

  res.send(books);
};

exports.getBooks = getBooks;

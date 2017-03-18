const { books } = require('./../model/books');

const buy = (req, res) => {
  const pricesSum = books.reduce((sum, book) => {
    if (book.added) {
      sum += book.price;
      book.added = false;
    }

    return sum;
  }, 0);

  console.log(`buy request on sum ${pricesSum}`);

  res.send({
    pricesSum
  });
};

exports.buy = buy;

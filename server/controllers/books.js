const Book = require('../model/BookModel');

const getBooks = (req, res) => {
    Book.find()
        .then((books) => {
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

            res.send({
                booksArray,
                addedBooks
            });
        })
        .catch((error) => {
            res.send(error);
            console.error(error);
        });
};

exports.getBooks = getBooks;

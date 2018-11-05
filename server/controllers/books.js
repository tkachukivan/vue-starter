const Book = require('../model/BookModel');

const getBooks = async (req, res) => {
    try {
        const books = await Book.find();
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
    } catch (error) {
        console.error(error);
        res.send(error);
    }
};

const getBookById = async (req, res) => {
    try {
        const books = await Book.find();
        const addedBooks = books.filter(book => book.added === true).length;
        const bookById = await Book.findOne({ _id: req.params.id });

        res.send({
            bookById,
            addedBooks
        });
    } catch (err) {
        console.error(err);

        res.send({
            not_found: true,
            err
        });
    }
};

const updateBookById = async (req, res) => {
    try {
        const book = await Book.findOne({ _id: req.params.id });

        book.added = req.body.added;

        await book.save();

        res.send();
    } catch (err) {
        console.error(err);
        res.send(err);
    }
};

exports.getBooks = getBooks;
exports.getBookById = getBookById;
exports.updateBookById = updateBookById;

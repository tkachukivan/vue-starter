const Book = require('../model/BookModel');

const updateBook = async (req, res) => {
    try {
        const book = await Book.findOne({ _id: req.params.id });
        book.added = !book.added;
        const type = book.added ? 'add' : 'remove';

        await book.save();

        res.send({
            type
        });
    } catch (err) {
        console.error(err);
        res.send(err);
    }
};

const getBook = async (req, res) => {
    let addedBooks = 0;
    try {
        const books = await Book.find();
        addedBooks = books.filter(book => book.added === true).length;
        const bookById = await Book.findOne({ _id: req.params.id });

        res.send({
            bookById,
            addedBooks
        });
    } catch (err) {
        console.error(`can\`t find book with id ${req.params.id}`);
        console.error(err);

        res.send({
            addedBooks,
            not_found: true,
            err
        });
    }
};

exports.updateBook = updateBook;
exports.getBook = getBook;

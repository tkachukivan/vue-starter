const Book = require('../model/BookModel');

const getBooks = async (req, res) => {
    try {
        const books = await Book.find().select('id author name added price');
        const addedBooks = books.filter(book => book.added === true).length;

        res.send({
            books,
            addedBooks,
        });
    } catch (error) {
        console.error(error);
        res.send(error);
    }
};

const getBookById = async (req, res) => {
    try {
        const addedBooks = await Book.find({ added: true })
                                    .count();

        const book = await Book.findOne({ _id: req.params.id });

        res.send({
            book,
            addedBooks,
        });
    } catch (err) {
        console.error(err);

        res.send({
            not_found: true,
            err,
        });
    }
};

const updateBookById = async (req, res) => {
    try {
        const book = await Book.findOne({ _id: req.params.id });

        book.added = req.body.added;

        await book.save();

        res.send(book);
    } catch (err) {
        console.error(err);
        res.send(err);
    }
};

exports.getBooks = getBooks;
exports.getBookById = getBookById;
exports.updateBookById = updateBookById;

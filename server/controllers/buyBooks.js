const Book = require('../model/BookModel');

const buyBooks = async (req, res) => {
    try {
        const books = await Book.find();
        let pricesSum = 0;

        books.forEach(async (book) => {
            if (book.added) {
                pricesSum += book.price;
                book.added = false;
                await book.save();
            }
        });

        res.send({
            pricesSum
        });
    } catch (error) {
        console.error(error);
        res.send(error);
    }
};

exports.buyBooks = buyBooks;

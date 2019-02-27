const Book = require('../model/BookModel');

const buyBooks = async (req, res) => {
    try {
        const books = await Book.find({ added: true });
        let pricesSum = 0;

        const booksUpdateRequests = books.map(async (book) => {
            pricesSum += book.price;
            book.added = false;
            return book.save();
        });

        await Promise.all(booksUpdateRequests);

        res.send({
            pricesSum
        });
    } catch (error) {
        console.error(error);
        res.send(error);
    }
};

exports.buyBooks = buyBooks;

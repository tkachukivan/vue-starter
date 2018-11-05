const express = require('express');

const { getBooks, updateBookById, getBookById } = require('../controllers/books');
const { buyBooks } = require('../controllers/buyBooks');

const router = express.Router();

router.get('/api/books', getBooks);
router.put('/api/books/:id', updateBookById);
router.get('/api/books/:id', getBookById);
router.post('/api/buy-books', buyBooks);

router.get('/server/status', (req, res) => {
    res.send({
        message: 'ok',
        time: new Date().getTime()
    });
});

module.exports = router;
const express = require('express');

const { getBooks } = require('../controllers/books');
const { updateBook, getBook } = require('../controllers/book');
const { buy } = require('../controllers/buy');

const router = express.Router();

router.get('/api/books', getBooks);
router.put('/api/book/:id', updateBook);
router.get('/api/book/:id', getBook);
router.post('/api/buy', buy);

router.get('/server/status', (req, res) => {
    res.send({
        message: 'ok',
        time: new Date().getTime()
    });
});

module.exports = router;
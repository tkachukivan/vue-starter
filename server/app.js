const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');

// routes

const { getBooks } = require('./routes/books');
const { updateBook, getBook } = require('./routes/book');
const { buy } = require('./routes/buy');

const app = express();

app.use(bodyParser.json());


app.get('/api/books', getBooks);
app.put('/api/book/:id', updateBook);
app.get('/api/book/:id', getBook);
app.post('/api/buy', buy);

app.use('/', express.static(path.join(__dirname, './../dist')));

exports.app = app;

const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const history = require('connect-history-api-fallback');

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


app.use(history({
  verbose: true,
  disableDotRule: true,
  rewrites: [
    {
      from: /style.css/,
      to: '/style.css'
    },
    {
      from: /build.js/,
      to: '/build.js'
    }
  ]
}));

app.use('/', express.static(path.join(__dirname, './../dist')));

exports.app = app;

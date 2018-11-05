const express = require('express');
const logger = require('morgan');
const bodyParser = require('body-parser');
const path = require('path');

const { connectDB } = require('./model');
const routes = require('./routes');

const app = express();
// connect mongoDb
connectDB();

app.use(logger('dev'));

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// return always index.html for front-end router
app.use('/', express.static(path.join(__dirname, './../public')));
app.use('/', routes);

// let frontend router deal with 404 errors
app.get('/*', (req, res) => {
    res.sendFile(path.join(__dirname, './../public/index.html'));
});

/* app.use(function (req, res, next) {
    var err = new Error('Not Found');
    err.status = 404;
    next(err);
}); */

// error handler
app.use((err, req, res) => {
    // set locals, only providing error in development
    res.locals.message = err.message;
    res.locals.error = req.app.get('env') === 'development' ? err : {};

    // render the error page
    console.log(err);

    res.status(err.status || 500);
    res.json({
        error: err.message
    });
});

module.exports = app;
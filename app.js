const express = require('express');
const app = express();
var path = require('path');
var appRoutes = require('./server/routes/app');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');

// view engine setup -- res.render('index'); --> server/views/index.hbs
app.set('views', path.join(__dirname, 'server', 'views'));
app.set('view engine', 'hbs');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));
app.use(cookieParser());
//express.static to serve static files, such as images, CSS, JavaScript, etc.
app.use(express.static(path.join(__dirname, 'public')));

app.use(function (req, res, next) {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
    res.setHeader('Access-Control-Allow-Methods', 'POST, GET, PATCH, DELETE, OPTIONS');
    next();
});

app.use('/', appRoutes);
/*
app.get('/', function (req, res) {
  res.send('Hello World!!')
})
*/

// catch 404 and forward to error handler
app.use(function (req, res, next) {
    return res.render('index');
});


module.exports = app;

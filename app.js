const express = require('express');
const app = express();
var path = require('path');
var appRoutes = require('./server/routes/app');

// view engine setup
app.set('views', path.join(__dirname, 'server', 'views'));
app.set('view engine', 'hbs');


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

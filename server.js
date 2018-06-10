/*var express = require('express');
var bodyPasser = require('body-parser');
var path = require('path');
var http = require('http');
var app  = express();

//var api = require('./server/api');

app.use(bodyPasser.json());
app.use(bodyPasser.urlencoded({extend: false}));

app.use(express.static(path.join(__dirname, 'dist')));
app.use('/');

app.get('*'), (res,req) =>{
  res.sendFile(path.join(__dirname, 'dist/index.html'));

}*/

var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var bodyParser = require('body-parser');

var api = require('./routes/api');
var app = express();

app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({'extended':'false'}));
app.use(express.static(path.join(__dirname, 'dist')));
app.use('/', express.static(path.join(__dirname, 'dist')));
app.use('/api', api);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var mongoose=require('mongoose');
mongoose.connect('mongodb+srv://usuario1:4asmvGyl0Kq1U5c5@cluster0-pxn5q.mongodb.net/jugueteria?retryWrites=true&w=majority',{useNewUrlParser:true}).then(
	()=>{
		console.log('Conectado');
	}
	);

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var inicioRouter=require('./routes/inicio');
var deleteRouter=require('./models/juguetes');
var app = express();

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'hbs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/inicio',inicioRouter);
app.use('/jug',deleteRouter);

app.use(function(req, res, next) {
  next(createError(404));
});

app.use(function(err, req, res, next) {
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;

var express = require('express');
var path = require('path');
var bodyParser = require('body-parser');
var logger = require('morgan');
var mongoose = require('mongoose');
var app = express();
var students = require('./routes/students');
var db = mongoose.connect('mongodb://localhost:27017/love');

app.set('port', process.env.PORT || 3000);

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: 'false'}));

app.use('/', students);

app.use(function(req, res, next){
	var err = new Error('Not Found');
 	err.status = 404;
  	next(err);
});

app.use(function(err, req, res, next){
	res.status(err.status || 500);
	res.render('error', {error: err});
});

app.listen(app.get('port'), function(){
	console.log("Listening on port: ", app.get('port'));
});
// server.js

// require express and other modules
var express = require('express'),
	app = express(),
	bodyParser = require('body-parser'),
	mongoose = require('mongoose');

// configure body-parser
app.use(bodyParser.urlencoded({extended: true}));

// connect to mongodb
mongoose.connect(
  process.env.MONGOLAB_URI ||
  process.env.MONGOHQ_URL ||
  'mongodb://localhost/rodneyturner'
);

// set the static files location 
app.use(express.static(__dirname + '/public')); 

// load our public/index.html file
app.get('*', function(req, res) {
    res.sendFile(__dirname + '/public/views/index.html'); 
});

// listen on port 3000
app.listen(process.env.PORT || 3000, function () {
	console.log('happy ending only happens on localhost:3000');
});

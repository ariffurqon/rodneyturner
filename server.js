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

// Processes the form submission.
app.post('/send', function (req, res) {
  // Here is an example of how we could send the form data by email
  var Email = require('emailjs/email');
  var server = Email.server.connect({
    host: 'localhost'
  });
  server.send({
    'text': body,
    'from': req.body.email,
    'to': arif.furqon@gmail.com,
    'reply-to': req.body.email,
    'subject': 'Tell us about your project: ' + req.body.company
  }, function(error) {
    if (error) {
      return res.send({status: 'KO'});
    } else {
      return res.send({status: 'OK'});
    }
  });


// set the static files location 
app.use(express.static(__dirname + '/public')); 

// load our public/index.html file
app.get('*', function(req, res) {
    res.sendFile(__dirname + '/index.html'); 
});

// listen on port 3000
app.listen(process.env.PORT || 3000, function () {
	console.log('happy ending only happens on localhost:3000');
});
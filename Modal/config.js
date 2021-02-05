var mongoose = require('mongoose');
var url = 'mongodb://127.0.0.1:27017/chimeraData';

// /mongoose.Promise = global.Promise;
mongoose.connect(url,{useNewUrlParser: true, useUnifiedTopology: true});

mongoose.connection.on('connected', function() {
  console.log('Mongoose connected to ' + url);
});
mongoose.connection.on('error', function(err) {
  console.log('Mongoose connection error: ' + err);
});
mongoose.connection.on('disconnected', function() {
  console.log('Mongoose disconnected');
});
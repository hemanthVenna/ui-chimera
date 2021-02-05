require('./Modal/config')
var express = require('express');
var routes = require("./Routes/index");
var bodyParser = require('body-parser');

// var connectDb = require("./Modal/index")
var app = express();

// body parser to get the values from form elements
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use(function (req, res, next) {
    var allowedOrigins = ['http://localhost:3001'];
    var origin = req.headers.origin;
    if (allowedOrigins.indexOf(origin) > -1) {
        res.setHeader('Access-Control-Allow-Origin', origin);
    }
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    res.header("Access-Control-Allow-Credentials", "true");
    next();
});

app.use("/", routes);


app.listen(3000, function () {
    console.log('Example app listening on port 3000!');
});


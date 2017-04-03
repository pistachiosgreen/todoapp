var express = require('express')
var app = express()
var mongoose = require('mongoose')
var morgan = require('morgan')
var bodyParser = require('body-parser')
var methodOverride = require('method-override');
mongoose.connect('mongodb://localhost/test')

app.use(express.static('./public'));
app.use(morgan('dev')); // log every request to the console
app.use(bodyParser.urlencoded({'extended':'true'}));            // parse application/x-www-form-urlencoded
app.use(bodyParser.json());                                     // parse application/json
app.use(bodyParser.json({ type: 'application/vnd.api+json' })); // parse application/vnd.api+json as json
app.use(methodOverride('X-HTTP-Method-Override')); // override with the X-HTTP-Method-Override header in the request

// routes ======================================================================
require('./app/routes.js')(app);


app.listen(8000);
console.log("App listening on port 8000");
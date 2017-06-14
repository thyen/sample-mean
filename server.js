var express = require('express');
var path = require('path');
var body_parser = require('body-parser');

var config = require('./config');

var index = require('./routes/index');
var api = require('./routes/api');

var app = express();

app.set('views', path.join(__dirname, 'views/main'));
app.set('view engine', 'ejs');
app.engine('html', require('ejs').renderFile);

app.use(express.static(path.join(__dirname, 'views')));
app.use(express.static(path.join(__dirname, 'views/main')));

app.use(body_parser.json());
app.use(body_parser.urlencoded({extended: false}));

app.use('/', index);
app.use('/api', api);

app.listen(config.port, result => console.log('Server is up!'));


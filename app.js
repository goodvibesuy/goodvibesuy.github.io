var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var mysql = require('mysql');
var compression = require('compression');
var cors = require('cors');

var routes = require('./routes/index');
var authenticate = require('./routes/authenticate');
var users = require('./routes/users');
var pointOfSail = require('./routes/pointOfSail');
var units = require('./routes/units');
var supplies = require('./routes/supplies');
var products = require('./routes/products');
var viewings = require('./routes/viewings');
var kpis = require('./routes/kpis');
var route = require('./routes/route');
var templateRoute = require('./routes/templateRoute');
var images = require('./routes/images');
var providers = require('./routes/providers');
var groupPos = require('./routes/groupPos');
var clients = require('./routes/clients');
var customers = require('./routes/customers');

var NewACL = require('./motionLibJS/serverSide/acl/newACL');
var masterDBController = require('./bd/masterConnectionsBD');

NewACL.setUp(masterDBController.getController().getMasterConnection().getConnection());

var app = express();

app.use(compression());
app.use(cors());

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');


app.use(express.static('./client/dist'));
app.use(express.static('./client/images'));


// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));
app.use(bodyParser.json({ limit: '3mb' }));
app.use(bodyParser.urlencoded({extended: false }));
app.use(cookieParser());

app.use(express.static(path.join(__dirname, 'public')));
app.use('/api', routes);
app.use('/api/authenticate',authenticate);
app.use('/api/users', users.routes());
app.use('/api/pointOfSail', pointOfSail);
app.use('/api/units', units);
app.use('/api/supplies', supplies.routes());
app.use('/api/products', products);
app.use('/api/viewings', viewings.routes());
app.use('/api/kpis', kpis);
app.use('/api/route', route);
app.use('/api/templateRoute', templateRoute);
app.use('/api/images', images);
app.use('/api/providers', providers.routes());
app.use('/api/groupPos', groupPos);
app.use('/api/clients', clients.routes());
app.use('/api/customers', customers.routes());

// catch 404 and forward to error handler
app.use(function(req, res, next) {
	var err = new Error('Not Found');
	err.status = 404;
	next(err);
});

// error handlers

// development error handler
// will print stacktrace
if (app.get('env') === 'development') {
	app.use(function(err, req, res, next) {
		res.status(err.status || 500);
		res.render('error', {
			message: err.message,
			error: err
		});
	});
}

// production error handler
// no stacktraces leaked to user
app.use(function(err, req, res, next) {
	res.status(err.status || 500);
	res.render('error', {
		message: err.message,
		error: {}
	});
});

module.exports = app;
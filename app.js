var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan'); // log every request to the console
var cookieParser = require('cookie-parser'); // read cookies (needed for auth)
var bodyParser = require('body-parser'); // get information from html forms

var cookieSession = require('cookie-session');



var app = express();


// set up our express application
app.use(logger('dev')); // log every request to the console
// uncomment after placing your favicon in /public


app.use(cookieParser('iHateSoftwareEngineering'));// read cookies (needed for auth)

app.use(cookieSession({
    name: 'session',
    keys: ['software', 'engineering'],
    signed: true,
    //secure :true,
    // Cookie Options
    maxAge: 60 * 1000 * 120// 120 minute
}));

app.use(favicon(path.join(__dirname, 'public', 'images', 'favicon.ico')));
// get information from html forms
//for post requests body
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true})); //false = simple   true for complex

// view engine setup
app.set('view engine', 'ejs'); // set up ejs for templating engine
app.set('views', path.join(__dirname, 'views'));

app.use(express.static(path.join(__dirname, 'public')));  //this is served as /stylesheets/style.stylesheets

app.disable('x-powered-by');



var auth = require("./middlewares/auth");
// controllers ======================================================================
var indexRouter = require('./controllers/index')(auth);
var loginRouter = require('./controllers/signIn')(auth);
var signUpRouter = require('./controllers/signUp')(auth);
var signOutRouter = require('./controllers/signOut')(auth);

app.use('/', indexRouter);
app.use('/signin', loginRouter);
app.use('/signup', signUpRouter);
app.use('/signout', signOutRouter);



// catch 404 and forward to error handler
app.use(function (req, res, next) {
    var err = new Error('Not Found');
    err.status = 404;
    next(err);
});

// error handler
app.use(function (err, req, res, next) {
    // set locals, only providing error in development
    res.locals.message = err.message;
    res.locals.error = req.app.get('env') === 'development' ? err : {};

    // render the error page
    res.status(err.status || 500);
    res.render('error');
});


module.exports = app;

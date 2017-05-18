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
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));

app.use(cookieParser('iHateSoftwareEngineering'));// read cookies (needed for auth)

app.use(cookieSession({
    name: 'session',
    keys: ['software', 'engineering'],
    signed: true,
    //secure :true,
    // Cookie Options
    maxAge: 60 * 1000 * 120// 120 minute
}));


// get information from html forms
//for post requests body
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true})); //false = simple   true for complex

// view engine setup
app.set('view engine', 'ejs'); // set up ejs for templating
app.set('views', path.join(__dirname, 'views'));

app.use(express.static(path.join(__dirname, 'public')));  //this is served as /stylesheets/style.css
app.disable('x-powered-by');


var auth = require("./middlewares/auth");
// routes ======================================================================

var indexRouter = require('./routes/index')();
var usersRouter = require('./routes/users')();

/*app.get('/', function (req, res, next) {
 // Update views
 req.session.views = (req.session.views || 0) + 1

 // Write response
 res.end(req.session.views + ' views')
 })*/

app.get('/login', function (req, res) {
    res.render('login', {siso: 'ddسيششسبضصبضصبضصd'});
});


app.post('/login', function (req, res) {
    console.log(req.body);
});


app.get('/', function (req, res) {
    if (req.session.remember3) {
        res.send(req.session.un + 'Remembered :). Click to <a href="/forget">forget</a>!.');
    } else {
        res.send('<form method="post"><p>Check to <label>'
            + '<input type="checkbox" name="remember2"/> remember me</label> '
            + '<input type="submit" value="Submit"/>'
            + '<input type="text" name="name" required/>'
            + '<input type="text" name="last" required/>.</p></form> '
        );
    }
});

app.get('/forget', function (req, res) {
    auth.delAuthSession(req);

    res.redirect('back');
});

app.post('/', function (req, res) {
    console.log(req.body.name);
    console.log(req.body.last);
    if (req.body.remember2) {
        req.session.remember3 = 1;
        req.session.un = 66;
        req.session.pw = 22;
    }
    res.redirect('back');
});


/*
 app.use('/', indexRouter);
 app.use('/users', usersRouter);
 */


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

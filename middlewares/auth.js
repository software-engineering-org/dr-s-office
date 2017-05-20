/**
 * Created by Mohammed Alaa Elkomy on 5/15/2017.
 */

// we will want this protected so you have to be logged in to visit
// we will use route middleware to verify this (the isLoggedIn function)


var login = require('../model/businessLayer').loginTry;
var encrypt = require('../helpers/helpers').encrypt;

function updateAuthSession(req, un, pw, accId, type) {
    req.session.un = un;
    req.session.pw = pw;
    req.session.accId = accId;
    req.session.type = type;
}

function delAuthSession(req) {
    req.session = null;
}

function isAuthenticated(un, pw, callback) {
    login(un, pw, callback);
}

// route middleware to make sure a user is logged in
function isLoggedIn(req, res, next) {
    var un = (req.session.un ? req.session.un : encrypt(req.body.username));
    var pw = (req.session.pw ? req.session.pw : encrypt(req.body.password));
    console.log(req.body.username,req.session.un ,un)
    console.log(req.body.password, req.session.pw  ,pw)
    if (req.session)
        isAuthenticated(un, pw, function (err, result) {
            if (err == null && result.rowsAffected[0]) {
                // if user is authenticated in the session, carry on
                updateAuthSession(req, un, pw, result.recordset[0].P_AccountID, result.recordset[0].A_AccountType);

                if (req.originalUrl == '/signin' || req.originalUrl == '/signup')  //no infinite redirection
                    res.redirect('/');

                else return next();
            } else {

                // if they aren't redirect them
                if (req.originalUrl == '/signin' || req.originalUrl == '/signup') //no infinite redirection
                    return next();

                else  res.redirect('/signin');

            }
        });
}


module.exports.delAuthSession = delAuthSession;
module.exports.isLoggedIn = isLoggedIn;
module.exports.updateAuthSession = updateAuthSession;

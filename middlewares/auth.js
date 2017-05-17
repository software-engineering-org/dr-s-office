/**
 * Created by Mohammed Alaa Elkomy on 5/15/2017.
 */
function newAuthSession(un,pw){


}

function delAuthSession(req){
    req.session = null;
}

function isAuthenticated(un,pw){


}

// route middleware to make sure a user is logged in
function isLoggedIn(req, res, next) {

    // if user is authenticated in the session, carry on
    if (isAuthenticated())
        return next();

    // if they aren't redirect them to the home page
    res.redirect('/');
}


module.exports.delAuthSession=delAuthSession;
module.exports.isLoggedIn=isLoggedIn;
module.exports.newAuthSession=newAuthSession;

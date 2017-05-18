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

arr = [1,2,3,4,56];

arr=arr.splice(1,arr.length);
console.log(arr)

arr=arr.splice(1,arr.length);
console.log(arr)

arr=arr.splice(1,arr.length);
console.log(arr)

arr=arr.splice(1,arr.length);
console.log(arr)

arr=arr.splice(1,arr.length);
if (arr.length == 0)
    console.log(arr);





module.exports.delAuthSession=delAuthSession;
module.exports.isLoggedIn=isLoggedIn;
module.exports.newAuthSession=newAuthSession;

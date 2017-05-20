/**
 * Created by Mohammed Alaa Elkomy on 5/18/2017.
 */
var express = require('express');
var router = express.Router();



//base directory '/signin'
function retRouter(auth){

    router.get('/',auth.isLoggedIn,function (req, res) {
       /*     res.send('<form method="post"><p>Check to <label>'
                + '<input type="checkbox" name="remember2"/> remember me</label> '
                + '<input type="submit" value="Submit"/>'
                + '<input type="text" name="username" autocomplete="off" required/>'
                + '<input type="text" name="password" autocomplete="off" required/>.</p></form> '
            );*/
        res.render('signIn')
    });

    router.post('/',auth.isLoggedIn, function (req, res) {
        res.redirect('/');
    });


    return router;
}

module.exports = retRouter;

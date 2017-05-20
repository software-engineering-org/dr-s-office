/**
 * Created by Mohammed Alaa Elkomy on 5/18/2017.
 */
var express = require('express');
var router = express.Router();

//base directory '/signup'
function retRouter(auth){

    router.get('/',auth.isLoggedIn,function (req, res) {
        res.render('signUp')
      /*  res.send('<form method="post"><p>Check to <label>'
            + '<input type="checkbox" name="remember2"/> remember me</label> '
            + '<input type="submit" value="Submit"/>'
            + '<input type="text" name="username" required/>'
            + '<input type="text" name="password" required/>.</p></form> '
        );*/
    });

    router.post('/',auth.isLoggedIn, function (req, res) {
        auth.updateAuthSession(req,'moh',12,464,64);

        res.redirect('/');
    });

    return router;
}

module.exports = retRouter;

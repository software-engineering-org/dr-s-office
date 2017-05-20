/**
 * Created by Mohammed Alaa Elkomy on 5/18/2017.
 */
var express = require('express');
var router = express.Router();

var username= "placeholder", password = "placeholder";

function res(){
    username="placeholder"; password = "placeholder";
}
//base directory '/signin'
function retRouter(auth) {

    auth.reset=res;

    router.get('/', auth.isLoggedIn, function (req, res) {
        /*     res.send('<form method="post"><p>Check to <label>'
         + '<input type="checkbox" name="remember2"/> remember me</label> '
         + '<input type="submit" value="Submit"/>'
         + '<input type="text" name="username" autocomplete="off" required/>'
         + '<input type="text" name="password" autocomplete="off" required/>.</p></form> '
         );*/

        res.render('signIn'
            ,
            {
                username: username,
                password : password
            }
        )
    });

    router.post('/', auth.isLoggedIn, function (req, res) {
        username=req.body.username;
        password=req.body.password;

        res.redirect('/'
        );
    });

    return router;
}

module.exports = retRouter;

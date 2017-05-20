/**
 * Created by Mohammed Alaa Elkomy on 5/8/2017.
 */

var express = require('express');
var router = express.Router();

//base directory '/'
function retRouter(auth) {
    //there are 4 views for authenticated users
    //associated with forms of requests
    //patients have 1 forms of GET and 1 form of POST
    //doctor has 2 forms of GET and 1 form of POST
    //receptionist has 1 form of GET

    router.get('/', auth.isLoggedIn,
        function (req, res) {
            res.render("recep");
           // res.send("hello"+ req.session.type);
        });


    router.post('/', auth.isLoggedIn,
        function (req, res) {
            res.send("hello");
        });

    return router;
}


module.exports = retRouter;

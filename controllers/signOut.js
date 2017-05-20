/**
 * Created by Mohammed Alaa Elkomy on 5/19/2017.
 */
var express = require('express');
var router = express.Router();

//base directory '/signout'
function retRouter(auth){

    router.all('/', function (req, res) {
        auth.delAuthSession(req);

        //res.redirect('back');
        res.redirect('/signin');
    });

    return router;
}

module.exports = retRouter;

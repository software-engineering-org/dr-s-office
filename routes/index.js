var express = require('express');
var router = express.Router();

/* GET home page. */
// directory  /
function retRouter(){
    router.get(function (req, res, next) {
        res.render('indexRouter',
            {
            title: 'Express2222',
            data: [

                {id: 1, name: "bob"},
                {id: 2, name: "john"},
                {id: 3, name: "jake"}
            ]
            }
        );
    });
    return router;
}

module.exports = retRouter;

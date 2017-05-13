var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function (req, res, next) {
    res.render('index',
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

module.exports = router;

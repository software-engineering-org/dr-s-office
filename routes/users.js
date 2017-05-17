var express = require('express');
var router = express.Router();

/* GET usersRouter listing. */
//directory /users

function retRouter(){
  //router.route(sub url)
    router.get('/', function(req, res, next) {
      res.json(
          [
        {id: 1, name: "bob"},
        {id: 2, name: "john"},
        {id: 3, name: "jake"}
        ]
    )
    });
  return router;
}
module.exports = retRouter;
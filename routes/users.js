var express = require('express');
var router = express.Router();

/* GET usersRouter listing. */
//directory /users

function retRouter(){
  //router.route(sub url)
    router.get('/', function(req, res, next) {
      res.send('respond with a resource');
    });
  return router;
}
module.exports = retRouter;
/**
 * Created by Mohammed Alaa Elkomy on 5/18/2017.
 */
var express = require('express');
var router = express.Router();
var registerTry = require('../model/businessLayer').registerTry;
var GetDate = require('../helpers/helpers').GetDate;
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

    router.post('/',auth.isLoggedIn , function (req, res) {

        console.log(req.body)
        console.log(req.files.image);

        registerTry('dd','rr',21345,'2008-8-8',999999111,'asd@dd.com','image','2008-8-8',2163,'moh','123', true,
            function (err, result) {
                //check repeated number  then repeated name

                if (err && err.toString().indexOf('PA_PersonID') !=-1)
                    console.error('repeated username');

                else if (err)
                    console.error(err);

                else{
                   // console.log(result.rowsAffected[0]); //only 1 if successful
                    //undefined for repeated number
                    if(result.rowsAffected[0]!= undefined)
                    {
                        auth.updateAuthSession(req,'moh',12,464,64);
                    }
                }

            }
        );






        res.redirect('/');
    });



    return router;
}

module.exports = retRouter;

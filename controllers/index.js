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

    router.get('/',
        function (req, res) {
            res.render("patient",{
                data1:
                    { P_Name: 'dd',
                        P_city: 'rr',
                        P_ZipCode: 21345,
                        P_BirthDate: '2008-08-08',
                        P_Phone: '9999988',
                        P_Email: 'asd@dd.com',
                        P_AdmissionDate: '2008-08-08',
                        P_SSN: '2163',
                        P_Image: 'image' },
                data2:[
                    {
                        "B_Cost": 1000,
                        "D_Description": "d44",
                        "T_Description": "t44",
                        "S_Description": "s44",
                        "BillItems": [
                            {
                                "BI_Description": "bill 1 ",
                                "BI_Name": "bill 1 ",
                                "BI_UnitCost": 20
                            },
                            {
                                "BI_Description": "bill 2",
                                "BI_Name": "bill 2",
                                "BI_UnitCost": 20
                            }
                        ],
                        "DiagItems": [
                            {
                                "DI_Description": "Diag 1",
                                "DI_Name": "Diag 1"
                            },
                            {
                                "DI_Description": "Add_BillingItem",
                                "DI_Name": "Add_DiagItem"
                            }
                        ],
                        "TreatItems": [
                            {
                                "TI_Description": "treat 1 ",
                                "TI_Name": "treat 1"
                            },
                            {
                                "TI_Description": "treat 2",
                                "TI_Name": "treat 2"
                            }
                        ],
                        "SymItems": [
                            {
                                "SI_Description": "sym 1d",
                                "SI_Name": "sym 1 "
                            },
                            {
                                "SI_Description": "sym 2d",
                                "SI_Name": "sym 2"
                            }
                        ]
                    }
                ]

            });
           // res.send("hello"+ req.session.type);
        });


    router.post('/', auth.isLoggedIn,
        function (req, res) {
            res.send("hello");
        });

    return router;
}


module.exports = retRouter;

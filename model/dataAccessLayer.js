/**
 * Created by Mohammed Alaa Elkomy on 5/13/2017.
 */

var sql = require('mssql');


//Initiallising connection string
var dbConfig = {
    user: "drOfficeDatabase",
    password: "softwareEngineering",
    server: "MOHAMMED_LT",
    database: "drOffice",
    port: 1433
};

sql.on('error', function (err) {
    // ... error handler
    console.error(err);
});


function executeProcedure(paramObj, callback) {
    const pool = new sql.ConnectionPool(dbConfig);
    pool.connect()
        .then(function () {

            var req =  pool.request();

            paramObj.params.forEach(
                function (element) {
                    req.input(element.paramName, element.paramType, element.paraVal);
                }
            );

            //.output('output_parameter', sql.VarChar(50))
            req.execute(paramObj.proc)

                .then(function (result) {
                    // ... error checks
                    callback(null, result);
                    pool.close()

                }).catch(function (err) {
                    callback(err, null);
                    pool.close()
                }
            );

        }).catch(function (err) {
            callback(err, null);
        }
    );

}


module.exports.executeProcedure = executeProcedure;
module.exports.sql = sql;


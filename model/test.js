/**
 * Created by Mohammed Alaa Elkomy on 5/15/2017.
 */


/*[ { A_AccountID: 1,
    A_AccountType: 'doctor',
    P_AccountID: null,
    PA_PatientID: null } ]*/
loginTry('moh', '12',
    function (err, result) {
        if (err)
            console.error(err);
        else {
            console.log(result.recordset);
            console.log(result.recordset[0].A_AccountID);
            console.log(result.recordset[0].A_AccountType);
        }
    }
);

//[ 1, 1, 1, 1, 1 ]
registerTry('dd', 'rr', 21345, '2008-8-8', '223324466', 'asd@dd.com', 'image', '2008-8-8', 2163, 'do1dort1', '123', true,
    function (err, result) {
        if (err)
            console.error(err);
        else
            console.log(result.rowsAffected[0]);
    }
);


getPersonDataByAccID('23',
    function (err,result){
        if(err)
            console.error(err);
        else
            console.log (result.recordset[0]);
    }
);

scheduleVisit('2017-5-18' , 20 , 'A' , 21, function (err,result){
    if(err)
        console.error(err);
    else
        console.log (result.rowsAffected[0]); // this is 1
});



unscheduleVisit(21, function (err,result){
    if(err)
        console.error(err);
    else
        console.log (result.rowsAffected[0]); // this is 1
});


getHistoryOfpatient(6, function (err,result){
    if(err)
        console.error(err);
    else
        console.log (restructureVisitJSON (result.recordset));
});



//getAvailibleIndecesByDate
getVisitsByDate_ToBeSchd('2008-11-11', function (err, result){
    if(err)
        console.error(err);
    else
        console.log (result.recordset); // this is 1
});


getVisitsByDate_ToBeSchd('2008-11-11', function (err, result){
    if(err)
        console.error(err);
    else

        console.log (result.recordset); // this is 1
});



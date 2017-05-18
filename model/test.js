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
registerTry('dd', 'rr', 21345, '2008-8-8', '223324466', 'asd@dd.com', 'image', '2008-8-8', 2163, 'do1dofrt1', '123', true
    ,10100,'2008-9-8',150,
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


getHistoryOfpatient(6, function (err,result){ //result is json array of visits
    if(err)
        console.error(err);
    else
        console.log (JSON.stringify(result, null, 1)); // Indented with tab
});

//getAvailibleIndecesByDate
getVisitsByDate_ToBeSchd('2008-11-11', function (err, result) {
    if (err)
        console.error(err);
    else {
        console.log(result.recordset);
        var lucky ;
        lucky = getNextToEnter(result.recordset);
        console.log(lucky); //maybe null
    }
});


Add_Billing(100,53, function (err,result){ //result is json array of visits
    if(err)
        console.error(err);
    else
        console.log (result.rowsAffected[0]);
});

Add_Diagnose('diaiaiai',53, function (err,result){ //result is json array of visits
    if(err)
        console.error(err);
    else
        console.log (result.rowsAffected[0]);
});

Add_Symptoms('symsms',53, function (err,result){ //result is json array of visits
    if(err)
        console.error(err);
    else
        console.log (result.rowsAffected[0]);
});

Add_Treatment('treat',53, function (err,result){ //result is json array of visits
    if(err)
        console.error(err);
    else
        console.log (result.rowsAffected[0]);
});



Add_BillingItem('Add_BillingItem','Add_BillingItem',500, function (err,result){ //result is json array of visits
    if(err)
        console.error(err);
    else
        console.log (result.rowsAffected[0]);
});

Add_SYMItem('Add_SYMItem','Add_SYMItem', function (err,result){ //result is json array of visits
    if(err)
        console.error(err);
    else
        console.log (result.rowsAffected[0]);
});

Add_TreatItem('Add_TreatItem','Add_TreatItem',null, function (err,result){ //result is json array of visits
    if(err)
        console.error(err);
    else
        console.log (result.rowsAffected[0]);
});

Add_DiagItem('Add_DiagItem','Add_DiagItem', function (err,result){ //result is json array of visits
    if(err)
        console.error(err);
    else
        console.log (result.rowsAffected[0]);
});



Add_BillAssociation(8,4, function (err,result){ //result is json array of visits
    if(err)
        console.error(err);
    else
        console.log (result.rowsAffected[0]);
});

Add_DiagAssociation(8,2, function (err,result){ //result is json array of visits
    if(err)
        console.error(err);
    else
        console.log (result.rowsAffected[0]);
});

Add_SysAssociation(9,3, function (err,result){ //result is json array of visits
    if(err)
        console.error(err);
    else
        console.log (result.rowsAffected[0]);
});

Add_TreatAssociation(8,4, function (err,result){ //result is json array of visits
    if(err)
        console.error(err);
    else
        console.log (result.rowsAffected[0]);
});


searchPatientbyPersonName('d', function (err,result){ //result is json array of visits
    if(err)
        console.error(err);
    else
        console.log (result.recordset);
});

search_bill_item_byName('b', function (err,result){ //result is json array of visits
    if(err)
        console.error(err);
    else
        console.log (result.recordset);
});

search_dia_item_byName('d', function (err,result){ //result is json array of visits
    if(err)
        console.error(err);
    else
        console.log (result.recordset);
});
search_Sym_item_byName('s', function (err,result){ //result is json array of visits
    if(err)
        console.error(err);
    else
        console.log (result.recordset);
});

search_treat_item_byName('t', function (err,result){ //result is json array of visits
    if(err)
        console.error(err);
    else
        console.log (result.recordset);
});

searchPatientbyPersonName('d', function (err,result){ //result is json array of visits
    if(err)
        console.error(err);
    else
        console.log (result.recordset);
});


checkUpFullData(44,1000,'d44','s44','t44',[1,2],[1,2],[2,3],[1,2], function (err){ //result is json array of visits
    if(err)
        console.error(err);
    else
        console.log ("done");
});






















function Add_Billing(Cost, VisitID, callback) {
    executeProcedure(paramObj = {
            proc: 'Add_Billing', params: [
                {paramName: 'Cost', paramType: sql.Int, paraVal: Cost},
                {paramName: 'VisitID', paramType: sql.Int, paraVal: VisitID}
            ]
        }
        , callback
    );
}


function Add_Diagnose(Description, VisitID, callback) {
    executeProcedure(paramObj = {
            proc: 'Add_Diagnose', params: [
                {paramName: 'Description', paramType: sql.NVarChar(200), paraVal: Description},
                {paramName: 'VisitID', paramType: sql.Int, paraVal: VisitID}
            ]
        }
        , callback
    );
}


function Add_Symptoms(Description, VisitID, callback) {
    executeProcedure(paramObj = {
            proc: 'Add_Symptoms', params: [
                {paramName: 'Description', paramType: sql.NVarChar(200), paraVal: Description},
                {paramName: 'VisitID', paramType: sql.Int, paraVal: VisitID}
            ]
        }
        , callback
    );
}


function Add_Treatment(Description, VisitID, callback) {
    executeProcedure(paramObj = {
            proc: 'Add_Treatment', params: [
                {paramName: 'Description', paramType: sql.NVarChar(200), paraVal: Description},
                {paramName: 'VisitID', paramType: sql.Int, paraVal: VisitID}
            ]
        }
        , callback
    );
}
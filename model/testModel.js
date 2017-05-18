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

registerTry('dd','rr',21345,'2008-8-8',999999111,'asd@dd.com','image','2008-8-8',2163,'moh','123', true,
    function (err, result) {
        //check repeated number  then repeated name

        if (err && err.toString().indexOf('PA_PersonID') !=-1)
            console.error('repeated username');
        else if (err)
            console.error(err);
        else
            console.log(result.rowsAffected[0]); //only 1 if successful
        //undefined for repeated number
    }
);

getPersonDataByAccID('42',
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


getHistoryOfpatient(21, function (err,result){ //result is json array of visits
    if(err)
        console.error(err);
    else
        console.log (JSON.stringify(result, null, 1)); // Indented with tab
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




//getAvailibleIndecesByDate
getQueueOfVisits('2008-11-11', function (err, result) { //click next doctor
    if (err)
        console.error(err);
    else {
        console.log(result.recordset);
        var lucky ;
        lucky = getNextToEnter(result.recordset); //maybe null
        console.log(lucky);

        console.log(getCurrentVisitId());

        //click post
        checkUpFullData(getCurrentVisitId(),1000,'d44','s44','t44',[1,2],[1,2],[2,3],[1,2], function (err){ //result is json array of visits
            if(err)
                console.error(err);
            else{
                console.log ("done"); //post done


                getQueueTopay().push (getCurrentVisitId());
                setCurrentVisitId(null);

                //click next receptionist
                console.log (getQueueTopay());

                console.log(getNextToLeave());

                console.log (getQueueTopay())
            }

        });




        /*
         console.log(lucky);
         for (i in result.recordset){
         if (result.recordset[i] == lucky)
         { result.recordset.splice(i, 1);
         break;
         }
         }

         lucky = getNextToEnter(result.recordset); //maybe null

         console.log(lucky);
         for (i in result.recordset){
         if (result.recordset[i] == lucky)
         { result.recordset.splice(i, 1);
         break;
         }
         }

         lucky = getNextToEnter(result.recordset); //maybe null

         console.log(lucky);
         for (i in result.recordset){
         if (result.recordset[i] == lucky)
         { result.recordset.splice(i, 1);
         break;
         }
         }

         lucky = getNextToEnter(result.recordset); //maybe null

         console.log(lucky);
         for (i in result.recordset){
         if (result.recordset[i] == lucky)
         { result.recordset.splice(i, 1);
         break;
         }
         }

         lucky = getNextToEnter(result.recordset); //maybe null

         console.log(lucky);
         for (i in result.recordset){
         if (result.recordset[i] == lucky)
         { result.recordset.splice(i, 1);
         break;
         }
         }


         lucky = getNextToEnter(result.recordset); //maybe null

         console.log(lucky);
         for (i in result.recordset){
         if (result.recordset[i] == lucky)
         { result.recordset.splice(i, 1);
         break;
         }
         }

         lucky = getNextToEnter(result.recordset); //maybe null

         console.log(lucky);
         for (i in result.recordset){
         if (result.recordset[i] == lucky)
         { result.recordset.splice(i, 1);
         break;
         }
         }*/

    }
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
/**
 * Created by Mohammed Alaa Elkomy on 5/15/2017.
 */
var executeProcedure =require('./dataAccessLayer').executeProcedure;
var sql =require('./dataAccessLayer').sql;

var GetDate = require('../helpers/helpers').GetDate;
var FormatDate = require('../helpers/helpers').FormatDate;
var restructureVisitJSON = require('../helpers/helpers').restructureVisitJSON;
var getNextToEnter = require('../helpers/helpers').getNextToEnter;
var getNextToLeave = require('../helpers/helpers').getNextToLeave;
var unique = require('../helpers/helpers').unique;

function loginTry(username,password,callback){
    executeProcedure(paramObj={proc:'SP_LOGIN',params:[
            {paramName:'id',paramType:sql.NVarChar(25),paraVal:username},
            {paramName:'PWD',paramType:sql.NVarChar(25),paraVal:password}
        ]}
        ,callback
    );
}


function registerTry(Name,City,Zip_code,Birthdate,Phone,E_mail,Image,AdmissionDate,SSN,UserName,Password,Ispatient,callback){
    var proc = (Ispatient?'Add_Patient':'Add_Rep');
    executeProcedure(paramObj={proc:proc,params:[
            {paramName:'Name',paramType:sql.NVarChar(50),paraVal:Name},
            {paramName:'City',paramType:sql.NVarChar(25),paraVal:City},
            {paramName:'Zip_code',paramType:sql.Int,paraVal:Zip_code},
            {paramName:'Birthdate',paramType:sql.Date,paraVal:Birthdate},
            {paramName:'Phone',paramType:sql.NVarChar(20),paraVal:Phone},
            {paramName:'E_mail',paramType:sql.NVarChar(50),paraVal:E_mail},
            {paramName:'Image',paramType:sql.NVarChar(25),paraVal:Image},
            {paramName:'AdmissionDate',paramType:sql.NVarChar(25),paraVal:AdmissionDate},
            {paramName:'SSN',paramType:sql.NVarChar(25),paraVal:SSN},
            {paramName:'UserName',paramType:sql.NVarChar(25),paraVal:UserName},
            {paramName:'Password',paramType:sql.NVarChar(25),paraVal:Password}
        ]}
        ,callback
    );
}

function getPersonDataByAccID(ID, callback){
    executeProcedure(paramObj={proc:'getPersonbyAccId',params:[
            {paramName:'ID',paramType:sql.Int,paraVal:ID}
        ]}
        ,callback
    );
}

function getHistoryOfpatient(PatientID,callback){
    executeProcedure(paramObj={proc:'Last3Visit4Patient',params:[
            {paramName:'ID',paramType:sql.Int,paraVal:PatientID}
        ]}
        ,callback
    );
}

function scheduleVisit(Date,V_index,Priority,PatientID,callback){
    executeProcedure(paramObj={proc:'Has_Visit',params:[
            {paramName:'PatientID',paramType:sql.Int,paraVal:PatientID}
        ]}
        ,
        function (err,result){
            if(V_index >= 1 && V_index <= 20 )
                if (!result.rowsAffected[0]) {
                    if (GetDate() <= FormatDate(Date) &&  GetDate(15) >= FormatDate(Date))
                        executeProcedure(paramObj = {
                                proc: 'Add_Visit', params: [
                                    {paramName: 'Date', paramType: sql.Date, paraVal: Date},
                                    {paramName: 'V_index', paramType: sql.Int, paraVal: V_index},
                                    {paramName: 'Priority', paramType: sql.VarChar(1), paraVal: Priority},

                                    {paramName: 'PatientID', paramType: sql.Int, paraVal: PatientID}
                                ]
                            }
                            , callback
                        );
                    else
                        callback(new Error("Bad date"), null);
                }
                else
                    callback(new Error("User can only schedule one visit"), null);

            else callback(new Error("User can only have index from 1 to 20"), null);
        }
    );
}

function unscheduleVisit(PatientID,callback){
    executeProcedure(paramObj={proc:'delete_visit',params:[
            {paramName:'PatientID',paramType:sql.Int,paraVal:PatientID}
        ]}
        ,callback
    );
}


function getVisitsByDate_ToBeSchd(Date, callback){
    executeProcedure(paramObj={proc:'getVisitsBydate',params:[
            {paramName:'Date',paramType:sql.Date,paraVal:Date}
        ]}
        ,callback
    );
}


function getAvailibleIndecesByDate(Date,callback){
    executeProcedure(paramObj={proc:'getVisitsBydate',params:[
            {paramName:'Date',paramType:sql.Date,paraVal:Date}
        ]}
        ,callback
    );
}




function Add_Billing(Cost,VisitID,callback){
    executeProcedure(paramObj={
            proc:'Add_Billing',params:[
                {paramName:'Cost',paramType:sql.Int,paraVal:Cost},
                {paramName:'VisitID',paramType:sql.Int,paraVal:VisitID}
            ]}
        ,callback
    );
}



function Add_Diagnose(Description,VisitID,callback){
    executeProcedure(paramObj={
            proc:'Add_Diagnose',params:[
                {paramName:'Description',paramType:sql.NVarChar(200),paraVal:Description},
                {paramName:'VisitID',paramType:sql.Int,paraVal:VisitID}
            ]}
        ,callback
    );
}




function Add_Symptoms(Description,VisitID,callback){
    executeProcedure(paramObj={
            proc:'Add_Symptoms',params:[
                {paramName:'Description',paramType:sql.NVarChar(200),paraVal:Description},
                {paramName:'VisitID',paramType:sql.Int,paraVal:VisitID}
            ]}
        ,callback
    );
}


function Add_Treatment(Description,VisitID,callback){
    executeProcedure(paramObj={
            proc:'Add_Treatment',params:[
                {paramName:'Description',paramType:sql.NVarChar(200),paraVal:Description},
                {paramName:'VisitID',paramType:sql.Int,paraVal:VisitID}
            ]}
        ,callback
    );
}



function Add_BillAssociation(BillID,BillItemID,callback){
    executeProcedure(paramObj={
            proc:'Add_BillAssociation',params:[
                {paramName:'BillID',paramType:sql.Int,paraVal:BillID},
                {paramName:'BillItemID',paramType:sql.Int,paraVal:BillItemID}
            ]}
        ,callback
    );
}


function Add_DiagAssociation(DiagID,DiagItemID,callback){
    executeProcedure(paramObj={
            proc:'Add_DiagAssociation',params:[
                {paramName:'DiagID',paramType:sql.Int,paraVal:DiagID},
                {paramName:'DiagItemID',paramType:sql.Int,paraVal:DiagItemID}
            ]}
        ,callback
    );
}

function Add_SysAssociation(SymID,SysItemID,callback){
    executeProcedure(paramObj={
            proc:'Add_SysAssociation',params:[
                {paramName:'SymID',paramType:sql.Int,paraVal:SymID},
                {paramName:'SysItemID',paramType:sql.Int,paraVal:SysItemID}
            ]}
        ,callback
    );
}


function Add_TreatAssociation(TreamID,TreatItemID,callback){
    executeProcedure(paramObj={
            proc:'Add_TreatAssociation',params:[
                {paramName:'TreamID',paramType:sql.Int,paraVal:TreamID},
                {paramName:'TreatItemID',paramType:sql.Int,paraVal:TreatItemID}
            ]}
        ,callback
    );
}



function Add_BillingItem(Name,Description,callback){
    executeProcedure(paramObj={
            proc:'Add_BillingItem',params:[
                {paramName:'Name',paramType:sql.NVarChar(50),paraVal:Name},
                {paramName:'Description',paramType:sql.NVarChar(100),paraVal:Description}
            ]}
        ,callback
    );
}

function Add_SYMItem(Name,Description,callback){
    executeProcedure(paramObj={
            proc:'Add_SYMItem',params:[
                {paramName:'Name',paramType:sql.NVarChar(50),paraVal:Name},
                {paramName:'Description',paramType:sql.NVarChar(100),paraVal:Description}
            ]}
        ,callback
    );
}



function Add_TreatItem(Name,Description,RepID,callback){
    executeProcedure(paramObj={
            proc:'Add_TreatItem',params:[
                {paramName:'Name',paramType:sql.NVarChar(50),paraVal:Name},
                {paramName:'Description',paramType:sql.NVarChar(100),paraVal:Description},
                {paramName:'RepID',paramType:sql.Int,paraVal:RepID}
            ]}
        ,callback
    );
}



function Add_DiagItem(Name,Description,callback){
    executeProcedure(paramObj={
            proc:'Add_DiagItem',params:[
                {paramName:'Name',paramType:sql.NVarChar(50),paraVal:Name},
                {paramName:'Description',paramType:sql.NVarChar(100),paraVal:Description}
            ]}
        ,callback
    );
}

function searchPatientbyPersonName(Name,callback){
    executeProcedure(paramObj={
            proc:'searchPatientbyPersonName',params:[
                {paramName:'Name',paramType:sql.VarChar(50),paraVal:Name}
            ]}
        ,callback
    );
}


function search_bill_item_byName(Name,callback){
    executeProcedure(paramObj={
            proc:'search_bill_item_byName',params:[
                {paramName:'Name',paramType:sql.VarChar(50),paraVal:Name}
            ]}
        ,callback
    );
}


function search_dia_item_byName(Name,callback){
    executeProcedure(paramObj={
            proc:'search_dia_item_byName',params:[
                {paramName:'Name',paramType:sql.VarChar(50),paraVal:Name}
            ]}
        ,callback
    );
}

function search_Sym_item_byName(Name,callback){
    executeProcedure(paramObj={
            proc:'search_Sym_item_byName',params:[
                {paramName:'Name',paramType:sql.VarChar(50),paraVal:Name}
            ]}
        ,callback
    );
}


function search_treat_item_byName(Name,callback){
    executeProcedure(paramObj={
            proc:'search_treat_item_byName',params:[
                {paramName:'Name',paramType:sql.VarChar(50),paraVal:Name}
            ]}
        ,callback
    );
}




getHistoryOfpatient(6, function (err,result){
    if(err)
        console.error(err);
    else
        var ids=[];
        for (var i in result.recordset)
            ids.push(result.recordset[i].V_VisitID);

        ids=unique(ids);

        var visitsArray= new Array(ids.length);

        for (var j in ids) {
            visitsArray[j]=[];

            result.recordset.forEach(function(record) {
                if(record.V_VisitID==ids[j])
                    visitsArray[j].push(record);
            })
        }


    console.log(visitsArray[1]);
     /*   console.log (restructureVisitJSON (result.recordset));
        console.log ((result.recordset));*/

});



//login form
module.exports.loginTry=loginTry;
module.exports.registerTry=registerTry;

//patient form
module.exports.getPersonDataByAccID=getPersonDataByAccID;
module.exports.getHistoryOfpatient=getHistoryOfpatient;
module.exports.scheduleVisit=scheduleVisit;
module.exports.unscheduleVisit=unscheduleVisit;

//doctor form
module.exports.getVisitsByDate_ToBeSchd=getVisitsByDate_ToBeSchd;
module.exports.getAvailibleIndecesByDate=getAvailibleIndecesByDate;


module.exports.Add_Billing=Add_Billing;
module.exports.Add_Diagnose=Add_Diagnose;
module.exports.Add_Symptoms=Add_Symptoms;
module.exports.Add_Treatment=Add_Treatment;
module.exports.Add_BillAssociation=Add_BillAssociation;
module.exports.Add_DiagAssociation=Add_DiagAssociation;
module.exports.Add_SysAssociation=Add_SysAssociation;
module.exports.Add_TreatAssociation=Add_TreatAssociation;
module.exports.Add_BillingItem=Add_BillingItem;
module.exports.Add_SYMItem=Add_SYMItem;
module.exports.Add_TreatItem=Add_TreatItem;
module.exports.Add_DiagItem=Add_DiagItem;
module.exports.searchPatientbyPersonName=searchPatientbyPersonName;
module.exports.search_bill_item_byName=search_bill_item_byName
module.exports.search_dia_item_byName=search_dia_item_byName;
module.exports.search_Sym_item_byName=search_Sym_item_byName;
module.exports.search_treat_item_byName =search_treat_item_byName;
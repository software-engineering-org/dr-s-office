/**
 * Created by Mohammed Alaa Elkomy on 5/16/2017.
 */

function unique(that) {
    var n = {}, r = [];
    for (var i = 0; i < that.length; i++) {
        if (!n[that[i]]) {
            n[that[i]] = true;
            r.push(that[i]);
        }
    }
    return r;
}

module.exports.GetDate = function (shift) {
    if (shift == undefined)
        shift = 0;

    var target = new Date();
    target.setDate(target.getDate() + shift);
    return (target).toISOString().split('T')[0];
};

module.exports.FormatDate = function (dateString) {
    return new Date(dateString).toISOString().split('T')[0];
};


module.exports.restructureVisitJSON = function (json) {
    var temp = new Array(4);
    for (var i = 0; i < temp.length; i++)
        temp[i] = [];

    for (jsonObject in json) {
        temp[0].push([json[jsonObject]['BI_Description'], json[jsonObject]['BI_Name'], json[jsonObject]['BI_UnitCost']]);
        temp[1].push([json[jsonObject]['DI_Description'], json[jsonObject]['DI_Name']]);
        temp[2].push([json[jsonObject]['TI_Description'], json[jsonObject]['TI_Name']]);
        temp[3].push([json[jsonObject]['SI_Description'], json[jsonObject]['SI_Name']]);
    }
    temp[0] = unique(temp[0]);
    temp[1] = unique(temp[1]);
    temp[2] = unique(temp[2]);
    temp[3] = unique(temp[3]);

    var jsonArr0 = [], jsonArr1 = [], jsonArr2 = [], jsonArr3 = [];

    for (ele in temp[0])
        jsonArr0.push({'BI_Description': temp[0][ele][0], 'BI_Name': temp[0][ele][1], 'BI_UnitCost': temp[0][ele][2]})

    for (ele in temp[1])
        jsonArr1.push({'DI_Description': temp[1][ele][0], 'DI_Name': temp[1][ele][1]})

    for (ele in temp[2])
        jsonArr2.push({'TI_Description': temp[2][ele][0], 'TI_Name': temp[2][ele][1]})

    for (ele in temp[3])
        jsonArr3.push({'SI_Description': temp[3][ele][0], 'SI_Name': temp[3][ele][1]})

    return {
        B_Cost: json[0]['B_Cost'],
        D_Description: json[0]['D_Description'],
        T_Description: json[0]['T_Description'],
        S_Description: json[0]['S_Description'],
        BillItems: jsonArr0,
        DiagItems: jsonArr1,
        TreatItems: jsonArr2,
        SymItems: jsonArr3
    }
};


var currentVisitId = null;
var leftToReducePriorty = 3;
var priority = 'A';
module.exports.getNextToEnter = function (watingQueueJson) {
    for (var i in watingQueueJson)
        console.log(watingQueueJson[i])

};

module.exports.getNextToLeave = function (json) {


};


module.exports.unique =unique;

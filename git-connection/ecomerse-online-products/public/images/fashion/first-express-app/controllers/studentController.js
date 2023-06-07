var getStudent=()=>{
    // connet to DB
    return {name_:'Suresh',marks:59,place:'BNG'};
}
var getStudents=()=>{
    // connet to DB
    return [{name_:'Ravi',marks:76,place:'BNG'},
    {name_:'Venu',marks:66,place:'HYD'},
    {name_:'Raheem',marks:86,place:'VZG'},
    {name_:'Manikanta',marks:90,place:'RJM'},
    {name_:'Narayan',marks:70,place:'GLOBE'},
    {name_:'Jagadeesh',marks:76,place:'VJW'}];
}

 module.exports = [getStudent,getStudents];































 
    /*
 var stds = [{name_:'Ravi',marks:76,place:'BNG'},
 {name_:'Venu',marks:66,place:'HYD'},
 {name_:'Raheem',marks:86,place:'VZG'},
 {name_:'Manikanta',marks:90,place:'RJM'},
 {name_:'Narayan',marks:70,place:'GLOBE'},
 {name_:'Jagadeesh',marks:76,place:'VJW'}];

 var std= {name_:'Suresh',marks:59,place:'BNG'}
  var s = [std,stds] */
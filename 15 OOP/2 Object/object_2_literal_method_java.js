//Declaration of object
var fees = {};
//Defining properties
fees['Rahul'] = 100;
fees['Rose'] = 500;
fees['total'] = function() {return(fees.Rose+fees.Rahul); };
document.write(fees.total()+"<br>");
document.write(fees['total']()+"<br>");

var fees2 = {Rahul: 100, Rose:500, Shilpa:1100};
document.write(fees2['Rahul']+"<br>");
var fees3 = {Ramesh:500, total:function() {return(200+800);}};
document.write(fees3.total()+"<br>");
document.write(fees3['total']()+"<br>");
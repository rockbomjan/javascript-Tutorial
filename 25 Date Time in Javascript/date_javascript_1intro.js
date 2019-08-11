var d = new Date();
document.write("Current date and time: "+d+"<br>");

var dt = new Date(2019, 10, 6);//date argument passed
document.write(dt+"<br>");

//Order of date format matters in javascript

var dtt = new Date(11, 23, 5);
document.write("Wrong date order: "+dtt+"<br>");

var dttt = new Date("yy","mm","dd");//invalid date
document.write(dttt+"<br>");

//getter and setter method
var dateObj = new Date();
var day = dateObj.getDay();
var month = dateObj.getMonth();//Because '1' is not added. So, the display will be
//the month before the current month
var year = dateObj.getFullYear();
document.write("The date today: "+day+"/"+month+"/"+year+"<br>");

//UTC :Universal Coordinated Time, the time set by the World Time Standard
var dateObj = new Date();
var day = dateObj.getUTCDate();
var month = dateObj.getUTCMonth()+1;//Because '0' is for January
var year = dateObj.getUTCFullYear();    
document.write("The date today: "+day+"/"+month+"/"+year+"<br>");

document.write("Setting Own Date<br>");
var dateOb = new Date();
var day = dateOb.setDate(12);
var month = dateOb.setMonth(11)+1;//Because '0' is for January
var year = dateObj.setFullYear(2011);
document.write("The date is set to: "+day+"/"+month+"/"+year+"<br>");

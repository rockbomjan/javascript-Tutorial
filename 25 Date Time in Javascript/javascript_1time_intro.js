var date = new Date();
var time_1 = date.getTime();
document.write("Time in milliseconds: " +time_1+"<br>");

var hour = date.getHours();
var min = date.getMinutes();
var sec = date.getSeconds();

document.write("Now, The time is :"+hour+":"+min+":"+sec+"<br>");

var local_time = date.toLocaleTimeString();
document.write("This is a local time "+local_time+"<br>");


var c = document.getElementById("myCanvas");
var ctx = c.getContext("2d");

ctx.strokeRect(5, 5, 25, 15);
ctx.scale(2, 2);
ctx.strokeRect(5, 5, 25, 15);
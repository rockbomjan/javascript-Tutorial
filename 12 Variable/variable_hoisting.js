var a = 10;
document.write("Here b is initialized after the write function. var a = 10 and var b = 20<br>");
document.write(a+" for 'a' and "+ b + " for 'b'<br>");
var b = 20;
document.write("Now, the write method after initialization of variable 'b'<br>" )
document.write(a+" for 'a' and "+ b + " for 'b'<br>");

var i = "Hello Rose";
document.write(i + "<br>");
function disp()
{
    document.write(i+"<br>");
    var i = "Hello Rose Namlange!!";
}
disp();
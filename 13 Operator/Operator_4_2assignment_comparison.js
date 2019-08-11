//!= is not equal to
//!== is not identical
var c = 11;//Numerical data type
var d = 11;//String data type
document.write(c+" is the value of c and is a number.<br>");
document.write(d +" is the value of d and is a number.<br>")
if(c != d)
{
    document.write("Both are not equal.<br>");
}
else
{
    document.write("Both are equal.<br>");
}

var c = 12;
var d = "12";
document.write(c+" is the value of c and is a number.<br>");
document.write(d +" is the value of d and is a string.<br>")

if(c!==d)
{
    document.write("Both are not equal.<br>");
}
else
{
    document.write("Both are equal.<br>");
}
//The output is:
/*
11 is the value of c and is a number.
11 is the value of d and is a number.
Both are equal.
12 is the value of c and is a number.
12 is the value of d and is a string.
Both are not equal.
*/
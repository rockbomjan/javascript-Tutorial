//== is equal to
//=== is identical
var a = 10;//Numerical data type
var b = "10";//String data type
document.write(a+" is the value of a and is a number.<br>");
document.write(b +" is the value of b and is a string.<br>")
if(a==b)
{
    document.write("Both are equal.<br>");
}
else
{
    document.write("Both are not equal.<br>");
}
//The output will be same: 
//10 is the value of a and is a number.
//10 is the value of b and is a string.
//Both are equal. Because '==' was checking only the values.

if(a===b)
{
    document.write("Both are equal.<br>");
}
else
{
    document.write("Both are not equal.<br>");
}
//The output will be same: 
//Both are not equal. Because '===' was checking not only the values but also
//the datatype.

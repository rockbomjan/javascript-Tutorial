var i = "I am a global variable";//Global variable 
function show()
{
    document.write("Variable accessed from  inside the function: " +i + "<br>");

}

show ();
"<br>";
document.write("Variable accessed from outside the function: "+i + "<br>");

function dis()
{
    document.write("Variable accessed from another function: " +i+"<br>");
}
dis()
"<br>"
function add(b)
{
    var a = 10;
    return(a+b);
}
document.write("Local Variable inside the function: "+add(20)+"<br>");
function add(b)
{
    a = 20;
    return(a+b);
}
document.write("Global Variable inside the function but not declared with a keyword var: "+add(50)+"<br>");
document.write("Global Variable inside the function but not declared with a keyword var: "+add(50)+"<br>");

function add(b)
{
    var c = 20;// Local variable cannot be accesed outside the function
    document.write("Here var c = 20 is a local variable. And the value of b = 20 is a parameter value. So the sum is "+(b+c)+".<br>");
}
add(90);
document.write("Local Variable inside the function declared with a keyword var cannot be accesed outside the function."+(b+c)+"<br>");


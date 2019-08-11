document.write("Example of var<br>");
function myvar()
{
    var a = 50;//a value is assigned
    if (true)// if it is true
    {
        var a = 40;// the value is reassigned
        document.write("reassigned value: "+a +"<br>");
    }
    document.write("reassigned value: "+a +"<br>");//It's the same result because
    //the reassigned value is available for the function.
}
myvar();
document.write("Example of let<br>");
function mylet()
{
    let a = 41;//a value is assigned
    if (true)// if it is true
    {
        let a = 70 ;// the value is reassigned
        document.write("reassigned value: "+a +"<br>");
    }
    document.write("reassigned value: "+a +"<br>");//It's not the same result 
    // because the reassigned value with let keyword is limitd to the if block
    // only. Therefore, the a takes the default value.    
}

mylet();
    

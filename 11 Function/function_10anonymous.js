//Returning anonymous function
document.write("Now, returning an anonymous function.<br>");
function anony2(a)
{
    return function(b)
    {
        return a + b;
    };
}

var anony_func2= (anony2(10));
document.write(anony_func2(30));

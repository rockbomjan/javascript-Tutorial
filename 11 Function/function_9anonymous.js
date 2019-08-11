document.write("Anonymous function stored to a variable.<br>");

var anony_func = function()//It's a function expression.
                    { 
                        document.write("This is the result of Anonymous function.<br>");
                    };

var su_m = function(a,b)//It's a function expression.
                    {
                        document.write("The sum is: "+(a+b)+"<br>");
                    };
anony_func();
su_m(50,40);                    
document.write("********************************************************<br>");
document.write("First a general function.")                
function disp(my_fun)
{
    return my_fun;
}
document.write(disp("It's a general function.<br>"));//Passing string as an argument.

//Anonymous function as a paramenter.
document.write("Now, passing Anonymous Function as Argument.<br>");

function anony1(fun)
{
    return fun();//Here () parenthesis required to call the anonymous function which
    //is used as a parameter of the disp function. Otherwise, the whole anonymous
    // function structure will be printed as a text.
}

document.write(anony1(function()//Anonymous function as a parameter.
{
                return "I am an anonymous function passed as an argument inside anony1 function.<br>";
}));
anony1();

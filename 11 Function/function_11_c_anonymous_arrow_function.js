//arrow function with return parameter
var my_fun8 = (x,y) => {return(x+y);};
document.write("eg: of return parameter with arrow function. "+my_fun8(100, 50)+"<br>");

var my_fun9 = x => x;

document.write("Syntax: var my_fun9 = x => x; "+ my_fun9(30)+"<br>");
//If x is placed in the block of curly brackets, an error 'undefined' occurs. 

var my_fun10 = (p,q) => p+q;
//If p+q are placed in the block of curly brackets, an error 'undefined' occurs
document.write("Syntax: var my_fun10 = (p,q) => p+q; "+ my_fun10(10,5)+"<br>");

//General function
function disp(w,z)
{
    return w + z;
}
document.write("Simple function; "+ disp(70,65)+"<br>");
// (a,b) => a+b; short arrow function.
var my_fun4 = (a) =>{document.write("eg: of arrow function with a parameter.<br> " +a)};
my_fun4(10);//Parenthesis with a is optional for only one parameter. However, if the
//parameter is more, the parenthesis is required. 
//Arrow function with default parameter

var my_fun5 = (a, b = 20) =>{document.write("<br>eg: of a default parameter 'b = 20': "+(a+b)+"<br>")};
my_fun5(10);

//Arrow function with rest parameter.
var my_fun6 = (c, ...args) =>{document.write("eg: of a rest parameter"+(c +","+ args)+"<br>")};

my_fun6(10, 90, 70, 80);//10 is assigned to c parameter and the rest is assigned
//to args.

//Arrow function without curly brackets.
var my_fun7 = (d, ...args) =>document.write("eg: without curly brackets. "+(d +","+ args)+"<br>");
document.write("This is printed before the call of the main function.<br>");//This will be printed first.
//If used curly brackets, the main function will be printed first.
//No opening or closing curly brackets.
my_fun7("cow", "head", "tail", "nose");



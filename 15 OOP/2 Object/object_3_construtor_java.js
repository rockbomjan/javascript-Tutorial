//Simple
var fees = new Object();
//Defining properties
fees['Rahul'] = 100;
fees['Rose'] = 500;
fees['total'] = function() {return(fees.Rose+fees.Rahul); };
document.write(fees.total()+"<br>");
document.write(fees['total']()+"<br>");

//Complex
function Restaurant(name, seats, food)
{
    this.name = name;
    this.seats = seats;
    this.food = food;
}
/*
Here in the above example is an object constructor function. The 'funtion'
is a keyword. The name of function capitalize and it is a good practice. This
function has there parameters. Each of them sets the value of a property in the
objects. The property will be the same for each object created using this
function. 'this' is a keyword and used commonly inside functions and objects 
where the function is declared alters what 'this' means it. It always refers to
one object using the object in which the function operates.In JavaScript, 'this'
is the object that owns the JavaScript code. The value of 'this' when used in 
the function is the object, in this case 'Restaurant' that owns the function. The
'this' keyword in an object constructor does not have a value. It is only a 
substitute for the new object. The value of 'this' will become the new object
when the constructor is used to create an object.
Tutorial Link: https://www.youtube.com/watch?v=oSs_25dmxOE
 */

var Bishnu = new Restaurant('Bishnu', 12, 'Snacks');//new Restaurant is the 
//creation of new object and creating values to match Restaurant(name,seats,food)
//and change into variables or properties this.name = name;
var Gautam = new Restaurant('Gautam', 11, 'Dinner');
var Jevan = new Restaurant('Jevan', 10, 'Lunch');
document.write(Bishnu.name+ "<br>");
document.write(Jevan.food+"<br>");
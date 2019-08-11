//Function for inheritance
function extend(Child, Parent)
{
    Child.prototype = Object.create(Parent.prototype);
    Child.prototype.constructor = Child;
}

//Super class
var Mobile = function()
{

}
//Prototype Member
Mobile.prototype.show = function()
{
    return "Super Class Method";l
}
//Sub class
var Samsung = function()
{

}
// Sub class Samsung extending super class Mobile
extend(Samsung, Mobile);
/*Creating overriding method. This method will override the method 
Mobile.prototype.show = function()
{
    return "Super Class Method";l
}
*/
Samsung.prototype.show = function()
{
    return "Sub Class Method";
}

//Creating object of sub class Samsung
var sam = new Samsung();
//Accessing super class property model using sub class object.
document.write(sam.show());
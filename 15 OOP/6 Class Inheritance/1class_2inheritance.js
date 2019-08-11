// JavaScript Codes Arranged Codes

// Super Class(parent)
var Mobile = function(model){
    this.model = model;

};
Mobile.prototype.getModel = function(){//get.Model is a method
    return this.model;
};
// Sub Class(child) also called a constructor
var Samsung = function(model, price){
    Mobile.call(this, model);
    this.price = price;

};
// Inheritance
Samsung.prototype = Object.create(Mobile.prototype);
Samsung.prototype.constructor = Samsung; //resetting the constructor
// Now, we can access the getModel method of parent class through the object of 
//Samsung sub class
var galaxy = new Samsung('Galaxy', 3000);//Samsung class has a parameter, so passed one.
console.log(galaxy.getModel());
console.log(galaxy.model);/*Result undefined as the value is not passed in the parent parent
constructor. The result is undefined because the object didn't get
access to the the model in the parent class. So, we have to call the parent
constructor in sub class. For this, we require a call method. The call method calls 
an object of other method to another object indirectly. 
create an object to the
constructor 
*/






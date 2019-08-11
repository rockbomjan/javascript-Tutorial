//JavaScript Codes Messy Codes
//Super Class
var Mobile = function(){

}
//Prototype method of Super Class;getModel is the name of the method that is created
//in the prototype and function(){return this.model;} is a method, and returning 
//this.model. The prototype contains another property __proto__ and it points
//object.prototype.object
//Similarly, Samsung and Lenova sub classes to have the same prototype features and
//points their own prototype property __proto__. But when inheritance code is created,
//the prototypes of the sub classes points the prototype of the super class.
//Thing to remember, we create inheritance among the prototypes of super class and 
//sub classes. In this way class inheritance is created.
Mobile.prototype.getModel = function(){
    return this.model;
};
//Sub Class also called a constructor
var Samsung = function(model, price){   
    this.model = model;
    this.price = price;
};

//Sub Class
var Lenovo = function(model){
    this.model = model;

};
//Writing Inhertiance Codes
//Creating inheritance sub class(Samsung) with super class(Mobile)
Samsung.prototype = Object.create(Mobile.prototype);
Samsung.prototype.constructor = Samsung;//resetting the constructor
//Now, the properties and method of super class is available for sub class.
//Samsung prototype accessible to Samsung only.
Samsung.prototype.getPrice=function(){
    return this.price;
};
//Creating inheritance sub class(Lenovo) with super class(Mobile)
Lenovo.prototype = Object.create(Mobile.prototype);
Lenovo.prototype.constructor = Lenovo;//resetting the constructor

//Creating objects
var phab2 = new Lenovo('Phab2', 4000 );
var galaxy = new Samsung('Galaxy', 3000);
/*An object 'galaxy' is created for Samsung sub class(constructor). The constructor 
has two parameters, model and price. In the code above two arguments 'Galaxy' and 
3000 are passed. from there they go to  'this.model = model; and this.price = price;'
Now, the getModel method is inherited from Mobile super class through 'model', we
have accessed through galaxy.getModel(). When galaxy.getModel is called 
the following method is called:

Mobile.prototype.getModel = function(){
    return this.model;
}
and whatever is in this.model will be displayed. i.e. galaxy
*/

console.log(galaxy.getModel());
console.log(phab2.getModel());
console.log(galaxy.getPrice());

//Creating a super class
var Mobile = function(){//function object of Mobile class and a property that points
    //the prototype
    this.a = 10;

}
Mobile.prototype.z = 30;//object of Mobile class

var Samsung = function(){
    Mobile.call(this);//Calling the parent class 'Mobile'
    this.b = 20;
}
//prototype inheritance
//syntax: child_class_name.prototype = Object.create(parent_class_name.prototype)
//and reset: child_class_name.prototype.constructor = Samsung
//sub class
Samsung.prototype = Object.create(Mobile.prototype);
Samsung.prototype.constructor = Samsung;


var obj1 = new Samsung();
//document.write(obj1.a)//Result is 'undefined' as class Samsung has no inheritance of
// class Mobile i.e. before calling the parent class.
document.write("1. Class inheritance from sub class Samsung: Accessing properties from parant class Mobile. The result is  "+ obj1.a+".<br>");
//Result is 10  as class Samsung has inheritance of
// class Mobile i.e. after calling the parent class Mobile.call(this).
document.write("2. Accesing properties from own class Samsung. The result is "+obj1.b+".<br>");
//accessing prototype  property
//document.write(obj1.z); //Accessing Mobile.prototype.z result is undefined.
//For this we have to write prototype inheritance code below class Samsung code
document.write("3. Accessing Mobile.prototype.z after creating prototype inheritance code. The result is "+obj1.z+".<br>")
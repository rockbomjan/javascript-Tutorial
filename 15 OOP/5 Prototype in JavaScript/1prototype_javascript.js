var Mobile = function(model_no)
{//The properties below are called instance members. It is visible
// inside the console.
    this.model = model_no;
    this.price = 3000;
};
//In javasript we can add public property outside the scope also 
//using prototype method.
//The syntax for prototype: class_name.prototype.key = 'value';
Mobile.prototype.color = 'White';//It is called prototype member.
//It is visible in the console under _proto_ category.
var samsung = new Mobile('Galaxy');
var nokia = new Mobile('3310');
//samsung.color = 'White';//The object must be declared first. Shouldn't
// write it above var samsung = new Mobile('Galaxy') or will have
//console error.
document.write("samsung color "+ samsung.color+"<br/>");
document.write("nokia color "+ nokia.color +"<br/>");
console.log(samsung)
console.log(nokia)


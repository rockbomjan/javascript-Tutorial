var Mobile = function(model_no)
{
    //instance member
    this.model = model_no;
    this.price = 3000;
};

var samsung = new Mobile('Galaxy');
var nokia = new Mobile('3310')
//Prototype:
//class_name.prototype.key = 'value';
//We can iterate instance member and prototype member using for()in loop.
//Using object.keys we can iterate only instance member.

Mobile.prototype.color = 'White';

document.write(Object.keys(samsung)+"<br/><br/>");//'O' of object must be uppercase.
//Only the instance member model and price is displayed and not prototype
//members.
//If we want to see the prototype members along with instance members
// we use for() in loop.
for(var key in samsung){
    document.write(key+":"+typeof samsung[key]+"<br/>");
    
    // if (typeof samsung[key]== "prototype"){
    //     document.write("prototype member of object samsung is "+key+".<br/>");
    // }
    // else
    // {
    //     document.write("Error: No such keys.<br/>")
    // }
    
    
        
}

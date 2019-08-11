//constructor
function Mobile(model_no)
{
    this.model = model_no;//model property
    this.color = 'white';//color property
    this.ram = '4GB';//ram property
    this.price = function()//price method
    {
        document.write(this.model+ ", Price Rs.3000<br>");
    };
}
//object

var samsung = new Mobile('Galaxy');
var nokia = new Mobile('3310')

//using for..in loop
for(var specs in samsung)//specs varible for property and method
{   
    if(typeof samsung[specs] !== 'function')
    {
        document.write(specs + ":"+ samsung[specs]+"<br>");
    };
}
document.write(Object.keys(samsung)+"<br>")//prints the keys inside the object
//constructor. 
    //without if condition the whole code of method function()//price method
    //{document.write(this.model+ ", Price Rs.3000<br>"); is printed.}   

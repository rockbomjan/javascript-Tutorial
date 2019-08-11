//Constructor
function Mobile(model_no)
{
    this.model = model_no;//property
    this.memory = 4;//property
}

//object
var samsung = new Mobile('Galaxy');
var nokia = new Mobile('3310');

//property check using typeof operator
if(typeof nokia.memory !== 'undefined')
{
    document.write('1. Available<br>');
}
else
{
    document.write("2. Doesn't exist.<br>" );
}
//poperty check using typeof operator
if(typeof nokia.price !== 'undefined')
{
    document.write('1. Available<br>');
}
else
{
    document.write("2. Doesn't exist.<br>" );
}

//using in operator
if('memory' in nokia)
{
    document.write('1. Available<br>');
}
else
{
    document.write("2. Doesn't exist.<br>" );
}

//using in operator
if('price' in nokia)
{
    document.write('1. Available<br>');
}
else
{
    document.write("2. Doesn't exist.<br>" );
}

//using in hasOwnPropety() method
if(nokia.hasOwnProperty('memory'))
{
    document.write('1. Available<br>');
}
else
{
    document.write("2. Doesn't exist.<br>" );
}

//using in hasOwnPropety() method
if(nokia.hasOwnProperty('color'))
{
    document.write('1. Available<br>');
}
else
{
    document.write("2. Doesn't exist.<br>" );
}

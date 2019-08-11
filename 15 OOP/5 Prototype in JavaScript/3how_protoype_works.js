function Mobile ()//It's a constructor.It will create two objects one 
//for the function and another for prototype.
{

}
console.log(Mobile);
console.log(Mobile.prototype)


var person = {
    first_name: 'Default',
    last_name: 'Default',
    get_full_name: function(){
        return this.first_name+' '+this.last_name;
    }

}

var john = {
    first_name:'Malcolm John',
    last_name:'Tamang'
}
/* Don't do this ever. For demo purposes only. It will affect the performance.
john.__proto__=person;//Setting proto for john. John inherits from person. If I try to access
properties and method that doesn't exit on john, it will go to person to
find out. If it is not in person, it will go to person.proto to find it 
there and on down the chain.
when I write the code [console.log(john.get_full_name())];//var john has 
no get_full_name method. So, it will go to its proto(john.__proto__ = person)
and to person and gets access to the get_full_name method. The result
is 'Malcolm John Tamang'
In the code 'this.first_name+' '+last_name', this refers to john and not
the person.
When I type the code 'console.log(john.first_name), I get the result 'john'
why not default because of the prototype chain. It looks for the property
in John and finds and stops. It doesn't go further search for the prototype.
This 'first_name:'Malcolm John', hides the first_name: 'Default', in the
prototype and that is because javascript engine works on the top of the chain
and stops the first time when it finds what it is looking for.
Let's add a new object 'jane'.
var jane = {
    first_name: 'jane'
} 
Set but never do this, just make you understand
jane.__proto__ = person;//setting jane object to the proto of the same 
person object. So, jane.__proto__ and john__proto__ are pointing at the
same spot in the memory where the person object lives.
Now,
console.log(jane.get_full_name());To get_full_name method we require
this.first_name+' '+this.last_name;
Whenever we request a property, it searches the prototype chain starting with
this. pointing at jane. So, it will search for the first name and the last
name on the jane object and moves down on the prototype chain. Jane has only
first name property. So, what full jane will get. The result is
jane Default.
How it happens? The get_full_name() function is invoked. It searches for
first name on jane and finds it and next, it searches for the last name
and doesn't find it and looks on the prototype(jane.__proto__ = person;) 
and it's person and finds last name there. i.e. last_name: 'Default', So, we
get jane Default.
*/



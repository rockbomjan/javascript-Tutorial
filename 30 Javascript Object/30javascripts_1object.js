//Creating an object
var person = {
first_name: "Rose",
last_name: "Tamang",
age: 90,
profession: "webdeveloper"
}

document.getElementById('demo1').innerHTML = "1. First Name: "+person.first_name;
document.getElementById('demo2').innerHTML = "2. Last Name: "+person.last_name;
document.getElementById('demo3').innerHTML = "3. Age: "+person.age;
document.getElementById('demo4').innerHTML = "4. Profession: "+person.profession;
console.log(person);

//Changing the property name value
person.profession = "Youtuber";
document.getElementById('demo5').innerHTML = "6. (property value changed) Profession: "+person.profession;
console.log(person);
//Adding a new property name
person.interest = "Music, Karate, Computer Programming, WebDevelopment, PC/Mobile Gaming"
document.getElementById('demo6').innerHTML = "7. (adding new property) Hobby: "+person.interest;
console.log(person);
//Delete property name
delete person.interest;
console.log(person);

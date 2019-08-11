var a = document.getElementById("demo").innerHTML;
//We get access to text with Id through .innerHTML
document.write("1 "+ a+"<br>");
//We need to pass an index number in order to access elements with class name.
var b = document.getElementsByClassName("cls")[0].innerHTML;
document.write("2 "+b+"<br>");
//Accessing elements using TagName "li" for paragraph
var c = document.getElementsByTagName("li");
document.write(c+"<br>");
console.log(c);
var d = document.querySelector("p").innerHTML;
document.write(d);

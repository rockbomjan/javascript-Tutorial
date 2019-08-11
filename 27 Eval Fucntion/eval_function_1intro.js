var x = 10;
var y = 20;
var a = eval("x*y")+"<br>";
var b = eval("2*2")+"<br>";
var c = eval("x+2")+"<br>";
var res = a+b+c;
console.log(res);//doesn't add but displays each of the value separately
console.log(eval('2+2')=== eval('4'));
document.getElementById("demo").innerHTML = res
document.getElementById("emo").innerHTML = (eval('2+2')=== eval('4'));//boolean values

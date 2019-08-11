//Properties and Method
var string1 = "Welcome to my channel";
var string2 = " Please love me.";
function myfunc1(){
    var a = string1.length;
    /*document.getElementById("demo").innerhtml = string1;//html is in lower case.
    So, it created an error.*/
    document.getElementById("demo1").innerHTML = "Number of characters in: 'Welcome to my channel' is "+a;
}

function myfunc2(){
    var b = string1.charAt('8');//counts index no
    document.getElementById("demo2").innerHTML = "The character at 8th position is: "+b;
    
}

function myfunc3(){
    var c = string1.indexOf('m');//the preceding letter in a sentence or the first 
    //letter of word is counted for index no even if you pass a string of word
    document.getElementById("demo3").innerHTML = "The index of 'm' is: "+c;
}

function myfunc4(){
    var d = string1.lastIndexOf('m');//counts the last index of a repeated or non
    //repeated letter
    document.getElementById("demo4").innerHTML = "The last index of 'm' is: "+d;
}

function myfunc5(){
    var e = string1.replace("my", "Rose's");
    document.getElementById("demo5").innerHTML = string1;
    document.getElementById("demo6").innerHTML = "'my' is replaced: "+e;
}
function myfunc6(){
    var f = string1.toUpperCase();
    document.getElementById("demo7").innerHTML = "uppercase: "+f;
    var g = string1.toLowerCase();
    document.getElementById("demo8").innerHTML = "lowercase: "+g;
}

function myfunc7(){
    var h = string1.concat(string2);
    document.getElementById("demo9").innerHTML = "concat string1 with string2: "+h;
    
}
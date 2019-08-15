// Printing number from 1 to 100.
function loop_textarea(){
    var i = 1;
   
    while (i <=100){
        document.getElementById("demo1").value += "\n no. " + i;
        console.log(i);
        i++;
    }

}

function Fizz(){
    var j = 1;
    while(j<=100){
        if ((j%3) == 0){
            document.getElementById("demo2").value += "\nFizz";
        }
        else{
            document.getElementById("demo2").value += "\n no. " + j;
        }
        j++;
    }
    
}       

function Buzz(){
    var k = 1;
    while(k<=100){
        if ((k%5) == 0){
            document.getElementById("demo3").value += "\nBuzz";
        }
        else{
            document.getElementById("demo3").value += "\n no. " + k;
        }
        k++;
    }
    
}   

function FizzBuzz(){
    var k = 1;
    while(k<=100){
        if ((k%3) == 0 || (k%5)==0){
            document.getElementById("demo4").value += "\nFizzBuzz";
        }
        else{
            document.getElementById("demo4").value += "\n no. " + k;
        }
        k++;
    }
    
}  

loop_textarea();
Fizz();
Buzz();
FizzBuzz();
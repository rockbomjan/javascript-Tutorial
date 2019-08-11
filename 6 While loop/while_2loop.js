//Multiplication table
function loop(){
    var i = 1;
    var x = document.getElementById("num").value;
 
    //document.getElementById("result").value = result;
    
    while(i<=10){
        
        document.getElementById("result").value +="\n" + x +" x "+ i + " = "+ i*x;
            i++;
    }
}
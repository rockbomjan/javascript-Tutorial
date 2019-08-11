var set_time = setTimeout(myfunc, 3000);//myfunc is a function, 
//3000 millisecond = 3sec

function myfunc(){

    //document.write("You've set the timer out after 3 seconds.");
 document.getElementById("p1").innerHTML = "You have set time out after 3 seconds"; 
  
   
}

function clear_time(){
    clearInterval(set_time);
}
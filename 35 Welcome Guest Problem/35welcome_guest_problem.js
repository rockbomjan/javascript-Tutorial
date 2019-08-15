var guest_name = ['guest1', 'guest2', 'guest3', 'guest4', 'guest5', 'guest6',
 'guest7', 'guest8', 'guest9', 'guest10'];

 var name = prompt("What is your name?");
 var check_name = guest_name.includes(name);
 if(check_name == true){
     document.getElementById("demo").value = "Welcome "+ name + "! You are invited.";
 }
 else{
     document.getElementById("demo").value = "Sorry " + name + "! You are not invited.";
     
 }
//  console.log(guest_name)


function start(){
    var r = confirm("Want to assign your name?");
    if (r == true){
    var name = prompt("What's your name?");  
        if (name == ''){
            alert("Please enter your name!");
            return start();
        }
        else if(name == null){
            alert("Thanks! No worries!");
        }
        else if (name != null || name != ''){
            document.write("Your name is "+name+".");
        }
        
    
    }
    else{
        alert("Thanks! No worries!");
    
    }
}    


start();
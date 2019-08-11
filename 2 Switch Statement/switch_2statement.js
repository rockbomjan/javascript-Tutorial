/*function setValues(){
    var a = Number(document.getElementById("a").value);
    var b = Number(document.getElementById("b").value);
}
*/
function calc(){
    var a = Number(document.getElementById("a").value);
    var b = Number(document.getElementById("b").value);
    var choice = document.getElementById("choice").value;
    
switch(choice){
        case "Add": 
                    var sum = a+b;
                    document.getElementById("result").value = "The sum of "+a+" and "+b+" is: "+sum+".";
                    break;
        
        case "Subtract":
                    var difference = a-b;
                    document.getElementById("result").value = "The difference of "+a+" and "+b+" is: "+ difference+".";
                    break;
        
        case "Multiply":
                    var product = a*b;
                    document.getElementById("result").value = "The product of "+a+" and "+b+" is: "+product+".";
                    break;
        
        case "Divide":
                    var divident = a/b;
                    document.getElementById("result").value = "The divident of "+a+" by "+b+" is: "+divident+".";
                    break;
        default:
                    alert("Please insert only one the three choices with the initial letter in upper case. Thank you!!");
        
    }

}
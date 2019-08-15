// function header(){
//     document.write("<h1>Javascript: Love Calculator</h1>");
// }
// header();

function checkloveper(){
    var txt1 = document.getElementById("demo1").value;
    var txt2 = document.getElementById("demo2").value;
    
    if (txt1 == "" || txt2 == ""){
        alert("Please enter your name!")
    }
    else if(txt1.length <=2 || txt2.length <=2){
        alert("Minimum three characters name required!!")
    }
    // else if(typeof(txt1) == 'number' || typeof(txt2)=='number'){
    //else if(isNaN != (txt1)||isNaN != (txt2)){
    else if(isNaN(txt1)== true ||isNaN(txt2)== true){    
        var lovedata = Math.random() * 100;
        lovedata = Math.floor(lovedata);
        document.getElementById("demo3").value = lovedata+"%"; 
        
    }
    else{
        alert("Numbers are not allowed!")
    }
     
    
    
}


var input = document.getElementById('demo1') || document.getElementById('demo2');
input.onkeydown = function(){
    var key = event.keyCode || event.charCode;

    if( key == 8 || key == 46 ){
    document.getElementById("demo3").value = '';
}
};



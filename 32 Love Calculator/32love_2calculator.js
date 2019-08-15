// function header(){
//     document.write("<h1>Javascript: Love Calculator</h1>");
// }
// header();

function checkloveper(){
    var txt1 = document.getElementById("demo1").value;
    var txt2 = document.getElementById("demo2").value;
    if(((txt1.length) ==2 || (txt1.length) == 1) || ((txt2.length) == 2 || (txt2.length) == 1)){
        alert("Please insert at least three characters!!")
    }
    else if (txt1 == "" || txt2 == "") {
        alert("Loved ones' name missing!!")
        
    }
    else if ((txt1 && txt2)) {
        var lovedata = Math.random() * 100;
        lovedata = Math.floor(lovedata);
        document.getElementById("demo3").value = lovedata+"%"; 
    }
     
    
    
}


var input = document.getElementById('demo1') || document.getElementById('demo2');
input.onkeydown = function(){
    var key = event.keyCode || event.charCode;

    if( key == 8 || key == 46 ){
    document.getElementById("demo3").value = '';
}
};



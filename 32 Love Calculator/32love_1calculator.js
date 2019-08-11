// function header(){
//     document.write("<h1>Javascript: Love Calculator</h1>");
// }
// header();

function checkloveper(){
    var txt1 = document.getElementById("demo1").value;
    var txt2 = document.getElementById("demo2").value;
    if ((txt1 && txt2)) {
        var lovedata = Math.random() * 100;
        lovedata = Math.floor(lovedata);
        document.getElementById("demo3").value = lovedata+"%"; 
    }
    else {
        alert("Loved ones' name missing!!")
        
    }
    
}


var input = document.getElementById('demo1') || document.getElementById('demo2');
input.onkeydown = function(){
    var key = event.keyCode || event.charCode;

    if( key == 8 || key == 46 ){
    document.getElementById("demo3").value = '';
}
};


// function clear_txtbx(){//this function worked
     
//     document.getElementById("demo3").value = "Love Percentage"; 
     
// }

// function clear_textbx(){
//     var txt1 = document.getElementById("demo1").value;
//     var txt2 = document.getElementById("demo2").value;
//     if(txt1 || txt2){
//         document.getElementById("demo3").value = "Love Percentage";
//     }
// }

// clear_textbx();
//Refreshing the page after 10 seconds
// function timedRefresh(timeoutPeriod) {
// 	setTimeout("location.reload(true);",timeoutPeriod);
// }

// timedRefresh(10000);
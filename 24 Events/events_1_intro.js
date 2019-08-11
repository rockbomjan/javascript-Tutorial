function myfacebook(){
    document.body.style.backgroundColor = '#3b5999';

}

function mytwitter(){
    document.body.style.backgroundColor = '#00aced';
}


function mywhatsapp(){
    document.body.style.backgroundColor = '#25D366';
}

function myyoutube(){
    document.body.style.backgroundColor = '#cd201f';
}

// function keyCode(event) {
//     var x = event.keyCode;
//     for(i = 1;i>=100;i++){
//         if (x == i) {
//             alert ("You pressed the Escape key!");
//         }
//     }
//   }
function uniCharCode(event) {
    var char = event.which || event.keyCode;
    document.getElementById("demo1").innerHTML = "Unicode CHARACTER code: " + char;
  }
  
  function uniKeyCode(event) {
    var key = event.keyCode;
    document.getElementById("demo2").innerHTML = "Unicode KEY code: " + key;
  }
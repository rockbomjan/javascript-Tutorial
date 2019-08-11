var clock = setInterval(clocktiming, 1000)//1 sec = 1000 millisecond

function clocktiming(){
    var date = new Date();
    var local_time = date.toLocaleTimeString();
    //document.write(local_time); //Displays continuous time at an interval of 1 sec.
    document.getElementById("demo").innerHTML = local_time;
}

function restart_clock(){
    clock = setInterval(clocktiming, 1000);
}
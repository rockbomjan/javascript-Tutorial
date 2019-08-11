//window object location:
document.write("I am working on:<br>" + window.location.href+"<br>");
document.write("The hostname is:<br>" + window.location.hostname+"<br>");
document.write("The pathname is:<br>" + window.location.pathname+"<br>");
document.write("The protocol is:<br>" + window.location.protocol+"<br>");

function assign(){
    window.location.assign("https://youtube.com/"); //window and not windows
}

function job(){
    window.location = "https://jobsnepal.com/";
}
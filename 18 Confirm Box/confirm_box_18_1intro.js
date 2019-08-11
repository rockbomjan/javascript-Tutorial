function myfun(){
    //window.location.reload();
    var user_confirmation = confirm("Would like to visit our website?");
    if(user_confirmation == true){
        window.open("https://www.facebook.com/");
        document.getElementById("demo").innerHTML ="Directed to www.facebook.com";
        return true;
    }
    else{
        document.getElementById("demo").innerHTML ="The user doesn't want to visit www.facebook.com.";
        return false;
    }
}

function myfunc(idname){ //idname is passed as a parameter
    var backup = document.body.innerHTML;//Storing the whole body page to a variable
    var divcontent = document.getElementById(idname).innerHTML;//storing a particular
    //portion of a body with a passed id to a variable
    document.body.innerHTML = divcontent;//Here, divcontent, the portion of the body
    //is stored to document.body.innerHtml skipping other portion of the body 
    window.print();//Now the value of document.body.innerHtml is printed. In fact the
    //the divcontent. Thing to remember that window.print() actually means to pring
    //document.body.innerHTML
    document.body.innerHTML = backup;//Now, again the whole page stored to the 
    // variable backup for the next event.

}

function print_page(){
    window.print();//gives the value of document.body.innerHtml
}
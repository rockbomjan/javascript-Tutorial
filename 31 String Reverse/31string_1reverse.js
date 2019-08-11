function reverseString(){
    var str = document.getElementById("demo").value;//Storing the content of text box1.
    //alert(str);//Checking if it's working or not.
    //Suppose str = "Roses"
    var new_str = '';//new_str = '' i.e null
    for (var i = str.length-1; i>=0; i--){//For the first time i-- is not executed.
    //1st run: i = 5-1;4>=0;
    //    i = 4;4>=0;
    // so, i = 4;
        new_str += str[i];
        // new_str = new_str + str[i]
        // new_str = '' + str[4];
        // new_str = '' + s;
        // new_str = s;
        // after this the loop will jump to i-- i.e 4-- = 3 which is str[3] = 'e'
    }
    document.getElementById('reversedata').value = new_str;//output:s
}
//output: sesoR
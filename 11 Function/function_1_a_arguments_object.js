function disp(name1, name2, name3, name4)
{
    arguments[4] = "Namlange";
    //document.write(name);
    document.write("<br>"+arguments[0]);
    document.write("<br>"+arguments[1]);
    document.write("<br>"+arguments[2]);
    document.write("<br>"+arguments[3]);
    document.write("<br>"+arguments[4]);
    //number of arguments
    //document.write("<br>"+"Number of arguments in the function:"+(arguments.length));
    var l = arguments.length;
    document.write("<br>"+"Number of arguments in the function: "+ l);
}  
disp("Rose", "Lama","Bomjan","Rock");//index 3 will be undefined.
//index 4 has the predefined value in the function as 'Namlange'
//The length of the arguments is displayed even though if we do
// not pass the parameter.
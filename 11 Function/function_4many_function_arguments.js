function add(a,b)
{   
    document.write("<br>The two values below are assigned to a and b in the function parameter.")
    document.write("<br>" + 'A: '+a+' B: '+b);
    document.write("<br>The two extra values below are accessed using arguments object.")
    document.write("<br>"+' C: '+arguments[2]+' D: '+arguments[3]);

}
add(10,20,30,40);
//Here, 10 and 20 will be assigned to a, b parameters in the 
//function argument.
//Therefore, in order to access 30 and 40, we can use the arguments
// object.

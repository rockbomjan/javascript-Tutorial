function disp(name1, name2, name3, name4)
{
    for(var i = 0; i<arguments.length;i++)
    {
        document.write(arguments[i]+ "  ");
    }
}  
disp("Rose", "Lama","Bomjan","Rock");//index 3 will be undefined.
//index 4 has the predefined value in the function as 'Namlange'
//The length of the arguments is displayed even though if we do
// not pass the parameter.
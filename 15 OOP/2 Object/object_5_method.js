var fees = {Rahul:100, Sonam:500};
document.write(fees.Rahul+ " "+ fees['Sonam']+"<br>");
//Adding property in the middle of the program
fees.Irene = 800;// or fees['Irene']= 800
document.write(fees.Rahul+ " "+ fees['Sonam'] +" "+ fees['Irene']+"<br>");
//Adding method in the middle of the program
fees.show = function(){};//This method is added to the arguments of fees in the
//first line.
console.log(fees);



 

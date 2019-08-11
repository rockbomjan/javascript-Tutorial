var fees = {Rahul:100, Sonam:500};
document.write(fees.Rahul+ " "+ fees['Sonam']+"<br>");
delete fees.Rahul;
document.write(fees.Rahul+ " "+ fees['Sonam']+"<br>");//Rahul becomes undefined
console.log(fees);



 

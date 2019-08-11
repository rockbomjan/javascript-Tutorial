function add(a,b, c = 2)
{   
    document.write("<br>The two values below are assigned to a and b in the function parameter.");
    document.write("<br>They are " + 'A: '+a+' and B: '+b+ " . ");
    document.write("<br>The default value of C: is " + c+ " . ");
    document.write("<br> The Sum is " +(a+b+c)+ " . ");
}

add(4,5)
document.write('<br>-------------------------------------------------------------------------------------------------');

function subtract(a,b = 50)
{   
    document.write("<br>The value below is assigned to a in the function parameter.");
    document.write("<br>It is " + 'A: '+a+ " . ");
    document.write("<br>The default value of B: is " + b+ " . ");
    document.write("<br> The difference of A and B is " +(a-b)+ " . ");
}

subtract(100)
document.write('<br>-------------------------------------------------------------------------------------------------');

function un_defined(a,b)
{   
    document.write("<br>The value below is assigned to a in the function parameter.");
    document.write("<br>It is " + 'A: '+a+ " . ");
    document.write("<br>The value of B: is " + b+ " . ");
    
}

un_defined(100)
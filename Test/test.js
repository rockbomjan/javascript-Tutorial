//We use for loop when we know the fixed number of times the loop will
// run.

// for(i = 1; i<=10; i++)
// {   
//     document.write("Multiplication Table of "+ i+ "<br>");
//     document.write("<br>");

//     for(j = 1; j<=10; j++)
//         {
//         document.write(i +"x"+J+" = " + i*j + "<br>");
//         }
// }

for(i=1; i<=10; i++)
{
    document.write("<br>");
    document.write("Multiplication Table of "+ i);
    document.write("<br>");
    
    for(j=1; j<=10; j++)
    {
        document.write(i+" x "+j+"="+j*i);
        document.write("<br>");
    }

}

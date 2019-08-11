var i = 0;
while(i<5)
{   document.write("****")
    document.write("<br>"+i+" Outer loop"+"<br>");
    document.write("****")
    i++;
    
    var j = 0;
    while(j<5)
    {
        document.write("<br>" + j+" Inner loop" + "<br>");
        j++;
        
    }
}
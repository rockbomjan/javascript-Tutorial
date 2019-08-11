var i = 0;
do{
    document.write("<strong>Outer loop </strong>");
    document.write(i);
    i++;
    document.write("<br>");
        var j = 0;
        do
        {
            
            document.write("Inner loop ");
            document.write(j);
            j++;
            document.write("<br>")
        }
        while(j<5);
    }
while(i<5);
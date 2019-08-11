//The while loop keeps repeating an action until an associated
// condition returns false.
var i = 0; //initialization of variable
while(i<100)
{
        document.write(i + ", ");
        i++;
}
document.write("<br>");
var j = 0;
while(true)
{
    if (j == 5)
        break;
        document.write(j + ",   ");
        j++;
}
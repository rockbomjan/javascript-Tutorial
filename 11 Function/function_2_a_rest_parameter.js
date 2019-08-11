function show_1(...args)
{
    document.write("<br>An array of arguments:<br> "+args);
    document.write("<br>The value in index no 4 in the array of rest parameter is "+args[4])
}

function show_2(a,...nums)
{
    document.write("<br>A simple parameter along with an array of rest parameters. Here the value '22' is skipped. <br> "+nums);
    document.write("<br>The value "+a+" is assigned to the simple parameter 'a'.")
}
show_1(10, 20, 30, 40, 50, 60, 70)
show_2(22, 32, 42)
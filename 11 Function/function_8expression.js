my_func();//Calling function before definning
function my_func()
{
    document.write("Example of function declaration. It is called before defining.Here the code hoisting works.<br>");
    document.write("Rose Tamang<br>");
}

var disp = function my_func()
        {
            document.write("Example of function expression.We cannot call it before defining it. Code hoisting doesn't work.Error disp is not a function.<br>");
            document.write("Rose Lama<br>");
        };//function expression should be closed with a semi colon
disp();
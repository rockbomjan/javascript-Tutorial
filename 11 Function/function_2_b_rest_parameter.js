//Rest parameters
function restShow(a,...args)
{
    console.log("a: "+a);
    console.log(args);
}
restShow(10,20,30,40,50,60,70)
//Arguments object
function show(a)
{
    console.log("a: "+a);
    console.log(arguments);
}

show(10,20,30,40,50,60,70)
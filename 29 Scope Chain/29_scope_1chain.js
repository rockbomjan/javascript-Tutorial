onload = function(){
document.font_size.document.body.style.fontSize = "15pt";
}

var x = 12;//global variable
var y1 = "Welcome to my channel!!";//global variable
console.log(x);
/*********************************************************************************/
f1();
function f1(){
    debugger;
    var localvarf1 = 'This is a local variable in f1().';//local variable
    var y2 = 'This a local variable y2 inside f1()';//local variable
    console.log(x);

    f2();
    function f2(){
        debugger;
        var localvarf1 = 'This is a local variable as same as in f1().';
        var y3 = 'This a local variable y3 inside f2()';//local variable
        console.log(x);/*The scope chain jumps to global variable value. As per the execution
        context, the value will be searched in the scope of f2() and then in the scope
        of f1() and then moves to the global variable.*/
    

        f3();       
        function f3(){
            debugger;
            var localvarf1 = 'This is a local variable as same as in f1() and f2()';
            var y4 = 'This a local variable y4 inside f3()';//local variable
            //climb up the scope chain
            console.log(x);
            console.log(y1);
            console.log(y2);
            console.log(y3);
            console.log(y4);
        }
    }

}


/*Output for console.log(x): 
12
12
12 
*/
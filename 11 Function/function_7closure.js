var i = 10; // parent scope <br>
            function show()
            {
                var j = 20;
                document.write("Accessing both the scope. i.e. inner and outer<br>");
                document.write(j+"<br>");
                document.write(i+"<br>"); //Can access the parent scope(outside)
                // Here closure is created between the two scope;
            }
            show();
            "<br>"
            document.write("******************Example of Nested Function (Closure Function) ************************************<br>");
            function outer_func()
            {
                var x = "x is an outer function.";
                document.write(x+"<br>");
                document.write("Trying to access the variable of inner function but not possible.<br>");
                //document.write(y+"<br>");
                    function inner_func()
                    {
                        var y = "y is an inner function";
                        document.write(y+"<br>");
                        document.write("Accessing variable of outer function by the inner function and closure function is created. Inner function can access the global scope(variable),too.<br>");
                        document.write(y+"<br>");
                    }
                    inner_func()
                    document.write(y);//Error in the console:y is not defined.
            }
            outer_func()
            
document.write("eg: of IIFE function<br>");
(function () {document.write("Hello<br>");})();
(function() {var a = 10; document.write(a+"<br>");})();
//The variable a cannot be accessed from outside. Error: a is not defined
(function(a, b) {document.write(a+" ,"+b+"<br>");})(50,70);
function Mobile() 
{
    this.model = '3310';//this keyword points the new instance object samsung
    //It means that the new object from this is pointed by the 'this' keyword.
    this.price = function(){
        document.write("Model: "+this.model + " Price Rs 3000<br>");
    };
}

var samsung = new Mobile();
samsung.price()//price method is called with the help of instance object samsung.
document.write(samsung.model+"<br>");
var lg = new Mobile();
lg.price()



document.write("<br>Constructor with parameter<br>");
function Mobile1(model_no) 
{
    this.model = model_no;//this keyword points the new instance object samsung
    //It means that the new object from this is pointed by the 'this' keyword.
    this.price = function(){
        document.write("Model: "+this.model + " Price Rs 3000<br>");
    };
}

var cell1 = new Mobile1('Nokia');
cell1.price();
var cell2 = new Mobile1('Sony');
cell2.price();

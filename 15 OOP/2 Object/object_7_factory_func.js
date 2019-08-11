function mobile1() 
{
    return{
        model:"Galaxy",
        price: function(){return("Price:Rs.3000");

        }
    };
}


var samsung = mobile1();
document.write("Model: "+samsung.model+ "<br>"+ samsung.price());
var LG = mobile1();
document.write("<br>Model: "+LG.model+ "<br>"+ LG.price());

/*Function factory with parameter*/
document.write("<br>Function factory with parameter<br>");

function mobile2(model_type)
{
    return{
        model:model_type,
        price: function(){return("Price:Rs.3000");

        }
    };
}

var nokia = mobile2(6970)
document.write("nokia Model: "+nokia.model+"<br>");
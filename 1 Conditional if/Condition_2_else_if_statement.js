function result()
{
var marks = prompt("Enter your marks in mathematics: ")
marks = parseFloat(marks)

    if(marks == 40)
    {
    var markspara = document.getElementById(marks1);
    markspara.textContent = "Result: Passed";
    }
    else if(marks >= 60)
    {
    var markspara = document.getElementById(marks1);
    markspara.textContent = "Grade: C";
    }

    else if(marks >= 80)
    {
    var markspara = document.getElementById(marks1);
    markspara.textContent = "Grade: B";
    }
    else if(marks >=81)
    {
    var markspara = document.getElementById(marks1);
    markspara.textContent = "Grade: A";
    }
    else if(marks<40)
    {
    var markspara = document.getElementById(marks1);
    markspara.textContent = "Result: Failed";
    }
}
document.getElementById("result").addEventListener("click", result);
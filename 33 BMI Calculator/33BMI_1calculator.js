function getbmivalue(){
var weight = document.getElementById("weight").value;
var height = document.getElementById("height").value;
height = (height * 12) * 0.025 ; //converting inches to metre
// var bmi_value = weight/(height*height); or
var bmi_value = weight/Math.pow(height, 2);//base = height and power = 2
document.getElementById("bmi_value").value = Math.round(bmi_value);

}

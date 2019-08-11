function calc()
{
var length = prompt("Enter length: ");
length = parseFloat(length);
var width = prompt("Enter width: ");
width = parseFloat(width);

var area = length * width;
var perimeter = (2* length) + (2 * width);

var lengthpara = document.getElementById('length');
var widthpara = document.getElementById('width');
var areapara = document.getElementById('area');
var perimeterpara = document.getElementById('perimeter');

lengthpara.textContent = "length: " + length+"m";
widthpara.textContent = "width: " + width+"m";
areapara.textContent = "Area: " + area+"sq.m";
perimeterpara.textContent = "Perimeter: " + perimeter+"m";
}
document.getElementById("calc").addEventListener("click", calc);
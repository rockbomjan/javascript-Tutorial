var planets = [" Mercury", " Venus", " Earth", " Mars", " Jupiter", " Saturn", " Neptune", 
" Uranus", " Pluto"]
var len = planets.length;
document.write("1. Length of the array 'planets': "+ len+"<br>");
//Array starts with index no. 0.
//Lenght starts with no. 1.
document.write("2. Sorting array 'planets': "+ planets.sort()+"<br>");
document.write("3. pop method removes the last element in the arrray. "+planets.pop()+"<br>");
document.write("4. Array after applying pop method: "+ planets + "<br>")
document.write("5. push method adds a new element to the end of array. "+planets.push(" Venus")+"<br>");
document.write("6. Array after applying push method: "+ planets + "<br>")
document.write("7. shift method removes the desired element from the array. "+planets.shift(" Earth")+"<br>");
document.write("8. Array after applying shift method: "+ planets + "<br>")
document.write("9. reverse method re-arranges the array in order of last to first. "+planets.reverse()+"<br>");
document.write("10.isArray method checks if the list is an array or not. "+Array.isArray(planets)+"<br>");
document.write("11.concat method joins two or more list of arrays. "+friends.concat(planets)+"<br>");
document.write("12.indexOf method searches the array for the specified item, and return its position. "+ planets.indexOf("Uranus")+"<br>");
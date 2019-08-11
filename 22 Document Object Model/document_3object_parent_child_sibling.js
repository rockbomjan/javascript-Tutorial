// Accessing children of a node(body)
var child = document.body.children;
console.log(child);

// add a new child in the body using DOM method.
var para = document.createElement("p");
var textNode = document.createTextNode("This paragraph was created using DOM method.");
para.appendChild(textNode);
console.log(para);

//Displaying the paragraph in the body.
document.body.appendChild(para);

//Accessing first child and last child
var list = document.querySelector('ul');
console.log(list);

//Accessing first child of ul
console.log(list.firstChild);

//Accessing last child of ul
console.log(list.lastChild);

//Accessing siblings of p
var first_sibling = demo.nextElementSibling;// first p's id="demo"
var first_sibling = demo.nextElementSibling.nextElementSibling;
//for next sibling 
console.log(first_sibling);

//finding a parent of 'ul'
console.log(list.parentNode);
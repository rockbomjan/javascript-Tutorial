// let cont_a = document.querySelector('.no');
// console.log(cont_a);
// let cont_b = document.querySelector('.container');
// console.log(cont_b);
// //child
// console.log(cont_b.childNodes);//displays all the nodes including text,comment,
// //new lines
// console.log(cont_b.children);

// let nodeName = cont_b.childNodes[7].nodeName;
// console.log(nodeName);//Output: DIV

// let nodeType_a = cont_b.childNodes[5].nodeType;
// console.log(nodeType_a);//Output: 1

// let nodeType_b = cont_b.childNodes[5];
// console.log(nodeType_b); //Output:<div class="child">Child 1</div>
/* Node Types:
1. element
2. Attribute
3. Text Node
8. Comment
9. document
10.docType 
*/
// let container_a = document.querySelector('div.container');
// console.log(container_a.children[4].children[3]);
//parent
let cont_c = document.querySelector('div.container');
console.log(cont_c.firstElementChild.parentNode);
console.log(cont_c.firstElementChild.nextSibling);//Output texts or comments
console.log(cont_c.firstElementChild.nextElementSibling);
console.log(cont_c.firstElementChild.nextElementSibling.nextElementSibling);
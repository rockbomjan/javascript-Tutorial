// Element Selectors
//             1.  Suppose we want to select an element and grab it with an id
//                 in an html page.
//             2.  We have two types of selectors. a. Single Element selector
//                 b. Multi element selector

//*******************1. Single Element Selector*******************
console.log("1.Single Element Selector");
let element_a = document.getElementById("myfirst");
console.log(element_a);//Output: <div id="myfirst" class="child_red_good"></div>
element_b = element_a.className;
console.log(element_b);//Output: child_red_good
element_c = element_a.parentNode;
console.log(element_c);
element_d = element_a.childNodes;
console.log(element_d);

//Changing style color(css)
element_a.style.color = "green";//Output: text is green color
element_a.style.backgroundColor = "#2b5876";//Output: text is green color
//grabbing 
console.log(element_a.style.color);

//Changing inner text:id: myfirst class:child_red_good
element_a.innerText = "Welcome to our fresh page!!";
//grabbing 
console.log(element_a.innerText);

//Changing inner html:
element_a.innerHTML = '<b>Welcome to our free page!!</b>'//Output: bold senetence
//grabbing 
console.log(element_a.innerHTML);
console.log("2.Single Element Selector");
//*******************/2. Single Element Selector*************************
//querySelector
console.log("querySelector");
let sel_a = document.querySelector('#myfirst');//# for id name
console.log(sel_a);
let sel_b = document.querySelector(".child");
console.log(sel_b);
let sel_c = document.querySelector("div");
console.log(sel_c);
sel_c.style.color = "pink";//All the divs are pink in color


//*******************Multi Elements Selector*******************
console.log("3. Multi Elements Selector");
let element2 = document.getElementsByClassName("child");
console.log(element2);
console.log(element2[4]);//Output 5th element

let element2_a = document.getElementsByTagName('h2');
console.log(element2_a);

let element2_b = document.getElementsByTagName('div');
console.log(element2_b);

//Iterating
console.log("4. Iterating Elements")
Array.from(element2_b).forEach(element =>{
    console.log(element);
    element.style.color = "yellow";//The elements becomes yellow color

})

//**********************OR*******************************************
// for(let index = 0; index<element2_b.length;index++){
//     const element = element2_b[index];
//     console.log(element);
// }
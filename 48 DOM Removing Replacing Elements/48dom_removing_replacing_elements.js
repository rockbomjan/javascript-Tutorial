/****************Creating Element **********************/
let element_a = document.createElement("li");
element_a.className = 'child';
element_a.id = 'createdID';
element_a.setAttribute('title', 'created_title');

/*Writing text to created li*/
// element_a.innerText = 'Created from javascript code';
//If you want to make the text bold use innerHTML method
element_a.innerHTML = '<b>Created from javascript code</b>';
console.log(element_a);

/*******************Other Way**********************************/
/*Writing text to created li*/
let element_b = document.createElement("li");
element_b.className = 'child';
let text_a = document.createTextNode('I am a text node created from javascript')
element_b.appendChild(text_a);

//Existing ul
let ul_a = document.querySelector('ul.this_ul');
console.log(ul_a);
ul_a.appendChild(element_a);//attaching element_a to the existing ul whose class is
//this_ul
ul_a.appendChild(element_b);//attaching element_b to the existing ul whose class is
//this_ul

/********************Replacing Elements***************************/
let element_c = document.createElement('h3');
element_c.id = "element_c";
element_c.className = "element_c";
let text_b = document.createTextNode('I am created to replace element b');
element_c.append(text_b);
element_b.replaceWith(element_c);

let my_ul = document.getElementById('my_ul');
my_ul.replaceChild(element_c, document.getElementById('child3'))
my_ul.removeChild(document.getElementById('child5'));

console.log('Topic: getAttribute and hasAttribute')
let attribute_a = my_ul.getAttribute('id');
console.log(my_ul, attribute_a);
console.log(attribute_a)

let attribute_b = my_ul.hasAttribute('class');
console.log(my_ul,attribute_b);
console.log(attribute_b);

let attribute_c = my_ul.hasAttribute('href');
console.log(attribute_c);

let element_d = document.createElement('h2');
element_d.id = "element_d";
element_d.className = "class_element_d";
let text_c = document.createTextNode('I am element_d created');
element_d.append(text_c);
console.log(element_d);

let element_e = document.createElement('h2');
element_e.id = "element_e";
element_e.className = "class_element_e";
let text_d = document.createTextNode('I am element_e created');
element_e.append(text_d);
element_e.removeAttribute('class');
console.log('class attribute is removed from element_e');
console.log(element_e);

/**************************To open image in a new window********************/
function test(element) {
    var newTab = window.open();
    setTimeout(function() {
        newTab.document.body.innerHTML = element.innerHTML; }, 500);
    return false;
}
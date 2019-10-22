//This has to be worked out in the console. Hold Shift and press enter to avoid
//the execution of javascript
// right click and choose format document to align the codes
let str1 = 'python';
let links = document.links;
console.log(links);
let href;//variable created
Array.from(links).forEach(function (element) {
    href = element.href;
    if(href.includes(str1)){//condition to console log if href has 'python' in it
    console.log(href);
    }


})


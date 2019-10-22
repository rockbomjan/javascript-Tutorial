console.log('Events and Event Objects');
//We can add 'mouseover' event in place of 'click' event
document.getElementById('heading').addEventListener('click', function(e){
console.log('Clicking "Welcome to Rock Bomjan\'s heading" event is successful.')
console.log(e);//prints the events eg: MouseEvent
let variable_a;
variable_a = e.target;// target is the id = 'heading'
console.log(variable_a)//prints the target
//or
// location.href = '//facebook.com';//leads to facebook login page
console.log('cleintX and clientY values');
    variable_a = e.clientX;
    console.log('clientX: '+ variable_a);
    variable_a = e.clientY;
    console.log('clientY: '+ variable_a)

})

document.getElementById('myfirst').addEventListener('click', function(f){
    console.log('Clicking "Welcome to my channel" event is successful.')
    console.log(f);//prints the events eg: MouseEvent
    let variable_b;
    variable_b = f.target;// target is the id = 'heading'
    console.log(variable_b)//prints the target
    variable_b = f.target.className;
    console.log(variable_b);//displays the class name
    variable_b = Array.from(f.target.classList);
    console.log(variable_b);//displays the array of class list

    console.log('offsetX and offsetY values:');
    variable_b = f.offsetX;
    console.log('offsetX: '+ variable_b);
    variable_b = f.offsetY;
    console.log('offsetY: ' + variable_b);
    })


// targetting the id('btn')
console.log('targetting the id("btn")')
let btn = document.getElementById('btn');
btn.addEventListener('click', func1);

// function func1(e){
//     console.log('Thanks', e);
// }
// When you click on the submit button:
// Output: 
// targetting the id("btn")
// Thanks MouseEvent {isTrusted: true, 
// screenX: 76, screenY: 197, clientX: 76, clientY: 94, …}
//if the input type is 'submit'
// eg:<input type="submit" id = 'btn' value = "submit"></input>
//or eg:<button id = 'btn'>Submit Form</button>
// the form is submitted and navigated to none.html
//infact thanks is printed at a blink
//it's a default behavior
// to prevent or bypass such a behavior, we need to run e.preventDefault() method
// the form will not be submitted and the event bound is displayed
function func1(e){
    console.log('Thanks', e);
    e.preventDefault();
}

// output: Thanks MouseEvent {isTrusted: true, screenX: 111, screenY: 390, clientX: 111, clientY: 287, …}
//We have other events like 'dblclick'
btn.addEventListener('dblclick', func2);

function func2(e){
    console.log("Thanks! It's a double click", e);
    e.preventDefault();
}

// output:
// Thanks MouseEvent {isTrusted: true, screenX: 88, screenY: 396, clientX: 88, clientY: 293, …}
// Thanks! It's a double click MouseEvent {isTrusted: true, screenX: 112, screenY: 398, clientX: 112, clientY: 295, …}

//mouse down event, mouse up event

child3.addEventListener('mousedown', func3);

function func3(e){
    console.log('Thanks, you have mouse down on child3', e);
    
}
//When left or right or scroll btn click on Child3 list,
//Output:Thanks, you have mouse down on child3 MouseEvent {isTrusted: true, screenX: 72, 
//screenY: 262, clientX: 72, clientY: 159, …}


//mouse enter and leave events
document.querySelector('.child').addEventListener('mouseenter', function(){
    console.log("You've entered mouseenter event");
})
//Output:11 times
//11 You've entered mouseenter event

document.querySelector('.child').addEventListener('mouseleave', function(){
    console.log("You've executed mouseleave event");
})

//Output:
// You've entered mouseenter event
// java.js:98 You've executed mouseleave event

//mousemove event
document.querySelector('.child').addEventListener('mousemove', function(e){
    console.log("You've triggered mousemove event");
    console.log(e.offsetX, e.offsetY)
    document.body.style.backgroundColor = `rgb(${e.offsetX}, ${e.offsetY}, ${e.offsetX})`;
})

//Output:
// You've triggered mousemove event
//460 17
//background color changes to pink and dark as you move the mouse
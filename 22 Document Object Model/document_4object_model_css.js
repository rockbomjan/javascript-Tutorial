//One by one access
//Change the font color of h1.
document.getElementById('demo1').style.color = 'red';

//all at once access
//Using setAttribute() method to change the property of all the elements.
document.getElementById('demo2').setAttribute(
    "style",
    "color:green; background-color:pink; height: 50px; text-align: center;"
);
console.log('Local and Session Storage')
// //Add a key-value pair inside local storage
// localStorage.setItem('Name1', 'Rose');
// localStorage.setItem('Name2', 'Rock');
// //localStorage.removeItem('Name1'); 
// //Output: null
// let name1 = localStorage.getItem('Name1');
// let name2 = localStorage.getItem('Name2');
// console.log(name1);
// console.log(name2);

//What happens with the array
let impArray = ['ginger', 'garlic', 'onion', 'chilli'];
// localStorage.setItem('Vegetables', impArray);
localStorage.setItem('Vegetables', JSON.stringify(impArray));
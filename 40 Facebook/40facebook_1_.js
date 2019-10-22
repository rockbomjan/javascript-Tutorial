let database = [{
    username: 'rose',
    password: '123abc',
}];

let status = [{
    name: 'Rock Bomjan',
    status: '50k Subscribers',
    },
    {
    name: 'Anil Bhandari',
    status: 'Student',

    }
];
const user_name = prompt("Enter your user name.");
const pass_word = prompt("Enter your password");

// function log_in(user_name, pass_word){
//     if(user_name === database [0].username && pass_word === database[0].password){

//     }
// }

//in ECMA script:
const log_in = (user_name, pass_word) => {
    if(user_name === database[0].username && pass_word === database[0].password){
        
        document.getElementById("demo1").value = database[0].username;
        document.getElementById("demo2").style.display = 'block' ;
        document.getElementById("demo2").value = status[0].name;
        document.getElementById("demo3").style.display = 'block';
        document.getElementById("demo3").value = status[0].status;
    }
    else{
        document.getElementById("demo1").value = "Incorrect Username/Password.";
        document.getElementById("demo2").style.display = 'none' ;
        document.getElementById("demo3").style.display = 'none';
    }
}

log_in(user_name, pass_word);
let party_friends = ["Saroj", "Anil", "Bijeta"];
let names = prompt("What is your name?");
let check = party_friends.includes(names);

if (check == true){
    console.log("Your presence is highly appreciated.");
       
}
else{
    alert("Sorry, you are not invited!!");
}

console.log(Math.pow(2,3));//base, power
//output: 8
console.log(2**3);//IN ES7
//output: 8
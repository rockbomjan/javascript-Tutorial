run_ludo = () =>{
    const play1 = Math.floor(Math.random()*6)+1;
    const player1dice = `images/dice${play1}.png`;
    // document.getElementById('check1').setAttribute(name:DOMString, value: DOMString) 
    document.getElementById('check1').setAttribute('src', player1dice);

    const play2 = Math.floor(Math.random()*6)+1;
    const player2dice = `images/dice${play2}.png`;
    document.getElementById('check2').setAttribute('src', player2dice);
    if (play1 == play2){
        // document.getElementById("demo").innerHTML = "Draw";// Or
        document.querySelector('h2').innerHTML = "DRAW!!";
    }
    else if(play1>play2){
        // document.getElementById("demo").innerHTML = "Congratulations!! Player 1 Won!!";//or
        document.querySelector('h2').innerHTML = "Congratulations!! Player 1 Won!!";
        
    }
    else if(play2>play1){
        // document.getElementById("demo").innerHTML = "Congratulations!! Player 2 Won!!";//or
        document.querySelector('h2').innerHTML = "Congratulations!! Player 2 Won!!";
    }
}
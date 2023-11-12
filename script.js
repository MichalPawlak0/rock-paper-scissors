let compScore=0;
let playerScore=0;
const MAX_SCORE=5;

function getComputerChoice(){
    let randNum = Math.floor(Math.random()*3);
    switch (randNum) {
        case 0:
            return "Rock";
        case 1:
            return "Paper";
        case 2:
            return "Scissors";
    }
}

function playRound(event){
    let computerSelection = getComputerChoice();

    if(playerScore<MAX_SCORE&&compScore<MAX_SCORE){
        if(event.target.innerText.toUpperCase()===computerSelection.toUpperCase()){
            divEl.innerText= (`It's a ${event.target.innerText.charAt(0).toUpperCase()+event.target.innerText.slice(1).toLowerCase()} to ${computerSelection.charAt(0).toUpperCase()+computerSelection.slice(1).toLowerCase()} draw`);
            scoreEl.innerText=`Current score: ${playerScore} - ${compScore}`;
        }else if(((event.target.innerText.toUpperCase()==="ROCK")&&(computerSelection.toUpperCase()==="SCISSORS"))||((event.target.innerText.toUpperCase()==="SCISSORS")&&(computerSelection.toUpperCase()==="PAPER"))||((event.target.innerText.toUpperCase()==="PAPER")&&(computerSelection.toUpperCase()==="ROCK"))){
            divEl.innerText= (`${event.target.innerText.charAt(0).toUpperCase()+event.target.innerText.slice(1).toLowerCase()} beats ${computerSelection.charAt(0).toUpperCase()+computerSelection.slice(1).toLowerCase()}, you win!`);
            playerScore++;
            scoreEl.innerText=`Current score: ${playerScore} - ${compScore}`;
        }else if(((event.target.innerText.toUpperCase()==="ROCK")&&(computerSelection.toUpperCase()==="PAPER"))||((event.target.innerText.toUpperCase()==="SCISSORS")&&(computerSelection.toUpperCase()==="ROCK"))||((event.target.innerText.toUpperCase()==="PAPER")&&(computerSelection.toUpperCase()==="SCISSORS"))){
            divEl.innerText= (`${computerSelection.charAt(0).toUpperCase()+computerSelection.slice(1).toLowerCase()} beats ${event.target.innerText.charAt(0).toUpperCase()+event.target.innerText.slice(1).toLowerCase()}, you lose!`);
            compScore++;
            scoreEl.innerText=`Current score: ${playerScore} - ${compScore}`;
        }else{
            divEl.innerText= ("Invalid input!");
        }
    }
    if(playerScore===MAX_SCORE){
        winnerEl.innerText = `Game over! You win!`;
    }else if(compScore===MAX_SCORE){
        winnerEl.innerText = `Game over! You lose!`;
    }

}

const divEl=document.querySelector(".result-text")
const scoreEl=document.querySelector(".running-score")
const winnerEl=document.querySelector(".winner")

const button1 = document.createElement("button");
button1.textContent="Rock";
document.body.insertBefore(button1,divEl);

const button2 = document.createElement("button");
button2.textContent="Scissors";
document.body.insertBefore(button2,divEl);

const button3 = document.createElement("button");
button3.textContent="Paper";
document.body.insertBefore(button3,divEl);

button1.addEventListener("click",playRound)
button2.addEventListener("click",playRound)
button3.addEventListener("click",playRound)
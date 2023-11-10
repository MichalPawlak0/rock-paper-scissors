const ROUND_NR = 5;

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

function playRound(playerSelection, computerSelection){
    if(playerSelection.toUpperCase()===computerSelection.toUpperCase()){
        return `It's a ${playerSelection.charAt(0).toUpperCase()+playerSelection.slice(1).toLowerCase()} to ${computerSelection.charAt(0).toUpperCase()+computerSelection.slice(1).toLowerCase()} draw`;
    }else if(((playerSelection.toUpperCase()==="ROCK")&&(computerSelection.toUpperCase()==="SCISSORS"))||((playerSelection.toUpperCase()==="SCISSORS")&&(computerSelection.toUpperCase()==="PAPER"))||((playerSelection.toUpperCase()==="PAPER")&&(computerSelection.toUpperCase()==="ROCK"))){
        return `${playerSelection.charAt(0).toUpperCase()+playerSelection.slice(1).toLowerCase()} beats ${computerSelection.charAt(0).toUpperCase()+computerSelection.slice(1).toLowerCase()}, you win!`;
    }else if(((playerSelection.toUpperCase()==="ROCK")&&(computerSelection.toUpperCase()==="PAPER"))||((playerSelection.toUpperCase()==="SCISSORS")&&(computerSelection.toUpperCase()==="ROCK"))||((playerSelection.toUpperCase()==="PAPER")&&(computerSelection.toUpperCase()==="SCISSORS"))){
        return `${computerSelection.charAt(0).toUpperCase()+computerSelection.slice(1).toLowerCase()} beats ${playerSelection.charAt(0).toUpperCase()+playerSelection.slice(1).toLowerCase()}, you lose!`;
    }else{
        return "Invalid input!";
    }
}

function game(){
    let compChoice = getComputerChoice();
    let playerChoice = prompt("Rock, Paper or Scissors?");
    console.log(playRound(playerChoice, compChoice));
}

let gamesPlayed=0;
while (gamesPlayed<ROUND_NR) {
    game();
    gamesPlayed++;
}
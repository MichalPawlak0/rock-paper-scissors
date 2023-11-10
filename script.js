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
console.log(getComputerChoice());
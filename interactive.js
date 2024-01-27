const threeValues = ['paper', 'rock', 'scissors'];

let playerChoice = prompt("Pick Rock, Paper, or Scissors");

const playRound = (playerSelection, computerSelection) => {
    const sanitizedPlayerSelection = playerSelection.toLowerCase();  
    if (sanitizedPlayerSelection === computerSelection) {
        console.log("It's a Tie!");
    } else if (sanitizedPlayerSelection === 'rock') {
        switch(computerSelection) {
            case 'paper': console.log('You lost!'); enemyCount++; break;
            case 'scissors': console.log('You won!'); playerCount++; break;
        }
    } else if (sanitizedPlayerSelection === 'paper') {
        switch(computerSelection) {
            case 'rock': console.log('You won!'); playerCount++; break;
            case 'scissors': console.log('You lost!'); enemyCount++; break;
        }
    } else if (sanitizedPlayerSelection === 'scissors') {
        switch(computerSelection) {
            case 'paper': console.log('You won!'); playerCount++; break;
            case 'rock': console.log('You lost!'); enemyCount++; break;
        }
    } else {
        console.log('Please select Rock, Paper, or Scissors');
    }
}



const getComputerChoice = () => {
    return threeValues[Math.floor(Math.random() * 3)];
}
let playerCount = 0;
let enemyCount = 0;
let totalCount = 0;

const game = () => {
    playerCount = 0;
    enemyCount = 0;
    totalCount = 0;
    while(totalCount < 5) {
        let playerChoice = prompt("Pick Rock, Paper, or Scissors");
        const computerChoice = getComputerChoice();
        totalCount = playerCount + enemyCount;
        playRound(playerChoice, computerChoice)
    }
    if (playerCount > enemyCount) {
        console.log(`You won ${playerCount} out of 5 rounds! Victory is Yours!!!`)
    } else {
        console.log(`Defeat. Enemy beat you by ${enemyCount} wins`)
    }
}
game()
const threeValues = ['paper', 'rock', 'scissors'];

let playerChoice = prompt("Pick Rock, Paper, or Scissors");

const playRound = (playerSelection, computerSelection) => {
    const sanitizedPlayerSelection = playerSelection.toLowerCase();  
    if (sanitizedPlayerSelection === computerSelection) {
        console.log("It's a Tie!");
    } else if (sanitizedPlayerSelection === 'rock') {
        switch(computerSelection) {
            case 'paper': console.log('You lost!'); break;
            case 'scissors': console.log('You won!'); break;
        }
    } else if (sanitizedPlayerSelection === 'paper') {
        switch(computerSelection) {
            case 'rock': console.log('You won!'); break;
            case 'scissors': console.log('You lost!'); break;
        }
    } else if (sanitizedPlayerSelection === 'scissors') {
        switch(computerSelection) {
            case 'paper': console.log('You won!'); break;
            case 'rock': console.log('You lost!'); break;
        }
    } else {
        console.log('Please select Rock, Paper, or Scissors');
    }
}



const getComputerChoice = () => {
    return threeValues[Math.floor(Math.random() * 3)];
}
const computerChoice = getComputerChoice();
playRound(playerChoice, computerChoice)
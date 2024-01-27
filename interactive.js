const threeValues = ['Paper', 'Rock', 'Scissors'];

const playRound = (playerSelection, computerSelection) => {
    const sanitizedPlayerChoice = threeValues.forEach((element) => { 
        if(element.toLowerCase() === playerSelection.toLowerCase()) {
            return element
        } else {
            return ""
    }})
}

let playerChoice = prompt("Pick Rock, Paper, or Scissors");
const computerChoice = getComputerChoice();

const getComputerChoice = () => {
    return threeValues[Math.floor(Math.random() * 3)]
}
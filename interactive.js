const threeValues = ['paper', 'rock', 'scissors'];

const threeButtons = document.querySelectorAll('.ui-button');
const logs = document.querySelector('#rounds-log');


threeButtons.forEach((button) => {

    button.addEventListener('click', () => {
      playRound(`${button.innerHTML}`);
    });
});
const getComputerChoice = () => {
    return threeValues[Math.floor(Math.random() * 3)];
}
let playerCount = 0;
let enemyCount = 0;
let totalCount = 0;


const playRound = (playerSelection) => {
    const computerSelection = getComputerChoice();
    const sanitizedPlayerSelection = playerSelection.toLowerCase();  
    if (sanitizedPlayerSelection === computerSelection) {
        logs.innerHTML += `<p>It's a TIE!</p>`;
    } else if (sanitizedPlayerSelection === 'rock') {
        switch(computerSelection) {
            case 'paper': logs.innerHTML += `<p>You lost!</p>`; enemyCount++; break;
            case 'scissors': logs.innerHTML += `<p>You won!</p>`; playerCount++; break;
        }
    } else if (sanitizedPlayerSelection === 'paper') {
        switch(computerSelection) {
            case 'rock': logs.innerHTML += `<p>You won!</p>`; playerCount++; break;
            case 'scissors': logs.innerHTML += `<p>You lost!</p>`; enemyCount++; break;
        }
    } else if (sanitizedPlayerSelection === 'scissors') {
        switch(computerSelection) {
            case 'paper': logs.innerHTML += `<p>You won!</p>`; playerCount++; break;
            case 'rock': logs.innerHTML += `<p>You lost!</p>`; enemyCount++; break;
        }
    } else {
        logs.innerHTML += `<p>Please select Rock, Paper, or Scissors</p>`;
    }
    totalCount = playerCount + enemyCount;
    console.log(totalCount);
}

/*const playRound = (playerSelection) => {
    const computerSelection = getComputerChoice();
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
    totalCount = playerCount + enemyCount;
    console.log(totalCount);
}

*/


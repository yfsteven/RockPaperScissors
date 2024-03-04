const threeValues = ['paper', 'rock', 'scissors'];

const threeButtons = document.querySelectorAll('.ui-button');
const logs = document.querySelector('#rounds-log');
const sum = document.querySelector('#sum--count');


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

const resetScores = () => {
    playerCount = 0;
    enemyCount = 0;
    totalCount = 0;
}


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
    while(totalCount === 5) {
        if(playerCount > enemyCount) {
            resetScores();
            logs.innerHTML += `<h2 style="color:#FFDF00;">Victory!</h2>`;
        } else {
            resetScores();
            logs.innerHTML += `<h2 style="color:#8B4513;">Defeat!</h2>`;
        }
    };
    sum.innerHTML = `<p style="color: #D2122E;">Player: ${playerCount} Enemy: ${enemyCount} Total: ${totalCount}</p>`;
}


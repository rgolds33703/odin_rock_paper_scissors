let playerScore;
let computerScore;

function game() {
    playerScore = 0;
    computerScore = 0;
    determineBestOfFive();
    console.log(announceWinner());
}

function computerPlay() {
    let choices = ['Rock', 'Paper', 'Scissors'];
    let num = Math.floor(Math.random() * choices.length);
    return choices[num];
}

function playRound(playerSelection, computerSelection) {
    playerSelection = playerSelection[0].toUpperCase() + playerSelection.slice(1);
    if (playerSelection === computerSelection) {
        return `It's a tie!`
    } else if ((playerSelection === 'Rock' && computerSelection === 'Scissors') ||
    (playerSelection === 'Paper' && computerSelection === 'Rock') ||
    (playerSelection === 'Scissors' && computerSelection === 'Paper')) {
        playerScore++
        return `You win! ${playerSelection} beats ${computerSelection}!`;
        } else {
        computerScore++
        return `You lose! ${computerSelection} beats ${playerSelection}!`
        }
}

function determineBestOfFive() {
    while (playerScore < 5 && computerScore < 5) {
        let playerSelection = prompt("Choose Rock, Paper, or Scissors");
        let computerSelection = computerPlay();
        console.log(playRound(playerSelection, computerSelection));
    }
}

function announceWinner() {
    if (playerScore === 5) {
        return `Player Wins! ${playerScore} to ${computerScore}!`
    } else {
        return `Computer Wins! ${computerScore} to ${playerScore}!`
    }
}

game();
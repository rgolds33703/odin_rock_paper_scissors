let playerScore = 0;
let computerScore = 0;

const rock_btn = document.querySelector('#rock');
const paper_btn = document.querySelector('#paper');
const scissors_btn = document.querySelector('#scissors');
const scores = document.querySelector('#scores');
const winner = document.querySelector('#winner');
const buttons = document.querySelectorAll('button');

rock_btn.addEventListener('click', () => playRound('Rock', computerPlay()));
paper_btn.addEventListener('click', () => playRound('Paper', computerPlay()));       
scissors_btn.addEventListener('click', () => playRound('Scissors', computerPlay()));

function computerPlay() {
    let choices = ['Rock', 'Paper', 'Scissors'];
    let num = Math.floor(Math.random() * choices.length);
    return choices[num];
}

function playRound(playerSelection, computerSelection) {
    const results = document.querySelector('#results');
    if (playerSelection === computerSelection) {
        results.textContent = `It's a tie!`;
    } else if ((playerSelection === 'Rock' && computerSelection === 'Scissors') ||
    (playerSelection === 'Paper' && computerSelection === 'Rock') ||
    (playerSelection === 'Scissors' && computerSelection === 'Paper')) {
        playerScore++
        results.textContent = `You win! ${playerSelection} beats ${computerSelection}!`;
        } else {
        computerScore++
        results.textContent = `You lose! ${computerSelection} beats ${playerSelection}!`;
        }
    scores.textContent = `Player Score: ${playerScore} Computer Score: ${computerScore}`;
    if (playerScore >= 5 || computerScore >= 5) {
        rock_btn.outerHTML = rock_btn.outerHTML;
        paper_btn.outerHTML = paper_btn.outerHTML;
        scissors_btn.outerHTML = scissors_btn.outerHTML;
    }
    if (playerScore === 5) {
        winner.textContent = `Player Wins! ${playerScore} to ${computerScore}!`
    } else if (computerScore ===5) {
        winner.textContent = `Computer Wins! ${computerScore} to ${playerScore}!`
    }
}


// function determineBestOfFive() {
//     while (playerScore < 5 && computerScore < 5) {
//         let playerSelection = prompt("Choose Rock, Paper, or Scissors");
//         let computerSelection = computerPlay();
//         console.log(playRound(playerSelection, computerSelection));
//     }
// }



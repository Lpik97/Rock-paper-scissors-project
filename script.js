let computerScore = 0;
let playerScore = 0;
const playerName = 'Player';
const computerName = 'Computer';
const rockBtn = document.querySelector(".rock");
const paperBtn = document.querySelector(".paper");
const scissorsBtn = document.querySelector(".scissors");
const roundResultDiv = document.querySelector("#roundResult");
const runningResultDiv = document.querySelector('#runningResult');
const finalResultDiv = document.querySelector('#finalResult');
const p1 = document.createElement('p');
const p2 = document.createElement('p');

function GetComputerChoice() {
    let options = ["rock", "paper", "scissors"]; //This variable contains three possible options displayed inside an array.
    function getRandomOption() {
        let randomIndex = Math.floor(Math.random() * options.length); //Here, Math.random generates a random number which is multiplied by the total amount of options inside the above array, then it is converted to an integer number.
        return options[randomIndex]; //This return completes the action using the number obtanied above and that number picks one of the options inside the array.
    }
    return getRandomOption();
}

function playRound(playerSelection, computerSelection) {
    playerSelection = playerSelection.toLowerCase(); //With this we assure that whatever is the imput, it always gets converted to a lower-case imput.
    if (playerSelection === computerSelection) { //Starting from here, the score is added automatically in each round.
        p2.innerText = 'It is a tie, both have chosen the same.';
        if(!p2.parentNode) {
            roundResultDiv.appendChild(p2);
        }
    } else if (playerSelection === 'rock' && computerSelection === 'paper') {
        const newScore = ++computerScore;
        p1.innerText = `${computerName}` + ' score: ' + newScore + `${playerName}` + ' score: ' + playerScore;
        if(!p1.parentNode) {
            runningResultDiv.appendChild(p1);
        }
        p2.innerText = 'You lose, paper covers rock.';
        if(!p2.parentNode) {
            roundResultDiv.appendChild(p2);
        }
    } else if (playerSelection === 'rock' && computerSelection === 'scissors') {
        const newScore = ++playerScore;
        p1.innerText = `${playerName}` + ' score: ' + newScore + `${computerName}` + ' score: ' + computerScore;
        if(!p1.parentNode) {
            runningResultDiv.appendChild(p1);
        }
        p2.innerText = 'You win, rock smash scissors.';
        if(!p2.parentNode) {
            roundResultDiv.appendChild(p2);
        }
    } else if (playerSelection === 'paper' && computerSelection === 'scissors') {
        const newScore = ++computerScore;
        p1.innerText = `${computerName}` + ' score: ' + newScore + `${playerName}` + ' score: ' + playerScore;
        if(!p1.parentNode) {
            runningResultDiv.appendChild(p1);
        }
        p2.innerText = 'You lose, scissors cut paper.';
        if(!p2.parentNode) {
            roundResultDiv.appendChild(p2);
        };
    } else if (playerSelection === 'paper' && computerSelection === 'rock') {
        const newScore = ++playerScore;
        p1.innerText = `${playerName}` + ' score: ' + newScore + `${computerName}` + ' score: ' + computerScore;
        if(!p1.parentNode) {
            runningResultDiv.appendChild(p1);
        }
        p2.innerText = 'You win, paper covers rock.';
        if(!p2.parentNode) {
            roundResultDiv.appendChild(p2);
        }
    } else if (playerSelection === 'scissors' && computerSelection === 'rock') {
        const newScore = ++computerScore;
        p1.innerText = `${computerName}` + ' score: ' + newScore + `${playerName}` + ' score: ' + playerScore;
        if(!p1.parentNode) {
            runningResultDiv.appendChild(p1);
        }
        p2.innerText = 'You lose, rock smash scissors';
        if(!p2.parentNode) {
            roundResultDiv.appendChild(p2);
        };
    } else if (playerSelection === 'scissors' && computerSelection === 'paper') {
        const newScore = ++playerScore;
        p1.innerText = `${playerName}` + ' score: ' + newScore + `${computerName}` + ' score: ' + computerScore;
        if(!p1.parentNode) {
            runningResultDiv.appendChild(p1);
        }
        p2.innerText = 'You win, scissors cut paper.';
        if(!p2.parentNode) {
            roundResultDiv.appendChild(p2);
        };
    }
}

function checkForWinner(playerScore, computerScore) {
    if (playerScore === 5 && computerScore !== 5) {
        const h1 = document.createElement('h1');
        h1.innerText = `${playerName}` + ' wins! His final score is ' + `${playerScore}` + ' and the compuer one is ' + `${computerScore}` +  '.'
        finalResultDiv.appendChild(h1);
    } else if (playerScore !== 5 && computerScore === 5) {
        const h1 = document.createElement('h1');
        h1.innerText = `${computerName}` + ' wins! Its final score is ' + `${computerScore}` + ' and the player one is ' + `${playerScore}` +  '.'
        finalResultDiv.appendChild(h1);
    } else if (playerScore === 5 && computerScore === 5) {
        const h1 = document.createElement('h1');
        h1.innerText = 'This is a tie, both scored 5 points.'
        finalResultDiv.appendChild(h1);
    }
}

function game() {
    rockBtn.addEventListener('click', function() {
        const playerSelection = 'rock';
        const computerSelection = GetComputerChoice();
        playRound(playerSelection, computerSelection);
        checkForWinner(playerScore, computerScore);
    });
    paperBtn.addEventListener('click', function() {
        const playerSelection = 'paper';
        const computerSelection = GetComputerChoice();
        playRound(playerSelection, computerSelection);
        checkForWinner(playerScore, computerScore);
    });
    scissorsBtn.addEventListener('click', function() {
        const playerSelection = 'scissors';
        const computerSelection = GetComputerChoice();
        playRound(playerSelection, computerSelection);
        checkForWinner(playerScore, computerScore);
    });
}

game();
let computerScore = 0;
let playerScore = 0;
const rockBtn = document.querySelector(".rock");
const paperBtn = document.querySelector(".paper");
const scissorsBtn = document.querySelector(".scissors");
const roundResultDiv = document.querySelector("#roundResult");
const finalResultDiv = document.querySelector('#finalResult');

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
    if (playerSelection !== 'rock' && playerSelection !== 'paper' && playerSelection !== 'scissors') { //This if statement checks wether the first selection is not any of the valid ones.
        const p = document.createElement('p');
        p.innerText = 'You have chosen something different from rock, paper or scissors, please try again.';
        roundResultDiv.appendChild(p);
    } else if (playerSelection === computerSelection) { //Starting from here, the score is added automatically in each round.
        const p = document.createElement('p');
        p.innerText = 'It is a tie, both have chosen the same.';
        roundResultDiv.appendChild(p);
    } else if (playerSelection === 'rock' && computerSelection === 'paper') {
        computerScore++;
        const p = document.createElement('p');
        p.innerText = 'You lose, paper covers rock.';
        roundResultDiv.appendChild(p);
    } else if (playerSelection === 'rock' && computerSelection === 'scissors') {
        playerScore++;
        const p = document.createElement('p');
        p.innerText = 'You win, rock smash scissors.';
        roundResultDiv.appendChild(p);
    } else if (playerSelection === 'paper' && computerSelection === 'scissors') {
        computerScore++;
        const p = document.createElement('p');
        p.innerText = 'You lose, scissors cut paper.';
        roundResultDiv.appendChild(p);
    } else if (playerSelection === 'paper' && computerSelection === 'rock') {
        playerScore++;
        const p = document.createElement('p');
        p.innerText = 'You win, paper covers rock.';
        roundResultDiv.appendChild(p);
    } else if (playerSelection === 'scissors' && computerSelection === 'rock') {
        computerScore++;
        const p = document.createElement('p');
        p.innerText = 'You lose, rock smash scissors.';
        roundResultDiv.appendChild(p);
    } else if (playerSelection === 'scissors' && computerSelection === 'paper') {
        playerScore++;
        const p = document.createElement('p');
        p.innerText = 'You win, scissors cut paper.';
        roundResultDiv.appendChild(p);
    }
}

function checkForWinner(playerScore, computerScore) {
    if (playerScore === 5) {
    const h1 = document.createElement('h1');
    h1.innerText = 'You win ! Your final score is ' + `${playerScore}` + ' and the compuer one is ' + `${computerScore}` +  '.'
    finalResultDiv.appendChild(h1);
    }

    if(computerScore === 5) {
    const h1 = document.createElement('h1');
    h1.innerText = 'You lose ! Your final score is ' + `${playerScore}` + ' and the compuer one is ' + `${computerScore}` +  '.'
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
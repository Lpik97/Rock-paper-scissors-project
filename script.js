let computerScore = 0;
let playerScore = 0;
const rockBtn = document.querySelector(".rock");
const paperBtn = document.querySelector(".paper");
const scissorsBtn = document.querySelector(".scissors");

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
    if (playerSelection !== 'rock' || playerSelection !== 'paper' || playerSelection !== 'scissors') { //This if statement checks wether the first selection is not any of the valid ones.
        return 'You have chosen something different from rock, paper or scissors, please try again.'
    } else if (playerSelection === computerSelection) { //Starting from here, the score is added automatically in each round.
        return 'It is a tie, both have chosen the same.'
    } else if (playerSelection === 'rock' && computerSelection === 'paper') {
        computerScore++;
        return 'You lose, paper covers rock.';
    } else if (playerSelection === 'rock' && computerSelection === 'scissors') {
        playerScore++;
        return 'You win, rock smash scissors.';
    } else if (playerSelection === 'paper' && computerSelection === 'scissors') {
        computerScore++;
        return 'You lose, scissors cut paper.';
    } else if (playerSelection === 'paper' && computerSelection === 'rock') {
        playerScore++;
        return 'You win, paper covers rock.';
    } else if (playerSelection === 'scissors' && computerSelection === 'rock') {
        computerScore++;
        return 'You lose, rock smash scissors.';
    } else if (playerSelection === 'scissors' && computerSelection === 'paper') {
        playerScore++;
        return 'You win, scissors cut paper';
    }
}

function game() {
    rockBtn.addEventListener('click', function() {
        const playerSelection = 'rock';
        const computerSelection = GetComputerChoice();
        playRound(playerSelection, computerSelection);
    });
    paperBtn.addEventListener('click', function() {
        const playerSelection = 'paper';
        const computerSelection = GetComputerChoice();
        playRound(playerSelection, computerSelection);
    });
    scissorsBtn.addEventListener('click', function() {
        const playerSelection = 'scissors';
        const computerSelection = GetComputerChoice();
        playRound(playerSelection, computerSelection);
    });
    if (playerScore > computerScore) { //This conditional statement check either the player or computer score its higher than the opponent's one, depending on the result it will display who has won the match.
        console.log("You win! Your final score is: "+ playerScore +", and the computer one is: "+ computerScore);
    } else if (playerScore < computerScore) {
        console.log("You lose! Your final score is: "+ playerScore +", and the computer one is: "+ computerScore);
    } else {
        console.log("It's a tie, both score the same amount: "+ playerScore);
    }
}

game();
const rockBtn = document.getElementById("rock");
const paperBtn = document.getElementById("paper");
const scissorsBtn = document.getElementById("scissors");

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
        playerScore++ && computerScore++;
    } else if (playerSelection === 'rock' && computerSelection === 'paper') {
        return 'You lose, paper covers rock.';
        computerScore++;
    } else if (playerSelection === 'rock' && computerSelection === 'scissors') {
        return 'You win, rock smash scissors.';
        playerScore++;
    } else if (playerSelection === 'paper' && computerSelection === 'scissors') {
        return 'You lose, scissors cut paper.';
        computerScore++;
    } else if (playerSelection === 'paper' && computerSelection === 'rock') {
        return 'You win, paper covers rock.';
        playerScore++:
    } else if (playerSelection === 'scissors' && computerSelection === 'rock') {
        return 'You lose, rock smash scissors.';
        computerScore++;
    } else if (playerSelection === 'scissors' && computerSelection === 'paper') {
        return 'You win, scissors cut paper';
        playerScore++;
    }
}

function game() {

    if (playerScore > computerScore) { //This conditional statement check either the player or computer score its higher than the opponent's one, depending on the result it will display who has won the match.
        console.log("You win! Your final score is: "+ playerScore +", and the computer one is: "+ computerScore);
    } else if (playerScore < computerScore) {
        console.log("You lose! Your final score is: "+ playerScore +", and the computer one is: "+ computerScore);
    } else {
        console.log("It's a tie, both score the same amount: "+ playerScore);
    }
}

game();
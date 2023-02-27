function GetComputerChoice() {
    let options = ["rock", "paper", "scissors"]; //This variable contains three possible options displayed inside an array.
    function getRandomOption() {
        let randomIndex = Math.floor(Math.random() * options.length); //Here, Math.random generates a random number which is multiplied by the total amount of options inside the above array, then it is converted to an integer number.
        return options[randomIndex]; //This return completes the action using the number obtanied above and that number picks one of the options inside the array.
    }
    return getRandomOption();
}

function playRound(playerSelection, computerSelection) {
    playerSelection = playerSelection.toLowerCase();
    computerSelection = computerSelection.toLowerCase(); //With this we assure that whatever is the imput, it always gets converted to a lower-case imput.
    if (playerSelection === computerSelection) {
        return "Both have chosen the same, it is a tie."
    } else if (playerSelection === "rock") {
        if (computerSelection === "scissors") {
            return "You win, rock beats scissors.";
        } else if (computerSelection === "paper") {
            return "You lose, paper beats rock.";
        }
    } else if (playerSelection === "paper") {
        if (computerSelection === "rock") {
            return "You win, paper beats rock.";
        } else if (computerSelection === "scissors") {
            return "You lose, scissors beats paper.";
        }
    } else if (playerSelection === "scissors") {
        if (computerSelection === "paper") {
            return "You win, scissors beats paper.";
        } else if (computerSelection === "rock") {
            return "You lose, rock beats scissors.";
        }
    } else {
        return "You have chosen something different from rock, paper or scissors." ;
    }
}

function game() {
    let playerScore = 0; //These are the initial score values for both the player and the computer.
    let computerScore = 0;
    for (let i = 0; i <5; i++){ //The loop starts in number 0, it has 5 as a condition value because there will be 5 rounds. FInally, the afterthought expression increments the counter variable by 1.
        const playerSelection = prompt("Choose your weapon", "Rock - Paper - Scissors"); //The constants were moved to be inside the loop as they will be used as values for the 'playRound' function. A prompt was added where the user can select between the 3 possible options.
        const computerSelection = GetComputerChoice();
        const roundResult = playRound(playerSelection,computerSelection);
        if (roundResult.startsWith("You win")) { //This conditional statement compares the round result with two values (you win and you lose) and then if any of this confirms to be true, it increments the points.
            playerScore++;
        } else if (roundResult.startsWith ("You lose")) {
            computerScore++;
        }
    }
    if (playerScore > computerScore) { //This conditional statement check either the player or computer score its higher than the opponent's one, depending on the result it will display who has won the match.
        console.log("You win! Your final score is: "+ playerScore +", and the computer one is: "+ computerScore);
    } else if (playerScore < computerScore) {
        console.log("You lose! Your final score is: "+ playerScore +", and the computer one is: "+ computerScore);
    } else {
        console.log("It's a tie, both score the same amount: "+ playerScore);
    }
}

game();
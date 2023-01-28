function GetComputerChoice() {
    let options = ["rock", "paper", "scissors"];
    function getRandomOption() {
        let randomIndex = Math.floor(Math.random() * 3);
        return options[randomIndex];
    }
    return getRandomOption();
}
function playRound(playerSelection, computerSelection) {
    playerSelection = playerSelection.toLowerCase() 
    computerSelection = computerSelection.toLowerCase() //With this we assure that whatever is the imput, it always gets converted to a lower-case imput.
    if (playerSelection === computerSelection) {
        return "Both have chosen the same, it is a tie."
    }
    if (playerSelection === "rock") {
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


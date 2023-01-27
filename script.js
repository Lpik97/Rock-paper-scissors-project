function GetComputerChoice(Choice) {
    if (Choice == "Rock") {
        return "Paper"; //This function starts with a conditional that returns the opposite option for each choice the computer makes.
    }
    else if (Choice == "Paper") {
        return "Scissors";
    }
    else {
        return "Rock";
    }
}

function FirstRound(playerSelection, computerSelection) {
    playerSelection = playerSelection.toLowerCase()
    computerSelection = computerSelection.toLowerCase()
    if (playerSelection == "rock") {
        if (computerSelection == "rock")
            return "It's a tie";
    }
    else if (computerSelection == "paper") {
            return "You lose";
    }
    else if (computerSelection == "scissors") {
            return "You win";
    }
}
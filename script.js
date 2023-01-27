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
    computerSelection = computerSelection.toLowerCase() //With this we assure that whatever is the imput, it always gets converted to a lower-case imput.
    if (playerSelection == "rock") {
        if (computerSelection == "rock")
            return "It's a tie";
    }
    else if (computerSelection == "paper") { //Once the first condition of the conditional is established,  there is no need of repeating the "playerSelection" later in the conditional statement.
            return "You lose";
    }
    else if (computerSelection == "scissors") {
            return "You win";
    }
}
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

function playRound(playerSelection, computerSelection) {
    playerSelection = playerSelection.toLowerCase() 
    computerSelection = computerSelection.toLowerCase() //With this we assure that whatever is the imput, it always gets converted to a lower-case imput.
    if (playerSelection === computerSelection) {
        return "Both have chosen the same, it is a tie."
    }
}
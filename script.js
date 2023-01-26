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
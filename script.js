function playGame() {
    let playerScore = 0;
    let computerScore = 0;
    
    function playRound(playerSelection, computerSelection) {
        playerSelection = playerSelection.toLowerCase();
        let result;

        if (playerSelection === computerSelection) {
            result = "It's a tie!";
        } else {
            switch(playerSelection) {
                case "rock":
                    result = (computerSelection === "scissors") ? "You win, Rock beats Scissors" : "You lose, Paper beats Rock";
                    break;
                case "paper":
                    result = (computerSelection === "rock") ? "You win, Paper beats Rock" : "You lose, Scissors beats Paper";
                    break;
                case "scissors":
                    result = (computerSelection === "paper") ? "You win, Scissors beats Paper" : "You lose, Rock beats Scissors";
                    break;
                default:
                    result = "Invalid choice, please choose between rock, paper or scissors!";
            }

            if (result.startsWith("You win")) {
                playerScore++;
            } else if (result.startsWith("You lose")) {
                computerScore++;
            }
        }

        console.log(`Player choice: ${playerSelection} - Computer choice: ${computerSelection}`);
        console.log(result);
        console.log(`Score: Player: ${playerScore} - Computer: ${computerScore}`);
        return result;
    }

    const choices = ["rock", "paper", "scissors"];

    function getComputerChoice() {
        return choices[Math.floor(Math.random() * choices.length)];
    }

    function getHumanChoice() {
        return prompt("Choose one of the following options:", "rock paper scissors");
    }

    for (let i = 0; i < 5; i++) {
        const playerSelection = getHumanChoice();
        const computerSelection = getComputerChoice();
        playRound(playerSelection, computerSelection);
    }

    console.log(`Final Score - Player: ${playerScore}, Computer: ${computerScore}`);
    if (playerScore > computerScore) {
        console.log("You won the game!");
    } else if (playerScore < computerScore) {
        console.log("You lost the game!");
    } else {
        console.log("The game is a tie!");
    }
}

playGame();

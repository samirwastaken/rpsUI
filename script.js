// DOM Elements
const playerRock = document.getElementById("rock");
const playerPaper = document.getElementById("paper");
const playerScissors = document.getElementById("scissors");

const playerScoreDisplay = document.getElementById("playerScore");
const computerScoreDisplay = document.getElementById("computerScore");

const playerChoiceDisplay = document.getElementById("playerChoice");
const computerChoiceDisplay = document.getElementById("computerChoice");
const roundWinnder = document.getElementById("roundWinner");

// Variables for the game
const playerScore = 0;
const computerScore = 0;
const gameChoices = ["rock", "paper", "scissors"];


// getting the Computer's random choice
function getComputerChoice()    
{
    return Math.floor(Math.random() * 3);

}


// the game. Rock = 0, Paper = 1, Scisssors = 2
function playRound(playerChoice, computerChoice)
{  
    if ((playerChoice == 0 && computerChoice == 1) || (playerChoice == 1 && computerChoice == 2) || (playerChoice == 2 && computerChoice == 0))
    {
        // Updating the player and computer choices
        playerChoiceDisplay.textContent = "You chose: " + gameChoices[playerChoice];
        computerChoiceDisplay.textContent = "Computer chose: " + gameChoices[computerChoice];
        roundWinnder.textContent = "You lost this round.";
        
        // Updating the score
        computerScore++;
        computerChoiceDisplay.textContent = "Score: " + computerScore;
    }
    else if (playerChoice == computerChoice)
    {
        playerChoiceDisplay.textContent = "You chose: " + gameChoices[playerChoice];
        computerChoiceDisplay.textContent = "Computer chose: " + gameChoices[computerChoice];
        roundWinnder.textContent = "Its a Draw!"
    }
    else
    {
        playerChoiceDisplay.textContent = "You chose: " + gameChoices[playerChoice];
        computerChoiceDisplay.textContent = "Computer chose: " + gameChoices[computerChoice];
        roundWinnder.textContent = "You lost this round."
        playerScore++;
        playerScoreDisplay.textContent = "Score: " + playerScore;
    }
}

// Event Listeners
playerRock.addEventListener("click", () => {
    playRound(0, getComputerChoice);
});
playerPaper.addEventListener("click", () => {
    playRound(1, getComputerChoice);
});
playerScissors.addEventListener("click", () => {
    playRound(2, getComputerChoice);
});




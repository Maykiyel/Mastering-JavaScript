const choices = ["👊", "✋", "✌"];

const rock = document.getElementById("rock");
const paper = document.getElementById("paper");
const scissors = document.getElementById("scissors");

const playerChoiceDisplay = document.getElementById("playerChoiceDisplay");
const computerChoiceDisplay = document.getElementById("computerChoiceDisplay");
const resultDisplay = document.getElementById("resultDisplay");
const playerScoreDisplay = document.getElementById("playerScoreDisplay");
const computerScoreDisplay = document.getElementById("computerScoreDisplay");

let playerScore = 0;
let computerScore = 0;

function playGame(playerChoice) {
  const computerChoice = choices[Math.floor(Math.random() * 3)];
  computerChoiceDisplay.textContent = computerChoice;
  playerChoiceDisplay.textContent = playerChoice;
  let result;

  if (playerChoice === computerChoice) {
    result = "It's a tie!";
  } else {
    switch (playerChoice) {
      case "👊":
        result = computerChoice === "✌" ? "You win!" : "You lose!";
        break;
      case "✋":
        result = computerChoice === "👊" ? "You win!" : "You lose!";
        break;
      case "✌":
        result = computerChoice === "✋" ? "You win!" : "You lose!";
        break;
    }
  }

  resultDisplay.textContent = result;
  resultDisplay.style.color = "";

  switch (result) {
    case "You win!":
      resultDisplay.style.color = "#22c55e";
      playerScore++;
      playerScoreDisplay.textContent = `Player: ${playerScore}`;
      break;
    case "You lose!":
      resultDisplay.style.color = "#ef4444";
      computerScore++;
      computerScoreDisplay.textContent = `Computer: ${computerScore}`;
      break;
  }
}

rock.addEventListener("click", () => playGame("👊"));
paper.addEventListener("click", () => playGame("✋"));
scissors.addEventListener("click", () => playGame("✌"));

let humanScore = 0;
let computerScore = 0;
let currentRoundNumber = 1;

// Write your code below:

// Function that generate random number between 0 - 9
function generateTarget() {
  return Math.floor(Math.random() * 10);
}

// The purpose of this function is to be called each round to determine which guess is closest to the target number.
const compareGuesses = (humanGuess, computerGuess, secretNumber) => {
  const humanDifferent = Math.abs(secretNumber - humanGuess);
  const computerDifferent = Math.abs(secretNumber - computerGuess);

  if (humanDifferent <= computerDifferent) {
    return true;
  } else {
    return false;
  }
};

//The purpose of this function is to be used to correctly increase the winner’s score after each round.
const updateScore = (winner) => {
  if (winner === "human") {
    humanScore++;
  } else if (winner === "computer") {
    computerScore++;
  }
};

//The purpose of this function is to be used to update the round number after each round.
const advanceRound = () => {
    currentRoundNumber++;
};

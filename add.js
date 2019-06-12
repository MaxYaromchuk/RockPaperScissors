let userScore = 0;
let computerScore = 0;
const userScore_span = document.getElementById("user-score");
const computerScore_span = document.getElementById("computer-score");
const scoreBoard_div = document.querySelector(".score-board");
const result_p = document.querySelector(".result > p");
const rock_div = document.getElementById("rock");
const paper_div = document.getElementById("paper");
const scissors_div = document.getElementById("scissors");



function getComputerChoice() {
  const choices = ["Rock", "Paper", "Scissors"];
  const randomNumber = Math.floor(Math.random() * 3);
  return choices[randomNumber]

};

function win(userChoice, computerChoice) {
  userScore++;
  userScore_span.innerHTML = userScore;
  computerScore_span.innerHTML = computerScore;
  const smallUserWord = "user".fontsize(3).sub();
  const smallComputerWord = "comp".fontsize(3).sub();
  result_p.innerHTML = `${userChoice}${smallUserWord} beats ${computerChoice}${smallComputerWord}. You win!`;
  
};

function lose(userChoice, computerChoice) {
  computerScore++;
  userScore_span.innerHTML = userScore;
  computerScore_span.innerHTML = computerScore;
  const smallUserWord = "user".fontsize(3).sub();
  const smallComputerWord = "comp".fontsize(3).sub();
  result_p.innerHTML = `${userChoice}${smallUserWord} loses to ${computerChoice}${smallComputerWord}. You lost!`;

};

function draw(userChoice, computerChoice) {
  const smallUserWord = "user".fontsize(3).sub();
  const smallComputerWord = "comp".fontsize(3).sub();
  result_p.innerHTML = `${userChoice}${smallUserWord} equals ${computerChoice}${smallComputerWord}. It's a draw!`;

};

function game(userChoice) {
  const computerChoice = getComputerChoice();
  switch (userChoice + computerChoice) {
    case "ScissorsPaper":
    case "PaperRock":
    case "RockScissors":
      win(userChoice, computerChoice);
      break;

    case "RockPaper":
    case "PaperScissors":
    case "ScissorsRock":
      lose(userChoice, computerChoice);
      break;
    case "RockRock":
    case "PaperPaper":
    case "ScissorsScissors":
      draw(userChoice, computerChoice);
      break;

  };


};

function main(params) {


  rock_div.addEventListener('click', function (params) {
    game("Rock")


  });

  paper_div.addEventListener('click', function (params) {
    game("Paper")

  });

  scissors_div.addEventListener('click', function (params) {
    game("Scissors");

  });
}

main();
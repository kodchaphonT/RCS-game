let userScore = 0;
let computerScore = 0;
const userScore_span = document.getElementById("user-score");
const computerScore_span = document.getElementById("computer-score");
const scoreBoard_div = document.querySelector(".score-board");
const result_p = document.querySelector(".result > p");
const rock2_div = document.getElementById("r");
const paper2_div = document.getElementById("p");
const scissor2_div = document.getElementById("s");

function getComputerChoice() {
  const choices = ['r','p','s'];
  const randomNumber = (Math.floor(Math.random() * 3));
  return choices[randomNumber];
}

function convertToWord(letter) {
  if (letter === "r") return "Rock";
  if (letter === "p") return "Paper";
  return "Scissors";
}

function win(user, computer) {
  userScore++;
  userScore_span.innerHTML = userScore;
  computerScore_span.innerHTML = computerScore;
  result_p.innerHTML = " user " + " BEATS " + " comp " + convertToWord(computer) + " USER win ";
  alert("you win 🔥");
  document.getElementById(user).classList.add('green-glow');
  setTimeout(function() { document.getElementById(user).classList.remove('green-glow')}, 1000);
}


function lose(user, computer) {
  computerScore++;
  userScore_span.innerHTML = userScore;
  computerScore_span.innerHTML = computerScore;
  result_p.innerHTML = convertToWord(user) +" user " + " LOSES " + convertToWord(computer) + " comp " + " COMP win ";
  alert("You lose the computer 😔");
  document.getElementById(user).classList.add('red-glow');
  setTimeout(function() { document.getElementById(user).classList.remove('red-glow')}, 1000);
}

function draw(user, computer) {
  result_p.innerHTML = convertToWord(user) +" user " + " = " + convertToWord(computer) + " comp " + " DRAW ";
  alert("It's draw.... Keep going! 💖");
  document.getElementById(user).classList.add('grey-glow');
  setTimeout(function() { document.getElementById(user).classList.remove('grey-glow')}, 1000);
}



function game(userChoice){
  const computerChoice = getComputerChoice();
  switch (userChoice + computerChoice) {
    case "rs":
    case "pr":
    case "sp":
      win(userChoice, computerChoice);
      break;
    case "rp":
    case "ps":
    case "sr":
      lose(userChoice, computerChoice);
      break;
    case "rr":
    case "pp":
    case "ss":
      draw(userChoice, computerChoice);
      break;
  }

}


function main() {
  rock2_div.addEventListener('click', function() {
    game("r");
  })

  paper2_div.addEventListener('click', function() {
    game("p");
  })

  scissor2_div.addEventListener('click', function() {
    game("s");
  })
}

main();

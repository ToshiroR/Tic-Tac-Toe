const x_class = "x";
const circle_class = "circle";
const cellElement = document.querySelectorAll("[data-cell]");
const board = document.getElementById("board");
const restartBtn = document.getElementById("restartButton");
const winningMessageTextElement = document.getElementById("winning-message");
const winningMessageText = document.querySelector("[winning-message-text]");

let circleTurn;

const winning_Combos = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6],
];

//    eventlistener for clicking the tiles   //

restartBtn.addEventListener("click", startGame);
startGame();
function startGame() {
  circleTurn = false;
  cellElement.forEach((cell) => {
    cell.classList.remove(x_class);
    cell.classList.remove(circle_class);
    cell.removeEventListener("click", handleClick);
    cell.addEventListener("click", handleClick, { once: true });
  });
  setBoardHoverClass();
  winningMessageTextElement.classList.remove("show");
}
function handleClick(e) {
  const cell = e.target;
  const currentClass = circleTurn ? circle_class : x_class;
  placeMark(cell, currentClass);

  if (checkWin(currentClass)) {
    endGame(false);
  } else if (isDraw()) {
    endGame(true);
  } else {
    swapTurns();
    setBoardHoverClass();
  }
}

//    styles the Dom    //
function placeMark(cell, currentClass) {
  cell.classList.add(currentClass);
}

//    swaps between  X and Circle   //
function swapTurns() {
  circleTurn = !circleTurn;
}

//    allows the X/circle hover effect to work    //
function setBoardHoverClass() {
  board.classList.remove(x_class);
  board.classList.remove(circle_class);

  if (circleTurn) {
    board.classList.add(circle_class);
  } else {
    board.classList.add(x_class);
  }
}

//    Check for win Function    //
function checkWin(currentClass) {
  return winning_Combos.some((combos) => {
    return combos.every((index) => {
      return cellElement[index].classList.contains(currentClass);
    });
  });
}

//    function for endgame message    //
function endGame(draw) {
  if (draw) {
    winningMessageText.innerText = "Draw!";
  } else {
    winningMessageText.innerText = `${circleTurn ? "O's" : "X's"} Wins!`;
  }
  winningMessageTextElement.classList.add("show");
}

//    If its a Draw   //
function isDraw() {
  return [...cellElement].every((cell) => {
    return (
      cell.classList.contains(x_class) || cell.classList.contains(circle_class)
    );
  });
}

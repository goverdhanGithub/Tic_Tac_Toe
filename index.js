// javascript code goes here
let currentPlayer = "Player1";
let moves = 0;
let gameOver = false;

function makeMove(position) {
  if (gameOver) return;
  const button = document.getElementById(position);
  if (button.innerText !== "") return;

  const playerMark = currentPlayer === "Player1" ? "X" : "O";
  button.innerText = playerMark;

  if (checkWin(playerMark)) {
    gameOver = true;
    alert(`Congratulations! ${currentPlayer} wins`);
  } else if (moves === 8) {
    gameOver = true;
    alert("Draw!");
  } else {
    currentPlayer = currentPlayer === "Player1" ? "Player2" : "Player1";
    moves++;
  }
}

function checkWin(playerMark) {
  const grid = document.getElementById("grid");
  const positions = grid.getElementsByTagName("button");

  const winningCombinations = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9], //Rows

    [1, 4, 7],
    [2, 5, 8],
    [3, 6, 9], //Columns

    [1, 5, 9],
    [3, 5, 7], //Diagonals
  ];

  for (let i = 0; i < winningCombinations.length; i++) {
    const [a, b, c] = winningCombinations[i];
    if (
      positions[a - 1].innerText === playerMark &&
      positions[b - 1].innerText === playerMark &&
      positions[c - 1].innerText === playerMark
    ) {
      return true;
    }
  }

  return false;
}

function startGame() {
  let btn1 = document.getElementById(1);
  let btn2 = document.getElementById(2);
  let btn3 = document.getElementById(3);
  let btn4 = document.getElementById(4);
  let btn5 = document.getElementById(5);
  let btn6 = document.getElementById(6);
  let btn7 = document.getElementById(7);
  let btn8 = document.getElementById(8);
  let btn9 = document.getElementById(9);

  btn1.addEventListener("click", function () {
    makeMove(1);
  });

  btn2.addEventListener("click", function () {
    makeMove(2);
  });

  btn3.addEventListener("click", function () {
    makeMove(3);
  });

  btn4.addEventListener("click", function () {
    makeMove(4);
  });

  btn5.addEventListener("click", function () {
    makeMove(5);
  });

  btn6.addEventListener("click", function () {
    makeMove(6);
  });

  btn7.addEventListener("click", function () {
    makeMove(7);
  });

  btn8.addEventListener("click", function () {
    makeMove(8);
  });

  btn9.addEventListener("click", function () {
    makeMove(9);
  });
}
startGame();

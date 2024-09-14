const boxes = document.querySelectorAll(".button");
const resetBtn = document.querySelector(".btn");
let turn0 = true;

const winningPatterns = [
  // Rows
  [0, 1, 2], // Top row
  [3, 4, 5], // Middle row
  [6, 7, 8], // Bottom row

  // Columns
  [0, 3, 6], // Left column
  [1, 4, 7], // Middle column
  [2, 5, 8], // Right column

  // Diagonals
  [0, 4, 8], // Top-left to bottom-right diagonal
  [2, 4, 6], // Top-right to bottom-left diagonal
];
boxes.forEach((box, index) => {
  box.addEventListener("click", () => {
    if (turn0) {
      turn0 = false;
      box.innerText = "0";
    } else {
      turn0 = true;
      box.innerText = "X";
    }
    box.disabled = true;
    checkWinner();
  });
});

function checkWinner() {
  for (let pattren of winningPatterns) {
    let val1 = boxes[pattren[0]].innerText;
    let val2 = boxes[pattren[1]].innerText;
    let val3 = boxes[pattren[2]].innerText;
    if (val1 != "" && val2 != "" && val3 != "") {
      if (val1 == val2 && val2 == val3) {
        alert(val1 + " is Winner");
        resetFun();
      }
    }
  }
}

const resetFun = () => {
  () =>
    boxes.forEach((box) => {
      box.innerText = "";
      box.disabled = false;
    });
};

resetBtn.addEventListener("click", resetFun);

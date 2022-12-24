const formEl = document.getElementById("form");

const scoreEl = document.getElementById("score");

const questionEl = document.getElementById("question");

const inputEl = document.getElementById("input");

const num1 = Math.ceil(Math.random() * 10);

const num2 = Math.ceil(Math.random() * 10);

const operations = ["+", "-", "x", "/"];

const operationsLength = operations.length;
let randomOperation = operations[Math.floor(Math.random() * operationsLength)];

questionEl.innerText = `What is ${num1} ${randomOperation} ${num2} ?`;

if (randomOperation === "+") {
  correctAns = num1 + num2;
} else if (randomOperation === "-") {
  correctAns = num1 - num2;
} else if (randomOperation === "x") {
  correctAns = num1 * num2;
} else if (randomOperation === "/") {
  correctAns = Math.floor(num1 / num2);
  if (num2 === 0) {
    correctAns = 0;
  }
}
let score = JSON.parse(localStorage.getItem("score"));

if (!score) {
  score = 0;
}

scoreEl.innerText = `score:${score}`;
formEl.addEventListener("submit", () => {
  let userAns = +inputEl.value;
  if (userAns === correctAns) {
    score++;
    updateLocalStorage();
  } else {
    score--;
    updateLocalStorage();
  }
});

function updateLocalStorage() {
  localStorage.setItem("score", JSON.stringify(score));
}

"use strict";
const num1 = Math.ceil(Math.random() * 10 + 1); //Math.ceil will round the random number to the nearest value
const num2 = Math.ceil(Math.random() * 10 + 1); //Math.ceil will round the random number to the nearest value

const question = document.getElementById("question");
const inputEl = document.getElementById("input");
const formEl = document.getElementById("form");
const scoreEl = document.getElementById("score");

question.innerText = `What is ${num1} multiply by ${num2}?`;

const correctAnswer = num1 * num2;
// Now we want toget the score from localStorage:
let score = JSON.parse(localStorage.getItem("score"));
// If there is no score:
if (!score) {
  score = 0;
}

scoreEl.innerText = `Score: ${score}`;

formEl.addEventListener("submit", () => {
  const userAnswer = +inputEl.value;
  if (userAnswer === correctAnswer) {
    score++;
    updateLocalstorage();
    //  console.log(score);
  } else {
    score--;
    updateLocalstorage();
    //  console.log(score);
  }
});

function updateLocalstorage() {
  localStorage.setItem("score", JSON.stringify(score));
}

const quizFrom = document.querySelector(".quiz-form");
const submitAnswerBtn = document.querySelector("#submit-answer-btn");
const outputDiv = document.querySelector("#output-div");

let correctAnswer = [
  "90°",
  "Right Angled",
  "2 congruent sides",
  "180 degrees",
  "3",
  "90°",
  "Equilateral triangle",
  "One right angle",
  "a + b + c",
  "no",
];

function calculateScore() {
  let score = 0;
  let index = 0;
  let formResult = new FormData(quizFrom);
  for (let value of formResult.values()) {
    if (value === correctAnswer[index]) {
      score = score + 1;
    }
    index = index + 1;
  }
  outputDiv.innerText = `your score is ${score}`;
}


submitAnswerBtn.addEventListener("click", calculateScore);

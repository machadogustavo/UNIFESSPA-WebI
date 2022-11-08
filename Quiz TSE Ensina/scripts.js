// Variaveis

const question = document.querySelector(".questionText");

const answers = document.querySelector(".answers");

const questionQtd = document.querySelector(".questionQtd");

const textResult = document.querySelector(".finish .resultTexts")

const textResultBad = document.querySelector(".finish .resultTexts .badResult")
const textResultMid = document.querySelector(".finish .resultTexts .midResult")
const textResultGood = document.querySelector(".finish .resultTexts .goodResult")

const textFinish = document.querySelector(".finish span");

const content = document.querySelector(".content");

const contentFinish = document.querySelector(".finish");

const begin = document.querySelector(".begin");

const btnBegin = document.querySelector(".begin button")

const btnRestart = document.querySelector(".finish button");

import questions from "./questions.js";

let currentIndex = 0;
let questionsCorrect = 0;

// Iniciar Quiz

btnBegin.onclick = () => {
    content.style.display = "flex"
    begin.style.display = "none"
}

// Botão Reiniciar Quiz
btnRestart.onclick = () => {
  content.style.display = "none";
  contentFinish.style.display = "none";
  begin.style.display = "flex"

  currentIndex = 0;
  questionsCorrect = 0;
  loadQuestion();
};

function nextQuestion(e) {
  if (e.target.getAttribute("data-correct") === "true") {
    questionsCorrect++;
  }

  if (currentIndex < questions.length - 1) {
    currentIndex++;
    loadQuestion();
  } else {
    finish();
  }
}

function finish() {
  textFinish.innerHTML = `Você acertou ${questionsCorrect} de ${questions.length}`;
  content.style.display = "none";
  contentFinish.style.display = "flex";

  if(questionsCorrect <= 3){
    textResultGood.style.display = "none"
    textResultMid.style.display = "none"
    textResultBad.style.display = "flex"
  }

  else if(questionsCorrect <= 6){
    textResultGood.style.display = "none"
    textResultMid.style.display = "flex"
    textResultBad.style.display = "none"
  }

  else if(questionsCorrect >= 8){
    textResultGood.style.display = "flex"
    textResultMid.style.display = "none"
    textResultBad.style.display = "none"
  }
}

function loadQuestion() {
  questionQtd.innerHTML = `${currentIndex + 1}/${questions.length}`;

  const item = questions[currentIndex];
  answers.innerHTML = "";
  question.innerHTML = item.question;

  item.answers.forEach((answer) => {
    const div = document.createElement("div");

    div.innerHTML = `
    <button class="answer" data-correct="${answer.correct}">
        ${answer.option}
    </button>`;

    
    answers.appendChild(div);


  });

  document.querySelectorAll(".answer").forEach((item) => {
    item.addEventListener("click", nextQuestion);
  });
}

loadQuestion();

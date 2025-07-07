const questionData = {
  T0: [
    {
      question: "What is a good safety precaution when using a generator?",
      answers: ["A. Use indoors", "B. Connect neutral to ground", "C. Use in well-ventilated area", "D. Never use with inverter"],
      correct: "C"
    }
  ],
  // T1 through T9 would be filled with real data here
};

let currentTopic = "T0";
let currentIndex = 0;

function loadTopic() {
  currentTopic = document.getElementById("topicSelect").value;
  currentIndex = 0;
  showCard();
}

function showCard() {
  const question = questionData[currentTopic][currentIndex];
  document.getElementById("question").innerText = question.question;
  const answersHTML = question.answers.map((a, i) => `<div>${String.fromCharCode(65+i)}. ${a}</div>`).join("");
  document.getElementById("answers").innerHTML = answersHTML + `<p><strong>Answer:</strong> ${question.correct}</p>`;
  document.getElementById("answers").style.display = "none";
}

function showAnswer() {
  document.getElementById("answers").style.display = "block";
}

function nextCard() {
  const topicQuestions = questionData[currentTopic];
  currentIndex = (currentIndex + 1) % topicQuestions.length;
  showCard();
}

window.onload = showCard;
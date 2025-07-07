const questionData = {
  "T0": [
    {
      question: "What is a good safety precaution when using a generator?",
      answers: [
        "Use indoors",
        "Connect neutral to ground",
        "Use in well-ventilated area",
        "Never use with inverter"
      ],
      correct: "C"
    },
    {
      question: "What should be done to all external antennas to prevent lightning damage?",
      answers: [
        "Ground the base of the antenna",
        "Make sure the mast is painted",
        "Keep the coax above ground",
        "Use rubber washers under mounting bolts"
      ],
      correct: "A"
    }
  ],
  "T1": [
    {
      question: "What is an FCC-issued call sign?",
      answers: [
        "A code used to access repeaters",
        "A unique designator assigned to a licensed operator",
        "A type of transmission mode",
        "A frequency allocation chart"
      ],
      correct: "B"
    }
  ]
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
  const answersHTML = question.answers.map((a, i) => {
    return '<div>' + String.fromCharCode(65+i) + '. ' + a + '</div>';
  }).join("");
  document.getElementById("answers").innerHTML = answersHTML + '<p><strong>Answer:</strong> ' + question.correct + '</p>';
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
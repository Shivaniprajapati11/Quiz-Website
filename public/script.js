let questions = [
  {
    question: "What does HTML stand for?",
    options: {
      A: "Hyper Text Markup Language",
      B: "High Text Machine Language",
      C: "Hyper Tool Multi Language",
      D: "None"
    },
    correctAnswer: "A"
  },
  {
    question: "What is the purpose of CSS?",
    options: {
      A: "To style web pages",
      B: "To manage database",
      C: "To create server",
      D: "To handle logic"
    },
    correctAnswer: "A"
  },
  {
    question: "Which language is used for web development?",
    options: {
      A: "Python",
      B: "JavaScript",
      C: "C++",
      D: "Java"
    },
    correctAnswer: "B"
  },
  {
    question: "What does JS stand for?",
    options: {
      A: "Java Source",
      B: "Java Style",
      C: "JavaScript",
      D: "Just Script"
    },
    correctAnswer: "C"
  }
];

let index = 0;
let score = 0;
let answers = {}; // store user answers

function load() {
  let q = questions[index];

  document.getElementById("question").innerText = q.question;

  document.getElementById("A").innerText = q.options.A;
  document.getElementById("B").innerText = q.options.B;
  document.getElementById("C").innerText = q.options.C;
  document.getElementById("D").innerText = q.options.D;

  // remove previous selection
  document.querySelectorAll(".option").forEach(btn => {
    btn.classList.remove("selected");
  });

  // show selected if exists
  if (answers[index]) {
    document.getElementById(answers[index]).classList.add("selected");
  }

  // progress bar
  let progress = ((index + 1) / questions.length) * 100;
  document.getElementById("progress-bar").style.width = progress + "%";
}

// select answer
function selectAnswer(ans) {
  answers[index] = ans;

  document.querySelectorAll(".option").forEach(btn => {
    btn.classList.remove("selected");
  });

  document.getElementById(ans).classList.add("selected");
}

// next
function nextQuestion() {
  if (index < questions.length - 1) {
    index++;
    load();
  } else {
    calculateScore();
  }
}

// back
function prevQuestion() {
  if (index > 0) {
    index--;
    load();
  }
}

// score
function calculateScore() {
  score = 0;

  questions.forEach((q, i) => {
    if (answers[i] === q.correctAnswer) {
      score++;
    }
  });

  document.querySelector(".container").innerHTML =
    `<h2>🎉 Completed</h2>
     <h3>Your Score: ${score}/${questions.length}</h3>`;
}

load();
const startButton = document.getElementById('start-btn')
const nextButton = document.getElementById('next-btn')
const questionContainerElement = document.getElementById('question-container')
const questionElement = document.getElementById('question')
const answerButtonsElement = document.getElementById('answer-buttons')

let shuffledQuestions, currentQuestionIndex

startButton.addEventListener('click', startGame)
nextButton.addEventListener('click', () => {
  currentQuestionIndex++
  setNextQuestion()
})

function startGame() {
  startButton.classList.add('hide')
  shuffledQuestions = questions.sort(() => Math.random() - .5)
  currentQuestionIndex = 0
  questionContainerElement.classList.remove('hide')
  setNextQuestion()
}

function setNextQuestion() {
  resetState()
  showQuestion(shuffledQuestions[currentQuestionIndex])
}

function showQuestion(question) {
  questionElement.innerText = question.question
  question.answers.forEach(answer => {
    const button = document.createElement('button')
    button.innerText = answer.text
    button.classList.add('btn')
    if (answer.correct) {
      button.dataset.correct = answer.correct
    }
    button.addEventListener('click', selectAnswer)
    answerButtonsElement.appendChild(button)
  })
}

function resetState() {
  clearStatusClass(document.body)
  nextButton.classList.add('hide')
  while (answerButtonsElement.firstChild) {
    answerButtonsElement.removeChild(answerButtonsElement.firstChild)
  }
}

function selectAnswer(e) {
  const selectedButton = e.target
  const correct = selectedButton.dataset.correct
  setStatusClass(document.body, correct)
  Array.from(answerButtonsElement.children).forEach(button => {
    setStatusClass(button, button.dataset.correct)
  })
  if (shuffledQuestions.length > currentQuestionIndex + 1) {
    nextButton.classList.remove('hide')
  } else {
    startButton.innerText = 'Restart'
    startButton.classList.remove('hide')
  }
}

function setStatusClass(element, correct) {
  clearStatusClass(element)
  if (correct) {
    element.classList.add('correct')
  } else {
    element.classList.add('wrong')
  }
}

function clearStatusClass(element) {
  element.classList.remove('correct')
  element.classList.remove('wrong')
}

const questions = [
    {
        question : "What is the name of the first JoJo?",
        answers : [
            {text: "Jonathan Joestar", correct : true},
            {text: "Josuke Higashkata", correct : false},
            {text: "Jotaro Kujo", correct : false},
            {text: "Giorno Giovanna", correct : false}
        ]
    },
    {
        question : "In the first episode of the first season, Dio Brando kills answers dog by putting it in an oven. What was the name of this dog?",
        answers : [
            {text: "Diego", correct : false},
            {text: "Hugo", correct : false},
            {text: "Danny", correct : true},
            {text: "George", correct : false}
        ]
    },
    {
        question : "What is the name of Jolyne Cujoh's Stand in Part 6?",
        answers : [
            {text: "Crazy Diamond", correct : false},
            {text: "Killer Queen", correct : false},
            {text: "Stone Free", correct : true},
            {text: "Whitesnake", correct : false}
        ]
    },
    {
        question : "How many parts are currently out for JoJo (manga)?",
        answers : [
            {text: "3 parts", correct : false},
            {text: "12 parts", correct : false},
            {text: "5 parts", correct : false},
            {text: "9 parts", correct : true}
        ]
    },
    {
        question : "What ancient technique does Joseph Joestar learn to use during his battle against the Pillar Men?",
        answers : [
            {text: "Hamon", correct : false},
            {text: "Stand", correct : false},
            {text: "Ripple", correct : true},
            {text: "Spin", correct : false}
        ]
    },
    {
        question : "Who is the main character of Part 5 and the leader of Passione's gang?",
        answers : [
            {text: "Bruno Bucciarati", correct : false},
            {text: "Giorno Giovanna", correct : true},
            {text: "Trish Una", correct : false},
            {text: "Narancia Ghirga", correct : false}
        ]
    },
    {
        question : "What family heirloom plays answers significant role in the early parts of Phantom Blood?",
        answers : [
            {text: "Joestar Mansion", correct : false},
            {text: "Stone Mask", correct : true},
            {text: "Sword of Luck and Pluck", correct : false},
            {text: "Red Stone of Aja", correct : false}
        ]
    },
    {
        question : "Which of Joseph Joestar's companions is answers skilled archaeologist and Hamon user?",
        answers : [
            {text: "Caesar Zeppeli", correct : true},
            {text: "Lisa Lisa", correct : false},
            {text: "Rudol von Stroheim", correct : false},
            {text: "Santana", correct : false}
        ]
    },
    {
        question : "Who is the Stand user with the ability to turn anything it touches into answers bomb?",
        answers : [
            {text: "Okuyasu Nijimura", correct : false},
            {text: "Koichi Hirose", correct : false},
            {text: "Yoshikage Kira", correct : true},
            {text: "Rohan Kishibe", correct : false}
        ]
    },
    {
        question : "Which Stand user from Part 3 can control and manipulate sand with his Stand's abilities?",
        answers : [
            {text: "Iggy", correct : true},
            {text: "Hol Horse", correct : false},
            {text: "Avdol", correct : false},
            {text: "Anubis", correct : false}
        ]
    },
];
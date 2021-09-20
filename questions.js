// this is a var  with  array and object
var questions = [
  {
    title: 'How many types of operators in JavaScript?:',

    choices: [
      'Arithmetic operators',
      'Comparison operators',
      'Logical operators',
      ' Assignment operators',
      'Conditional operators',
    ],
    answer: 'all of the above',
  },
  {
    title:
      'A very useful tool for used during development and debugging for printing content to the debugger is:',
    choices: ['Javascript', 'terminal / bash', 'for loops', 'console log'],
    answer: 'console log',
  },
  {
    title: 'Arrays in Javascript can be used to store ____.',
    choices: [
      'numbers and strings',
      'other arrays',
      'booleans',
      'all of the above',
    ],
    answer: 'all of the above',
  },
  {
    title:
      'String values must be enclosed within ____ when being assigned to variables.',
    choices: ['commas', 'curly brackets', 'quotes', 'parenthesis'],
    answer: 'quotes',
  },
  {
    title: 'The condition in an if / else statement is enclosed within ____.',
    choices: ['quotes', 'curly brackets', 'parentheses', 'square brackets'],
    answer: 'parentheses',
  },
]
//declared variables
var score = 0
var questionIndex = 0

var currentTime = document.querySelector('#currentTime')
var timer = document.querySelector('#startTime')
var questionsDiv = document.querySelector('#questionsDiv')
var wrapper = document.querySelector('#wrapper')

// Seconds left is 15 seconds per question:
var secondsLeft = 76
// Holds interval time
var holdInterval = 0
// Holds penalty time
var penalty = 10
// Creates new element
var ulCreate = document.createElement('ul')

timer.addEventListener('click', function () {
  // checking zero because its originally set to zero
  if (holdInterval === 0) {
    holdInterval = setInterval(function () {
      secondsLeft--
      currentTime.textContent = 'Time: ' + secondsLeft

      if (secondsLeft <= 0) {
        clearInterval(holdInterval)
        allDone()
        currentTime.textContent = "Time's up!"
      }
    }, 1000)
  }
  render(questionIndex)
})

// Renders questions and choices to page:
function render(questionIndex) {
  questionsDiv.innerHTML = ''
  ulCreate.innerHTML = ''
  // loops to loop through all info in array
  for (var i = 0; i < questions.length; i++) {
    var userQuestion = questions[questionIndex].title
    var userChoices = questions[questionIndex].choices
    questionsDiv.textContent = userQuestion
  }
  userChoices.forEach(function (newItem) {
    var listItem = document.createElement('li')
    listItem.textContent = newItem
    questionsDiv.appendChild(ulCreate)
    ulCreate.appendChild(listItem)
    listItem.addEventListener('click', compare)
  })
}
function compare(event) {
  var element = event.target

  if (element.matches('li')) {
    var createDiv = document.createElement('div')
    createDiv.setAttribute('id', 'createDiv')

    if (element.textContent == questions[questionIndex].answer) {
      score++
      createDiv.textContent =
        'Correct! The answer is:  ' + questions[questionIndex].answer
    } else {
      secondsLeft = secondsLeft - penalty
      createDiv.textContent =
        'Wrong! The correct answer is:  ' + questions[questionIndex].answer
    }
  }
  questionIndex++
  if (questionIndex >= questions.length) {
    // All done will append last page with user stats
    allDone()
    createDiv.textContent =
      'End of quiz!' +
      ' ' +
      'You got  ' +
      score +
      '/' +
      questions.length +
      ' Correct!'
  } else {
    render(questionIndex)
  }
  questionsDiv.appendChild(createDiv)
}
function allDone() {
  questionsDiv.innerHTML = ''
  currentTime.innerHTML = ''

  var createH1 = document.createElement('h1')
  createH1.setAttribute('id', 'createH1')
  createH1.textContent = 'Finish!'
  questionsDiv.appendChild(createH1)

  var createP = document.createElement('p')
  createP.setAttribute('id', 'createP')

  questionsDiv.appendChild(createP)
  //Calculate  the time and replace it with score
  if (secondLeft >= 0) {
    var timeRemaining = secondsLeft
    var createP2 = document.createElement('p')
    clearInterval(holdInterval)
    createP.textContent = 'Your final score is: ' + timeRemaining

    questionsDiv.appendChild(createP2)
  }

  // Label
  var createLabel = document.createElement('label')
  createLabel.setAttribute('id', 'createLabel')
  createLabel.textContent = 'Enter your initials: '

  questionsDiv.appendChild(createLabel)
}
// input
var createInput = document.createElement('input')
createInput.setAttribute('type', 'text')
createInput.setAttribute('id', 'initials')
createInput.textContent = ''
// submit
var createSubmit = document.createElement('button')
createSubmit.setAttribute('type', 'submit')
createSubmit.setAttribute('id', 'Submit')
createSubmit.textContent = 'Submit'
questionsDiv.appendChild(createSubmit)

    createSubmit.addEventListener("click", function () {
        var initials = createInput.value;

        if (initials === null) {

            console.log("No value entered!");

        } else {
            var finalScore = {
                initials: initials,
                score: timeRemaining
            }
             console.log(finalScore);
            var allScores = localStorage.getItem("allScores");
            if (allScores === null) {
                allScores = [];
            } else {
                allScores = JSON.parse(allScores);
            }

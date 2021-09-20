// this is a var  with  array and object
var questions = [
  {
    title: 'What is a class in Java?:',
    choices: ['strings', 'alerts', 'numbers', ' template'],
    answer: '  template',
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

//selects the h1 wth question id from html
var question = document.querySelector('#question');
//selects all divs with class answer-text and makes them an array
var answers = Array.from(document.querySelectorAll('.answer-text'));
var number1 = document.querySelector('#number1')
var number2 = document.querySelector('#number2')
var timerElement = document.querySelector('#timercount');

//set currentQuestion equal to an empty object
var currentQuestion = {}
//sets the questionNumber to 0
var questionNumber = 0
//set questionsLeft to and empty array
var questionsLeft = []
var timer;
var timerCount = 60;

//make questions variable as an array with objects inside (containing qestion content)
var questions = [
    {
        question: 'Commonly used data types DO NOT include:',
        answer1: 'strings',
        answer2: 'booleans',
        answer3: 'alerts',
        answer4: 'numbers',
        rightAnswer: '3',
    },
    {
        question: "The condition in an if / else statement is enclosed within _____.",
        answer1: "quotes",
        answer2: "curly brackets",
        answer3: "parentheses",
        answer4: "square brackets",
        rightAnswer: '3',
    },
    {
        question: "Arrays in Javascript can be used to store _____.",
        answer1: "numbers and strings",
        answer2: "other arrays",
        answer3: "booleans",
        answer4: "all of the above",
        rightAnswer: '4',
    },
    {
        question: "A very useful tool used during development and debugging for printing content to the debugger is:",
        answer1: "Javascript",
        answer2: "terminal/bash",
        answer3: "for loops",
        answer4: "console.log",
        rightAnswer: '4',
    }
]

//sets the total questions to 4
var totalQuestions = 4

//create function to begin game
function beginGame() {
    startTimer()
    //starts question counter at 0
    questionNumber = 0
    //sets the available questions variable equal to all of the values in the questions array, using a "spread operator"
    questionsLeft = [...questions]
    //calls getNextQuestion function at end
    getNextQuestion()
}

// The startTimer function starts the timer
function startTimer() {
    // Sets timer
    timer = setInterval(function() {
        timerCount--;
        timerElement.innerText = timerCount;
        
    }, 1000);
}

//create getNextQuestion function being called at the end of startGame function
function getNextQuestion() {
    //
    if(timerCount <= 0 || questionsLeft.length === 0 || questionNumber > totalQuestions) {
        //sets localStorage item as 'lastScore', then the score acheived
        localStorage.setItem('lastScore', timerCount)

        return window.location.assign('finished.html')
    }


    questionNumber++
    
    number1.innerText = questionNumber
    number2.innerText = totalQuestions

    
    //Creates a variable that randomizes the questions in the array
    var randomQuestion = Math.floor(Math.random() * questionsLeft.length)
    //sets the currentQuestion variable (empty object) equal to the randomized index value of questionsLeft
    currentQuestion = questionsLeft[randomQuestion]
    //sets the textvalue of the question id equal to the currentQuestion variable
    question.innerText = currentQuestion.question

    //variables for answer selection
    var answer1 = document.getElementById('answer1');
    answer1.innerText = currentQuestion.answer1
    var answer2 = document.getElementById('answer2');
    answer2.innerText = currentQuestion.answer2
    var answer3 = document.getElementById('answer3');
    answer3.innerText = currentQuestion.answer3
    var answer4 = document.getElementById('answer4');
    answer4.innerText = currentQuestion.answer4

    //Taking the asked question out of the questionsLeft array. (Where to start, how many to splice)
    questionsLeft.splice(randomQuestion, 1)
}

//iterating through choices again with forEach loop
answers.forEach(choice => {
    //adds an event listener for when a choice is clicked
    choice.addEventListener('click', e => {
        // variable that is equal to the click event target (choice)
        var selectedAnswer = e.target
        // makes a variable that is equal to the selectedChoice dataset value
        var selectedAnswerData = selectedAnswer.dataset['number']

        if (selectedAnswerData === currentQuestion.rightAnswer) {
            getNextQuestion()
        } else {
            decrementTime()
            getNextQuestion()
        }

    })
})

//decreases time by 30 seconds
function decrementTime() {
    timerCount -= 30;
    timerElement.innerText = timerCount
}

//runs beginGame function on page load
beginGame()
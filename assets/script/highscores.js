//selects highScoresList id
var highScoresList = document.querySelector('#allHighScores')
//sets highScores to the value of highScores from local storage, parsed into an object from a string 
var highScores = JSON.parse(localStorage.getItem("highScores")) || []

//sets the text value of highScoresList to - creating a new array with map
highScoresList.innerHTML =
//creating a new array with map
highScores.map(function (currentScore) {
    //"template literal"
    return `<li class="high-score">${currentScore.name} : ${currentScore.currentScore}</li>`
}).join("")
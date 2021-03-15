//selects highScoresList id
var allhighScores = document.querySelector('#allHighScores')
//sets highScores to the value of highScores from local storage, parsed into an object from a string 
var highScores = JSON.parse(localStorage.getItem("highScores")) || []

//text allhighScores
allhighScores.innerHTML =
//creating a new array with map
highScores.map(function (currentScore) {
    //"template literal"
    return `<li class="high-score">${currentScore.name} : ${currentScore.currentScore}</li>`
}).join("")
//selects the username id from the html
var username = document.querySelector('#username')
//selects the save button id
var saveBtn = document.querySelector('#saveBtn')
//selects the end score id
var endScore = document.querySelector('#endScore')
//creates a variable that runs a local Storage getItem method getting the setItem into local storage from earlier
var lastScore = localStorage.getItem('lastScore')

//?var converts the getiitem into an object from a string
var highScores = JSON.parse(localStorage.getItem('highScores')) || []


//creates a variale for the most highscores available to create
var mostHighScores = 5

//sets the text value of endScore var to the mostRecentScore in local storage
endScore.innerText = lastScore

//targets username, adds an event listener that renables the saveBtn on keyup 
username.addEventListener('keyup', function() {
    //save score button is disabled if there is no value in username
    saveBtn.disabled = !username.value
})

//create saveScore function
function saveScore(e) {
    e.preventDefault()

    //object for currentScore
    var currentScore = {
        currentScore: lastScore,
        name: username.value
    }

    highScores.push(currentScore)
    highScores.sort((x,y) => {
        return y.currentScore - x.currentScore
    })

    
    highScores.splice(5)
    //target localSotrage, setItem to Highscores key name the value pair of the highScores variable, made into a string (so that local storage can read)
    localStorage.setItem('highScores', JSON.stringify(highScores))
    //back to start page
    window.location.assign('index.html')

    
}

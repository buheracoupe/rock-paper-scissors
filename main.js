//Retrieving Elements
const rulesModal = document.querySelector(".rules-modal");
const rulesBtn = document.querySelector("#rules");
const rock = document.querySelector("#rock");
const paper = document.querySelector("#paper");
const scissors = document.querySelector("#scissors");
const optionsArray = [rock, paper, scissors];
const userOptions = document.querySelectorAll(".hand");
const resultsDisplay = document.querySelector(".results-display");
const triangleContainer = document.querySelector(".triangle-container");
const score = document.querySelector(".user.score");
const computerScore = document.querySelector(".house.score");
let currentComputerScore = parseInt(computerScore.innerText)
let currentScore = parseInt(score.innerText)
let selectedOption;
let whoWon;
// generate random Computer Pick
function randomPick(){
    randomOptionIndex = Math.round(Math.random()*2)
    randomOption = optionsArray[randomOptionIndex]
    return randomOption
}



userOptions.forEach((option) => {
    option.addEventListener("click", () => {
        selectedOption = option;
        determineWinner();
    })
})

function determineWinner(){
    console.log("is this working?")
const computerOption = randomPick();

console.log(computerOption.id)
triangleContainer.style.display = "none";
// construct switch statement for the conditional checks
switch(true){
    //When the computer wins case fall-through
    case computerOption === paper && selectedOption === rock:
    case computerOption === rock && selectedOption === scissors:
    case computerOption === scissors && selectedOption === paper:
    console.log("Computer Wins")
    whoWon = "computer";
    updateScore();
    resultsDisplay.innerHTML = `<div class="results-container">
        <div class="user-result">
            <p>You Picked</p>
            <img class="hand result-hand" id="${selectedOption.id}" src="${selectedOption.src}" alt="user-choice">
        </div>
        <div class="result">
        <p>The House Won!</p>
        <button onclick="replayRound()" id="play-again">Play Again</button>
        </div>
        <div class="computer-result">
            <p>The House Picked</p>
            <img class="hand result-hand" id="${computerOption.id}" src="${computerOption.src}" alt="computer-choice">
        </div>
    </div>`
    break;
    // When the user wins case fall-through
    case selectedOption === paper && computerOption === rock:
    case selectedOption === rock && computerOption === scissors:
    case selectedOption === scissors && computerOption === paper:
    console.log("User Wins")
    whoWon = "user"
    updateScore();
    resultsDisplay.innerHTML = `<div class="results-container">
        <div class="user-result">
            <p>You Picked</p>
            <img class="hand result-hand" id="${selectedOption.id}" "src="${selectedOption.src}" alt="user-choice">
        </div>
        <div class="result">
        <p>You Won!</p>
        <button onclick="replayRound()" id="play-again">Play Again</button>
        </div>
        <div class="computer-result">
            <p>The House Picked</p>
            <img class="hand result-hand" id="${computerOption.id}" src="${computerOption.src}" alt="computer-choice">
        </div>
    </div>`
    break;
    // handling ties
    case selectedOption === computerOption:
        resultsDisplay.innerHTML = `<div class="results-container tie-container">
        <p class="tie">Both You and the House picked</p>
        <img class="hand result-hand" id="${computerOption.id}" src="${computerOption.src}" alt="computer-choice">
        <div class="result">
        <p>It's a Tie!</p>
        <button onclick="replayRound()" id="play-again">Play Again</button>
        </div>
        
    </div>`
}
resultsDisplay.style.display = "block"
}

// onclick eventHandler
function toggleRules(){
    if(rulesModal.style.display === "block") return;
    else{
        rulesModal.style.display = "block"
        console.log("are you trying?")
        console.log(rulesModal.style.display)
    }
}

// hide rulesModal 
function hideRules(){
    rulesModal.style.display = "none";
}


function updateScore(){
if(whoWon === "user"){
    currentScore++
   score.textContent = currentScore;
}else if(whoWon === "computer"){
    currentComputerScore++
    computerScore.textContent = currentComputerScore;
}
}

function replayRound(){
playAgain = document.querySelector("#play-again")
resultsDisplay.style.display = "none";
triangleContainer.style.display = "block";
}

function resetGame(){
currentScore = 0;
currentComputerScore =0;
score.textContent = currentScore;
computerScore.textContent = currentComputerScore;
resultsDisplay.style.display = "none";
triangleContainer.style.display = "block";
}

  
  document.addEventListener("click", (event) => {
    if (event.target !== rulesModal && event.target !== rulesBtn && rulesModal.style.display === "block") {
      hideRules();
    }
  });

  
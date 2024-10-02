const rulesModal = document.querySelector(".rules-modal");
const rulesBtn = document.querySelector("#rules");
const rock = document.querySelector("#rock");
const paper = document.querySelector("#paper");
const scissors = document.querySelector("#scissors");
const optionsArray = [rock, paper, scissors];
const userOptions = document.querySelectorAll(".hand");
const resultsDisplay = document.querySelector(".results-display");
const triangleContainer = document.querySelector(".triangle-container");
const score = document.querySelector(".score");
let currentScore = parseInt(score.innerText)
let selectedOption;

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
    resultsDisplay.innerHTML = `<div class="results-container">
        <div class="user-result">
            <p>You Picked</p>
            <img class="hand result-hand" id="${selectedOption.id}" src="${selectedOption.src}" alt="user-choice">
        </div>
        <div class="result">Computer Won!</div>
        <div class="computer-result">
            <p>Computer Picked</p>
            <img class="hand result-hand" id="${computerOption.id}" src="${computerOption.src}" alt="computer-choice">
        </div>
    </div>`
    break;
    // When the user wins case fall-through
    case selectedOption === paper && computerOption === rock:
    case selectedOption === rock && computerOption === scissors:
    case selectedOption === scissors && computerOption === paper:
    console.log("User Wins")
    updateScore(true)
    resultsDisplay.innerHTML = `<div class="results-container">
        <div class="user-result">
            <p>You Picked</p>
            <img class="hand result-hand" id="${selectedOption.id}" "src="${selectedOption.src}" alt="user-choice">
        </div>
        <div class="result">You Won!</div>
        <div class="computer-result">
            <p>Computer Picked</p>
            <img class="hand result-hand" id="${computerOption.id}" src="${computerOption.src}" alt="computer-choice">
        </div>
    </div>`
    break;
    // handling ties
    case selectedOption === computerOption:
        resultsDisplay.innerHTML = `<div class="results-container tie-container">
        <p class="tie">It's a Tie! You both picked</p>
        <img class="hand result-hand" id="${computerOption.id}" src="${computerOption.src}" alt="computer-choice">
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


function updateScore(roundResult){
if(roundResult){
    currentScore++
   score.textContent = currentScore;
}
}

function replayRound(){
resultsDisplay.style.display = "none";
triangleContainer.style.display = "block";
}

function resetGame(){
currentScore = 0;
score.textContent = currentScore;
resultsDisplay.style.display = "none";
triangleContainer.style.display = "block";
}

rulesModal.addEventListener("click", (event) => {
    event.stopPropagation(); // Prevent event from bubbling up
  });
  
  document.addEventListener("click", (event) => {
    if (event.target !== rulesModal && event.target !== rulesBtn && rulesModal.style.display === "block") {
      hideRules();
      console.log("don't run")
      console.log(rulesModal.style.display)
    }
  });
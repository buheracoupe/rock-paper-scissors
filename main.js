const rulesModal = document.querySelector(".rules-modal");
const rulesBtn = document.querySelector("#rules");
const rock = document.querySelector("#rock");
const paper = document.querySelector("#paper");
const scissors = document.querySelector("#scissors");
const optionsArray = [rock, paper, scissors];
const userOptions = document.querySelectorAll(".hand");
const resultsDisplay = document.querySelector(".results-display");
const triangleContainer = document.querySelector(".triangle-container");
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
triangleContainer.style.display = "none";
// construct switch statement for the conditional checks
switch(true){
    //When the computer wins case fall-through
    case computerOption === rock && selectedOption === paper:
    case computerOption === rock && selectedOption === scissors:
    case computerOption === scissors && selectedOption === paper:
    console.log("Computer Wins")
    resultsDisplay.innerHTML = `<div class="user-results">
        <p>You Picked</p>
    </div>
    <p class="result">The Computer Won!</p>
    <div class="computer-results">
        <p>The Computer Picked</p>
    </div>`
    break;
    // When the user wins case fall-through
    case selectedOption === rock && computerOption === paper:
    case selectedOption === rock && computerOption === scissors:
    case selectedOption === scissors && computerOption === paper:
    console.log("User Wins")
    resultsDisplay.innerHTML = `<div class="user-results">
        <p>You Picked</p>
    </div>
    <p class="result">You Won!</p>
    <div class="computer-results">
        <p>The Computer Picked</p>
    </div>`
    break;
    // handling ties
    case selectedOption === computerOption:
        console.log("This is a tie!")
}
}

// onclick eventHandler
function toggleRules(){
    console.log(rulesModal.display)
    if(rulesModal.style.display === "block") return;
    else{
        rulesModal.style.display = "block"
    }
}

// hide rulesModal 
function hideRules(){
    rulesModal.style.display = "none";
}
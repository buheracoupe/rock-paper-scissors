const rulesModal = document.querySelector(".rules-modal");
const rulesBtn = document.querySelector("#rules");
const rock = document.querySelector("#rock");
const paper = document.querySelector("#paper");
const scissors = document.querySelector("#scissors");
const optionsArray = [rock, paper, scissors];
const userOptions = document.querySelectorAll(".hand")
let selectedOption;

// generate random Computer Pick
function randomPick(){
    randomOptionIndex = Math.round(Math.random()*2)
    randomOption = optionsArray[randomOptionIndex]
    console.log(randomOption)
    return randomOption
}
const computerChoice = randomPick();

userOptions.forEach((option) => {
    option.addEventListener("click", option => selectedOption = option)
})



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
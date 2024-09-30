const rulesModal = document.querySelector(".rules-modal");
const rulesBtn = document.querySelector("#rules");



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
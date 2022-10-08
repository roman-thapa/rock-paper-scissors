let userChoice;
let computerChoice;
let win;
let userScore=0;
let pcScore=0;

const userResult = document.querySelector('.userScore');
const pcResult = document.querySelector('.pcScore');
const outcome = document.querySelector('.match');
const resultInText = document.querySelector('.result');
const finalOutcome = document.querySelector('.outcome');
const showUserChoice = document.querySelector('.userChoice');
const showPcChoice = document.querySelector('.pcChoice');
const button = document.querySelector('.action');
const choiceButton = document.querySelector('.button');

updateScore();

function updateScore(){
    userResult.innerText = userScore;
    pcResult.innerText = pcScore;
}

rock = document.querySelector('#rock');
 rock.addEventListener('click', () => {
    userChoice = "ROCK";
    getComputerChoice();
    getResult();
});

paper = document.querySelector('#paper');
 paper.addEventListener('click', () => {
    userChoice = "PAPER";
    getComputerChoice();
    getResult();
});

scissor = document.querySelector('#scissor');
 scissor.addEventListener('click', () => {
    userChoice = "SCISSOR";
    getComputerChoice();
    getResult();
});

function getComputerChoice() {
    computerChoice = Math.floor(Math.random()*(4-1)+1);
    if(computerChoice===1){
        computerChoice= "ROCK";
    }
    else if(computerChoice===2){
        computerChoice= "PAPER";
    }
    else{
        computerChoice= "SCISSOR";
    }
}

function getResult(){
    if(userChoice=="ROCK" && computerChoice=="SCISSOR") {
        win = true;
        userScore++;
        result();
    }

    else if(userChoice=="PAPER" && computerChoice=="ROCK") {
        win = true;
        userScore++;
        result();
    }

    else if(userChoice=="SCISSOR" && computerChoice=="PAPER"){
        win = true;
        userScore++;
        result();
    }

    else if (userChoice==computerChoice) {
        condition();
    }

    else{
        win = false;
        pcScore++;
        result();
    }
}

function result(){
    if (win){
        updateScore();
        condition();
    }
    else{
        updateScore();
        condition();
    }

    if (userScore === 5 || pcScore === 5){
        conclude();
    }
}


function condition(){
    if (userChoice === computerChoice){
        outcome.innerText = `${userChoice} and ${computerChoice} are same`;
        resultInText.innerText = "Draw";
        showChoice();
    }
    else if (win){
        outcome.innerText = `${userChoice} beat ${computerChoice}`;
        resultInText.innerText = "WIN";
        showChoice();
    }
    else{
        outcome.innerText = `${computerChoice} beat ${userChoice}`;
        resultInText.innerText = "LOSE";
        showChoice();
    }

}

function showChoice(){
    showUserChoice.innerText = userChoice;
    showPcChoice.innerHTML = computerChoice;
}

function conclude(){
    if(userScore === 5){
        finalOutcome.innerText = "YOU WIN!!!";
        createButton();
    }
    else{
        finalOutcome.innerText = "YOU LOSE!!!";
        createButton();
    }
}

function createButton(){
    let restartButton = document.createElement('button');
    let text = document.createTextNode("Restart");
    restartButton.appendChild(text);
    button.replaceChild(restartButton, choiceButton);
    restartButton.addEventListener('click',() =>{
        button.replaceChild(choiceButton, restartButton);
        userScore = 0;
        pcScore = 0;
        updateScore();
        //location.reload();
    } )
}
console.log("Welcome to Rock Paper Scissor Game");
let inputFromUser;
let computerChoice;
let win;

function startGameWithNumber() {
    userInput();
    function userInput() {
        inputFromUser = prompt("Please select", "1=rock, 2=paper, 3=scissor");
        switch (inputFromUser) {
            case "1":
                console.log("You have selected Rock");
                break;
            
            case "2":
                console.log("You have selected Paper");
                break;
            
            case "3":
                console.log("You have selected Scissor");
                break;
        
            default:
                alert("Invalid input!\n Try again");
                userInput();
        }
        inputFromUser = parseInt(inputFromUser);
        return inputFromUser;
    }



    getComputerChoice();
    function getComputerChoice() {
        computerChoice = Math.floor(Math.random()*(4-1)+1);
        switch (computerChoice) {
            case 1:
                console.log("PC have selected Rock");
                break;
            
            case 2:
                console.log("PC have selected Paper");
                break;
            
            case 3:
                console.log("PC have selected Scissor");
                break;
        }
        return computerChoice;
    }


    getResult(inputFromUser, computerChoice);

    function getResult(userChoice, pcChoice) {

        if(userChoice==1 && pcChoice==3) {
            console.log("You win!");
            win = true;
        }

        else if(userChoice==3 && pcChoice==1) {
            console.log("You lose!");
            win = false;
        }

        else if (userChoice>pcChoice){
            console.log("You win!");
            win = true;
        }

        else if (userChoice==pcChoice) {
            console.log("It's a draw!\nTry again");
            userInput();
            getComputerChoice();
            getResult(inputFromUser, computerChoice);
        }

        else{
            console.log("You lose!");
            win = false;
        }
    }
}

function bestOfThreeWithNumber(){
    let userWin=0;
    let pcWin=0;
    for(i=0; i<3; i++){
        startGameWithNumber();
        if(win==true){
            userWin+=1;
        }
        else{
            pcWin+=1;
        }
        if(userWin==2 || pcWin==2){
            break;
        }
    }
    if(userWin > pcWin){
        console.log(`\n\tYou won by ` + userWin + " score");
        alert(`You won by ` + userWin + " score");
    }
    else{
        console.log(`\n\tYou lose by ` + pcWin + " score");
        alert("You lose by " + pcWin + " score");
    }
}

function bestOfFiveWithNumber(){
    let userWin=0;
    let pcWin=0;
    for(i=0; i<5; i++){
        startGameWithNumber();
        if(win==true){
            userWin+=1;
        }
        else{
            pcWin+=1;
        }
    }
    if(userWin > pcWin){
        console.log(`\n\tYou won by ` + userWin + " score");
        alert(`You won by ` + userWin + " score");
    }
    else{
        console.log(`\n\tYou lose by ` + pcWin + " score");
        alert(`You lose by ` + pcWin + " score");
    }
}


function startGameWithLetter() {
    
    
    userInput();
    function userInput() {
        inputFromUser = prompt("Please select", "Rock, Paper, Scissor");
        inputFromUser = inputFromUser.toUpperCase();
        switch (inputFromUser) {
            case "ROCK":
                console.log("You have selected Rock");
                break;
            
            case "PAPER":
                console.log("You have selected Paper");
                break;
            
            case "SCISSOR":
                console.log("You have selected Scissor");
                break;
        
            default:
                alert("Invalid input!\n Try again");
                userInput();
        }
        return inputFromUser;
    }



    getComputerChoice();
    function getComputerChoice() {
        computerChoice = Math.floor(Math.random()*(4-1)+1);
        switch (computerChoice) {
            case 1:
                console.log("PC have selected Rock");
                computerChoice = "ROCK";
                break;
            
            case 2:
                console.log("PC have selected Paper");
                computerChoice = "PAPER";
                break;
            
            case 3:
                console.log("PC have selected Scissor");
                computerChoice = "SCISSOR";
                break;
        }
        return computerChoice;
    }


    getResult(inputFromUser, computerChoice);

    function getResult(userChoice, pcChoice) {

        if(userChoice == "PAPER" && pcChoice == "ROCK" ) {
            console.log("You win!");
            win = true;
        }

        else if(userChoice == "SCISSOR" && pcChoice == "PAPER" ) {
            console.log("You win!");
            win = true;
        }

        else if (userChoice == "ROCK" && pcChoice == "SCISSOR" ){
            console.log("You win!");
            win = true;
        }

        else if (userChoice==pcChoice) {
            console.log("It's a draw!\nTry again");
            userInput();
            getComputerChoice();
            getResult(inputFromUser, computerChoice);
            win = true;
        }

        else{
            console.log("You lose!");
            win = false;
        }
    }
}



function bestOfThreeWithLetter(){
    let userWin=0;
    let pcWin=0;
    for(i=0; i<3; i++){
        startGameWithLetter();
        if(win==true){
            userWin+=1;
        }
        else{
            pcWin+=1;
        }
        if(userWin==2 || pcWin==2){
            break;
        }
    }
    if(userWin > pcWin){
        console.log(`\n\tYou won by ` + userWin + " score");
        alert(`You won by ` + userWin + " score");
    }
    else{
        console.log(`\n\tYou lose by ` + pcWin + " score");
        alert("You lose by " + pcWin + " score");
    }
}

function bestOfFiveWithLetter(){
    let userWin=0;
    let pcWin=0;
    for(i=0; i<5; i++){
        startGameWithLetter();
        if(win==true){
            userWin+=1;
        }
        else{
            pcWin+=1;
        }
    }
    if(userWin > pcWin){
        console.log(`\n\tYou won by ` + userWin + " score");
        alert(`You won by ` + userWin + " score");
    }
    else{
        console.log(`\n\tYou lose by ` + pcWin + " score");
        alert(`You lose by ` + pcWin + " score");
    }
}


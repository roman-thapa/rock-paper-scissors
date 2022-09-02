console.log("Welcome to Rock Paper Scissor Game");
let inputFromUser;
let computerChoice;
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
    }

    else if(userChoice==3 && pcChoice==1) {
        console.log("You lose!");
    }

    else if (userChoice>pcChoice){
        console.log("You win!");
    }

    else if (userChoice==pcChoice) {
        console.log("It's a draw!\nTry again");
        userInput();
        getComputerChoice();
        getResult(inputFromUser, computerChoice);
    }

    else{
        console.log("You lose!");
    }
}
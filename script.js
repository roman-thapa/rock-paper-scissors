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
            console.log("Invalid input!\n Try again");
            userInput();
    }
    return inputFromUser;
}



getComputerChoice();
function getComputerChoice() {
    computerChoice = Math.floor(Math.random()*(4-1)+1);
    console.log(computerChoice)
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
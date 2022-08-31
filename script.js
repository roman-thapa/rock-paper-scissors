console.log("Welcome to Rock Paper Scissor Game");
let inputFromUser;
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
console.log(inputFromUser);
/*switch (inputFromUser) {
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
}*/
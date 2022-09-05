function startGameWithLetter() {
    console.log("Welcome to Rock Paper Scissor Game");
    let inputFromUser;
    let computerChoice;
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
        }

        else if(userChoice == "SCISSOR" && pcChoice == "PAPER" ) {
            console.log("You win!");
        }

        else if (userChoice == "ROCK" && pcChoice == "SCISSOR" ){
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
}
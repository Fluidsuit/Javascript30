user_score = 0;
computer_score = 0;

const choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#play");
const userscorepara= document.querySelector("#user_score");
const compscorepara= document.querySelector("#computer_score");
const genComChoice = () =>
{
    const option = ["rock","paper","scissors"];
    const randIdx = Math.floor(Math.random() * 3 );
    return option[randIdx];
}

const showWinner = (userWin,userChoice,compChoice) =>
{
    if (userWin){
        user_score++;
        userscorepara.innerText= user_score;
        msg.innerText = `you win, ${userChoice} beats ${compChoice}`
        msg.style.backgroundColor = "green";
    }else{
        computer_score++;
        compscorepara.innerText= computer_score;
        msg.innerText= `you lose, ${compChoice} beats ${userChoice}`
        msg.style.backgroundColor = "red";
    }
}
const drawGame = () =>
{
    console.log("Game was draw.");
    msg.innerText="draw, Play again";
}

const playGame = (userChoice) =>
{
    console.log("user choice = ",userChoice);
    const compChoice= genComChoice();
    console.log("comp choice = ", compChoice)

    if(userChoice === compChoice)
    {
        drawGame();
    }else {    
        let userWin = true;
        if( userChoice === "rock"){
            userWin = compChoice === "paper" ? false :  true;
        }else if(userChoice === "paper") {
            userWin=compChoice === "scissors" ?false : true ;
        }else{
            userWin=compChoice === "rock"?false : true;
        }
        showWinner(userWin,userChoice,compChoice);
    }
};


choices.forEach((choice) => 
{
    choice.addEventListener("click", () =>
    {
        const userChoice = choice.getAttribute("id");
        playGame(userChoice);
    });
});


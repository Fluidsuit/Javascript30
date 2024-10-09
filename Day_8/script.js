user_score = 0;
computer_score = 0;

const choices = document.querySelectorAll(".choice");

const playGame = (userChoice) =>
{
    console.log("user choice = ",userChoice);
    // const compChoice = () => 
    // {
    //     const options = ["Rock", "Paper", "Scissors"]
    //     const randidx = Math.floor(Math.random()*3);
    //     return options[randidx];
    // }
};


choices.forEach((choice) => 
{
    choice.addEventListner("click", () =>
    {
        const userChoice = choice.getAttribute("id");
        playGame(userChoice);
    });
});









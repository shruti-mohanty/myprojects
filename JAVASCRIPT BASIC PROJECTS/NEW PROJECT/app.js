let userscore = 0;
let compscore = 0;

const choices = document.querySelectorAll(".choice");

const genCompChoice = () =>{
    const options = ["rock","paper","scissors"];
    //rock,paper,scisiors
    const randIdx = Math.floor(Math.random()*3);
    return options(randIdx);

}

const playGame = (userChoice) => {
        console.log("userChouce = " , userChoice);
}

choices.forEach((choice) => {
    choice.addEventListener("click", () => {
        const userChoice = choice.getAttribute("id");
        playGame();
    })
})
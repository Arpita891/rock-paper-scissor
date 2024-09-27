let userScore = 0;
let compScore = 0;

const choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");

const userScorePara = document.querySelector("#userID");
const compScorePara = document.querySelector("#computerID");

choices.forEach((choice) =>  {

    choice.addEventListener("click",() =>{
        const userChoice = choice.getAttribute("id");
        playGame(userChoice);
        
    });
    
});

const playGame = (userChoice) => {
    console.log("you",userChoice);
    const compChoice = genComp();
    console.log("computer",compChoice);
    if (userChoice === compChoice) {
        drawGame();
    
    } else {
        let userWin = true;
        if(userChoice === "rock") {
            // scissor,paper
            userWin = compChoice === "paper" ? false : true;
        } else if(userChoice === "paper") {
            //rock,scissor
            userWin = compChoice === "scissors" ? false : true;

        } else {
            //rock,paper
           userWin = compChoice === "rock" ? false: true;
        }
        showWinner(userWin,userChoice,compChoice);
    }

};

const showWinner = (userWin,) => {
    if (userWin) {
        userScore++;
        userScorePara.innerText = userScore;
        console.log("you win");
        msg.innerText = "You Win!";
        msg.style.backgroundColor = "green";
    } else {
        console.log("you lose");
        compScore++;
        compScorePara.innerText = compScore;
        msg.innerText = "You Lose!";
        msg.style.backgroundColor = "red";
    }
};

let genComp = () => {
    const options = ["rock","paper","scissors"];
    let randomIndex = Math.floor(Math.random()*3);
    return options[randomIndex];
 
};

const drawGame = () => {
    console.log("The Game is Draw");
    msg.innerText = "The Game is Draw";
    msg.style.backgroundColor = "#081b31";

};

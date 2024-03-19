userScore = 0;
compScore = 0;

let rock = document.querySelector("#rock");
let paper = document.querySelector("#paper");
let scissor = document.querySelector("#scissor");

let us = document.querySelector("#user-score");
let cs = document.querySelector("#comp-score");

let msg = document.querySelector("#msg");

let choices = document.querySelectorAll(".choice");

const genCompChoice = ()=>{
    const options = ["rock","paper","scissor"];
    const randInd = Math.floor(Math.random() * 3);
    return options[randInd];

}


const showWinner = (userwin,userChoice,compChoice)=>{
    if(userwin){
        userScore++;
        msg.innerText=`You won! ${userChoice} beats ${compChoice}.`;
        us.innerText = userScore;
        msg.style.backgroundColor = "green";
    }    
    else{
        msg.innerText=`You lose! ${compChoice} beats ${userChoice}.`;
        msg.style.backgroundColor = "red";
        compScore++;
        cs.innerText = compScore;
    }
}


const drawGame = ()=>{
    msg.innerText="uff! Game is Drawn";
    msg.style.backgroundColor = "black";
}


const playGame = (userChoice)=>{
    const compChoice = genCompChoice();

    if(userChoice === compChoice){
        drawGame();
    }
    else{
        let userWin = true;
        if(userChoice === "scissor" && compChoice === "paper" || userChoice === "rock" && compChoice === "scissor" || userChoice === "paper" && compChoice === "rock"){
            userWin = true;
        }
        else{
            userWin = false;
        }
        showWinner(userWin,userChoice,compChoice);
    }
}

choices.forEach((choice)=>{
    choice.addEventListener("click",()=>{
        const userChoice = choice.getAttribute("id");
        playGame(userChoice);
    })
})
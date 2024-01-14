let userScore = 0;
let compScore = 0;

const choices = document.querySelectorAll(".choice");

const messageElement = document.querySelector("#msg");

const userScoreElement = document.getElementById("user-score");
const compScoreElement = document.getElementById("computer-score");


const genCompChoice = ()=>{
    // rock , paper, scissors
    const options =["rock","paper","scissors"];
    let indexRan = Math.floor(Math.random(options) * 3);
    return options[indexRan];
    
}

const drawGame = ()=>{
    console.log("Games is Draw");
    messageElement.innerText = " Game is Draw!! Play once Again";
    messageElement.style.backgroundColor = '#FFD60A';
    messageElement.style.color = "#000814";
    
}

const winGame = (userWin,userChoice,compChoice)=>{ 
    if(userWin){
        userScore++;
        //console.log("User Win !!!",userScore);
        messageElement.innerText = `User Win !!! ${userChoice} beats ${compChoice}`;
        messageElement.style.backgroundColor = '#386641';
        messageElement.style.color = "#FFFFFF";
        //Updating the user score
        userScoreElement.textContent = userScore;
        userScoreElement.style.color = "#386641"
    }else{
        compScore++;
        //console.log("Computer Win!! Play once Again",compScore++);
        messageElement.innerText = `Computer Win!! ${compChoice} beats ${userChoice} `;
        messageElement.style.backgroundColor = '#E63946';
        //updating computer score
        compScoreElement.textContent = compScore;
        compScoreElement.style.color = "#E63946";

    }
};

const playGame = (userChoice) =>{
    console.log(`${userChoice} = user choice`);
    //Genearte Computer choice
     const compChoice = genCompChoice();
     console.log(`${compChoice} = computer choice`);

     if( userChoice === compChoice){
        //Draw Game
        drawGame();
     }else{
        let userWin = true;
        if( userChoice === "paper"){
            //scissor , Rock
            userWin = compChoice === "scissor" ? false : true;
        }else if( userChoice === "rock"){
            //paper, scissor
            userWin = compChoice === "paper" ? false : true;
        }else if( userChoice === "scissor"){
            // rock , paper
            userWin = compChoice === "rock" ? false : true;
        }
        winGame(userWin,userChoice,compChoice);
     }
}

choices.forEach((choice)=>{
    choice.addEventListener("click",()=>{
        const userChoice = choice.getAttribute("id")
        console.log("clicked",userChoice);
        playGame(userChoice);
    })
})
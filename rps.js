let userscore = 0;
let compscore = 0;

const choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");

const drawGame = () => {
    console.log("game draw");
    msg.innerText = "Game Draw: ( ͠° ͟ ͜ʖ ͠°) Play again!";
    msg.style.backgroundColor = "#0D1F2D";
    msg.style.color = "#FAE1DF";
}


const userScorePara = document.querySelector("#user-score");
const compScorepara = document.querySelector("#comp-score");

const showWinner = (userwin, userchoice, compchoice) =>{
    if(userwin){
        userscore++;
        userScorePara.innerText = userscore;
        msg.innerText = `You win!! ( ͡ ͜ʖ ͡ ) ${userchoice} beats ${compchoice}`;
        msg.style.backgroundColor = "#7AE582";
        msg.style.color = "black";
    }
    else{
        compscore++;
        compScorepara.innerText = compscore;
        msg.innerText = `You lose! ( ༎ຶ ͜ʖ ༎ຶ ) ${compchoice} beats ${userchoice}`;
        msg.style.backgroundColor = "Red";
        msg.style.color = "white";
    }
}

const genCompChoise = () =>{
    const options = ["rock", "paper", "scissor"];
    const randomNum = Math.floor(Math.random()*3);
    return options[randomNum];
}

const playGame = (userchoice) =>{
    console.log("user choice=", userchoice);
    const compchoice = genCompChoise();
    console.log("comp choice=", compchoice);

    if(userchoice === compchoice){
        drawGame();
    }
    else{
        let userwin = true;
        if(userchoice === "rock"){
            userwin = compchoice === "paper"? false : true;
            //scissors, paper
        }
        else if(userchoice === "paper"){
            userwin = compchoice === "scissor" ? false : true;
            //paper, rock
        }
        else{
            userwin = compchoice === "rock" ? false : true;
            //rock, paper
        }
        showWinner(userwin, userchoice, compchoice);
    }
}

choices.forEach((choice) => {
    choice.addEventListener("click", () => {
        const userchoice = choice.getAttribute("id");
        console.log("choice was clicked", userchoice);
        playGame(userchoice);
    });
});
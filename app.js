let userScore = 0;
let compScore = 0;

const choices = document.querySelectorAll(".choice");

const msg = document.querySelector("#msg");
const userscr = document.querySelector("#user-score");
const compscr = document.querySelector("#comp-score");

const reset = document.querySelector(".reset")

reset.addEventListener("click",() =>{
    userscr.innerText = 0;
    userScore=0;
    compscr.innerText = 0;
    compScore=0;
    msg.innerText = "The game was reset"
    msg.style.backgroundColor = "#081b31"
})




const gencompchoice = () => {
    const options = ["rock","paper","scissors"];
    const ranidx = Math.floor(Math.random() * 3);
    return options[ranidx];

}


choices.forEach((choice) => {
    
    choice.addEventListener("click",() =>{
          const userchoice = choice.getAttribute("id");
            playgame(userchoice);
    })
})

const drawgame = () =>{
    console.log("Game was draw");
    msg.innerText = "Game was draw. Play Again!"
    msg.style.backgroundColor = "#081b31";
}

const showWinner = (userwin,userchoice,compchoice) =>{
    if(userwin){
        console.log("You Win")
        msg.innerText = `You Win! your ${userchoice} beats computers ${compchoice}`
        msg.style.backgroundColor = "green";
        userScore++
        userscr.innerText = userScore
    }else{
        console.log("You Lose")
        msg.innerText = `You Lose! computers ${compchoice} beats your ${userchoice}`
        msg.style.backgroundColor = "red";
        compScore++
        compscr.innerText = compScore;
    }
}


const playgame = (userchoice) => {
    console.log("user choice is",userchoice)
    const compchoice = gencompchoice();
    console.log("Computer choice is ",compchoice)

    if(userchoice === compchoice){
        drawgame();
    }
    else{
        let userwin = true;
        if(userchoice === "rock"){
            userwin = compchoice === "paper" ? false : true;
        }else if(userchoice === "paper"){
            userwin = compchoice === "scissors" ? false :true;
        }else{
            userwin = compchoice === "rock" ? false : true;
        }
        showWinner(userwin,userchoice,compchoice)
    }

}
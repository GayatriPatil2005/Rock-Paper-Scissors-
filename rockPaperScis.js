let userScore= 0;
let compScore= 0;

const  choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");
const userScorePara = document.querySelector("#user-score");
const compScorePara = document.querySelector("#computer-score");
//generate compChoice
const  genCompChoice = () => {
    const options = ["rock","paper", "scissor"];
    const randomIdx = Math.floor( Math.random() *3); //<- *3 because to generate number 0 to 3 //used to generate random number
    return options[randomIdx];
};

const drawGame = () =>{
     msg.innerHTML ="Game Draw! Play Again";
     msg.style.backgroundColor = " rgb(2, 2, 61)";
};

const showWinner = (userWin, userChoice, compChoice) => {
if (userWin) {
    userScore++;
    userScorePara.innerHTML = userScore;
    msg.innerHTML = `YOU WIN! your's ${userChoice} beats ${compChoice}` ;
    msg.style.backgroundColor = "green";
}else{
    compScore++;
    compScorePara.innerHTML = compScore;
     msg.innerHTML =`Ohh! YOU LOOSE computer's ${compChoice} beats ${userChoice}`;
     msg.style.backgroundColor = "red";
}
};
//generate userChoice -> modular means for each task we are doing by using each function 
const playGame = (userChoice) =>{
const compChoice = genCompChoice();
if(userChoice === compChoice){
    //draw game
    drawGame();
}else {
    let userWin = true;
 if(userChoice === "rock"){
    // computer has  scissor and paper for choosing  and if computer chooses rock then game will draw  or tie
    userWin = compChoice === "paper" ? false : true;
 }else if (userChoice=== "paper"){
    // computer has  scissor and rock for choosing  and if computer chooses rock then game will draw  or tie
     userWin = compChoice === "scissor" ? false : true;
 }else{
    //computer has  paper and rock for choosing  and if computer chooses rock then game will draw  or tie
     userWin = compChoice === "rock" ? false : true;
 }
 showWinner(userWin, userChoice, compChoice);
}
};

choices.forEach((choice) =>{
choice.addEventListener("click",() =>{
    const userChoice= choice.getAttribute("id");
    playGame(userChoice);
});
});
const message = document.querySelector(".message");
const buttons = document.querySelectorAll("button");
const coinArray = ["Heads", "Tails"];
let score = [0,0];


for (let i = 0; i <buttons.length; i++){
    buttons[i].addEventListener ("click", tossCoin);
    }
function tossCoin (ht){
let computerToss = Math.floor(Math.random() * 2);
let computerGuess = coinArray[computerToss];
let playerGuess = ht.target.innerText
message.innerHTML = `Computer Selected ${computerGuess} <br>`
let output;

if (playerGuess === computerGuess){
    score[0]++
    output = "Player Wins"
}else {
    score[1]++
    output = "Computer wins"
}
message.innerHTML += `${output} <br> Player ${score[0]} Computer ${score[1]}`;
}


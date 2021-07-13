const gameList = ["rock", "paper", "scissors"];

function randomEnter(){

    const indexList = Math.floor(Math.random() * 3);
    document.querySelector("#random").textContent = gameList[indexList];

return gameList[indexList];
}

function enter(event){
    if (round == 0){
        document.querySelector(".victory").style.display = 'none';
    }

    round++;
    document.querySelector("#round").textContent = round;

    let userWord = event.target.textContent.toLowerCase();
    document.querySelector("#your").textContent = userWord;
    let randomWord = randomEnter();
    result += game(randomWord, userWord);
    console.log(round, result)
    document.querySelector("#points").textContent = result;

    if (round == 5){
        document.querySelector("#round").textContent = "end";
        if (result > 0){
            document.querySelector(".victory").textContent = "VICTORY!!!";
            document.querySelector(".victory").style.display = 'block';
        }
        else if (result < 0){
            document.querySelector(".victory").textContent = "LOSING!!!";
            document.querySelector(".victory").style.display = 'block';
        }
        else{
            document.querySelector(".victory").textContent = "DRAW!!!";
            document.querySelector(".victory").style.display = 'block';
        }

        round = 0;
        result = 0;
        console.log(document.querySelector(".victory").style.display)
        console.log(round, result)
    }
}

function game (randomWord, userWord) {

    if (randomWord === userWord) {
        return 0;
    }

    else if (randomWord === "rock" && userWord === "paper") {
        return 1;
    }
    else if (randomWord === "rock" && userWord === "scissors") {
        return -1;
    }
    else if (randomWord === "paper" && userWord === "scissors") {
        return 1;
    }
    else if (randomWord === "paper" && userWord === "rock") {
        return -1;
    }
    else if (randomWord === "scissors" && userWord === "rock") {
        return 1;
    }
    else if (randomWord === "scissors" && userWord === "paper") {
        return -1;
    }   
}


let result = 0;
let round = 0;

const buttons = document.querySelectorAll(".button")
buttons.forEach((button) => {
    button.addEventListener('click', enter)
});



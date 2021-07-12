const gameList = ["rock", "paper", "scissors"];

function randomEnter(){

    const indexList = Math.floor(Math.random() * 3);
    document.querySelector(".random_word").textContent = gameList[indexList];

return gameList[indexList];

}

function enter(event){
    let userWord = event.target.textContent.toLowerCase();
    document.querySelector(".user_word").textContent = userWord;

    let randomWord = randomEnter();
    console.log(userWord);
    console.log(randomWord);
    
    let result = game(randomWord, userWord);
    document.querySelector(".result").textContent = result;
    console.log(result);

}



function game (randomWord, userWord) {

    if (randomWord === userWord) {
        return 'draw';
    }

    else if (randomWord === "rock" && userWord === "paper") {
        return 'You Win!';
    }
    else if (randomWord === "rock" && userWord === "scissors") {
        return 'You Lose!';
    }
    else if (randomWord === "paper" && userWord === "scissors") {
        return 'You Win!';
    }
    else if (randomWord === "paper" && userWord === "rock") {
        return 'You Lose!';
    }
    else if (randomWord === "scissors" && userWord === "rock") {
        return 'You Win!';
    }
    else if (randomWord === "scissors" && userWord === "paper") {
        return 'You Lose!';
    }   
}
const buttons = document.querySelectorAll(".button")
console.log(buttons);
buttons.forEach((button) => {
    button.addEventListener('click', enter)
}
)


``` check = prompt("Once more, yes?").toLowerCase();

while (['yes', 'yeh', "1"].indexOf(check) !== -1){

    userWord = enter();
    randomWord = randomEnter();
    result = game(randomWord, userWord);
    document.querySelector(".result").textContent = result;
    console.log(result);
   check = prompt("Once more, yes?").toLowerCase();
} ```

console.log("GoodBye!");
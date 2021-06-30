const gameList = ["rock", "paper", "scissors"];

function randomEnter(){

    const indexList = Math.floor(Math.random() * 3);
    document.querySelector(".random_word").innerHTML = gameList[indexList];

return gameList[indexList];

}

function enter(){
    let userWord = prompt('Enter your word').toLowerCase();
    document.querySelector(".user_word").innerHTML = userWord;
    while (gameList.indexOf(userWord) == -1){
        console.log('Enter: rock or paper or scissors');
        userWord = prompt('Enter your word').toLowerCase();
    }
return userWord;
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


let userWord = enter();
let randomWord = randomEnter();
let result = game(randomWord, userWord);
document.querySelector(".result").innerHTML = result;
console.log(result);
check = prompt("Once more?").toLowerCase();

while (['yes', 'yeh', "1"].indexOf(check) !== -1){

    userWord = enter();
    randomWord = randomEnter();
    result = game(randomWord, userWord);
    document.querySelector(".result").innerHTML = result;
    console.log(result);
    check = prompt("Once more?").toLowerCase();
}

console.log("GoodBye!");
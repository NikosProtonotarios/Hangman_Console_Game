function pcWord() {
    let array = ['python', 'java', 'swift', 'javascript', 'console', 'developer', 'computer', 'robot', 'monitor', 'power', /*...*/];
    let randomNumber = Math.floor(Math.random() * (array.length));
    let pcRandomWord = array[randomNumber];
    return pcRandomWord;
}

let win = 0;
let lose = 0;

function play() {
    let pcWordRandom = pcWord();
    let arrayCharacters = pcWordRandom.split("");
    let newArray = arrayCharacters.map(() => "-");
    let restStringCharacters = newArray.join("");
    let lives = 8;
    let userArray = [];

    console.log("H A N G M A N");

    while (lives > 0) {
        console.log('');
        console.log(restStringCharacters);
        let user = prompt('Input a letter:');

        if (user.length > 1 || user === "") {
            console.log("");
            console.log("Please, input a single letter.");
        } else if (!/^[a-z]$/.test(user)) {
            console.log("Please, enter a lowercase letter from the English alphabet.");
        } else if (userArray.includes(user)) {
            console.log("You've already guessed this letter.");
        } else if (arrayCharacters.includes(user)) {
            arrayCharacters.forEach((char, index) => {
                if (char === user) {
                    newArray[index] = user;
                }
            });
            restStringCharacters = newArray.join("");
            if (!restStringCharacters.includes("-")) {
                console.log(`You guessed the word ${restStringCharacters}!`);
                console.log("You survived!");
                win += 1;
                break;
            }
        } else {
            console.log("That letter doesn't appear in the word.");
            lives--;
        }

        if (lives === 0) {
            console.log("You lost!");
            lose += 1;
            break;
        }
    }
}

while (true) {
    if (win === 5) {
        console.log("Congratulations! You won 5 rounds.");
    } else if (lose === 5) {
        console.log("Game over. You lost 5 rounds.");
    }

    if (win === 5 || lose === 5) {
        let playAgain = prompt("The game is over. Do you want to play again? (yes/no)");

        if (playAgain.toLowerCase() === "yes") {
            win = 0;
            lose = 0;
            console.log("Starting a new game...");
        } else {
            console.log("Thanks for playing! Goodbye.");
            break;
        }
    }

    let userChoose = prompt(`If you win 5 rounds, you win the game.
If you lose 5 rounds, the game is over.
For every round, you have 8 tries.
    
Type "play" to play the game, "results" to show the scoreboard, or "exit" to quit:`);

    if (userChoose === "play") {
        play();
    } else if (userChoose === "results") {
        console.log(`You won: ${win} times.`);
        console.log(`You lost: ${lose} times.`);
    } else if (userChoose === "exit") {
        console.log("Exiting the game. Goodbye!");
        break;
    }
}

function pcWord() {
    let array = ['python', 'java', 'swift', 'javascript'];
    let randomNumber = Math.floor(Math.random() * (array.length));
    let pcRandomWord = array[randomNumber];
    return pcRandomWord;
}

let pcWordRandom = pcWord();
let arrayCharacters = pcWordRandom.split("");
let newArray = arrayCharacters.map(() => "-");
let restStringCharacters = newArray.join("");

console.log("H A N G M A N");

let lives = 8;
let userArray = [];
let win = 0;
let lose = 0;
let userChoose;

function play() {
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
      if (newArray.includes(user)) {
        console.log("");
        console.log("No improvements.");
        userArray.push(user);
        lives--;
      } else if (!newArray.includes(user)) {
         arrayCharacters.forEach((char, index) =>{
        if (char === user) {
          userArray.push(user);
          newArray[index] = user;
        } 
      });
      }
      restStringCharacters = newArray.join("");
    } else if (!arrayCharacters.includes(user)) {
    userArray.push(user);
        console.log("");
        console.log("That letter doesn't appear in the word.");  
        lives--;
      } 
    if (!restStringCharacters.includes("-")) {
      console.log("");
      console.log(`You guessed the word ${restStringCharacters}!`);
      console.log("You survived!");
      win += 1;
      break;
    }
     if (lives === 0) {
      console.log("");
      console.log("You lost!");
      lose += 1;
      break;
    }
  }
}

while (true) {
  userChoose = prompt('Type "play" to play the game, "results" to show the scoreboard, and "exit" to quit:'); if (userChoose === "play") {
  } if (userChoose === "play") {
      lives = 8; // Reset lives for a new game
      userArray = []; // Reset user guesses
      pcWordRandom = pcWord(); // Get a new word
      arrayCharacters = pcWordRandom.split("");
      newArray = arrayCharacters.map(() => "-");
      restStringCharacters = newArray.join(""); // Reset displayed word
      play();

  } else if (userChoose === "results") {
    console.log("");
    console.log(`You won: ${win} times.`);
    console.log(`You lost: ${lose} times.`);
  } else if (userChoose === "exit") {
      console.log("Exiting the game. Goodbye!");
      break;
    }
}
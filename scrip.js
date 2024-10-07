function pcWord() {
  let array = ['python', 'java', 'swift', 'javascript', 'console', 'developer', 'computer', 'robot', 'monitor', 'power', 'danger', 'dragon', 'planet', 'astronaut', 'factorial', 'factory', 'knight', 'monkey', 'function', 'promise', 'guitar', 'asynchronous', 'algorithm', 'harmony', 'imperial', 'gigabyte', 'semicolon', 'producer', 'microphone', 'debugging', 'keyboard', 'variable', 'interface', 'composition', 'prototype', 'compilation', 'framework', 'encryption', 'polymorphism', 'database', 'soundtrack', 'amplifier', 'instrument', 'overdrive', 'expression', 'waveform', 'arrangement', 'frequency', 'theater', 'dance', 'instrumentation', 'resonance', 'septic', 'synthesizer', 'progression', 'measure', 'porcupine', 'samurai', 'temple', 'machine', 'starship', 'trooper', 'soldier', 'monster', 'dissonance', 'counterpoint', 'syncopation', 'modulation', 'console', 'polyrhythm', 'transposition', 'virtuoso', 'monophonic', 'countermelody', 'harmonics', 'chromaticism', 'installation', 'counterpoint', 'cadential', 'saxophone', 'phrasing', 'dinosaur', 'tyrannosaurus', 'extinction', 'blockchain', 'hypertext', 'virtualization', 'microservices', 'asynchronous', 'algorithmic', 'authentication', 'multithreading', 'containerization', 'transpiler', 'frameworks', 'serverless', 'neuroscience', 'virtualization', 'scalability', 'repository', 'configuration', 'interoperability', 'cybersecurity', 'microarchitecture', 'decentralization', 'optimization', 'tokenization', 'semantic', 'pathfinding', 'prototyping', 'instrumentation', 'backpropagation', 'middleware', 'cryptocurrency', 'firmware', 'heuristic', 'anonymization', 'overfitting', 'transcoding', 'cascading', 'bandwidth', 'entropy', 'vulnerability', 'homomorphic', 'transpilation'];
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
              arrayCharacters.forEach((char, index) => {
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
   if (win === 5) {
      console.log('');
      console.log("Congratulations!");
      console.log('You survived five rounds!');
      break;
  } else if (lose === 5) {
      console.log('');
      console.log('You lost in five rounds');
      console.log('Game over');
      break;
  }
  userChoose = prompt(`If you win 5 rounds, you win the game.
If you lose 5 rounds, the game is over.
For every round, you have 8 tries.
  
Type "play" to play the game, "results" to show the scoreboard, and "exit" to quit:`);
  if (userChoose === "play") {
      lives = 8;
      userArray = [];
      pcWordRandom = pcWord();
      arrayCharacters = pcWordRandom.split("");
      newArray = arrayCharacters.map(() => "-");
      restStringCharacters = newArray.join("");
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
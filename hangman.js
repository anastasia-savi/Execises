let word = pickWord();
let answerArray = setupAnswerArray(word);
let remainingLetters = word.length;

function pickWord() {
  let words = ["javascript", "developer", "array", "object", "professional"];
  return words[Math.floor(Math.random() * words.length)];
}

function setupAnswerArray(word) {
  let arr = [];
  for (let i = 0; i < word.length; i++) {
    arr[i] = "_";
  }
  return arr;
}

function showPlayerProgress(answerArray) {
  alert(answerArray.join(" "));
}

function getGuess() {
  return prompt(
    "Guess a letter, or click Cancelto stop playing."
  ).toLowerCase();
}

function updateGameState(guess, word, answerArray) {
  let number = 0;
  for (let j = 0; j < word.length; j++) {
    if (word[j] === guess) {
      answerArray[j] = guess;
      number++;
    }
  }
  return number;
}

function showAnswerAndCongratePlayer(answerArray) {
  alert(answerArray.join(" "));
  alert("Good job! The answer was " + answerArray.join(""));
}

while (remainingLetters > 0) {
  showPlayerProgress(answerArray);
  let guess = getGuess();
  if (guess === null) {
    break;
  } else if (guess.length !== 1) {
    alert("Please enter a single letter.");
  } else {
    let correctGuesses = updateGameState(guess, word, answerArray);
    remainingLetters -= correctGuesses;
  }
}

showAnswerAndCongratePlayer(answerArray);

// let words = ["javascript", "developer", "array", "object", "professional"];
// let word = words[Math.floor(Math.random() * words.length)];
// let answerArray = [];
// let attempt = 15;
// for (let i = 0; i < word.length; i++) {
//   answerArray[i] = "_";
// }
// let remainingLetters = word.length;
// while (remainingLetters > 0 && attempt > 0) {
//   alert(answerArray.join(" "));

//   let guess = prompt(
//     "Guess a letter, or click Cancelto stop playing."
//   ).toLowerCase();
//   if (guess === null) {
//     break;
//   } else if (guess.length !== 1) {
//     alert("Please enter a single letter.");
//   } else {
//     for (let j = 0; j < word.length; j++) {
//       if (word[j] === guess && answerArray[j] === "_") {
//         attempt--;
//         answerArray[j] = guess;
//         remainingLetters--;
//       }
//     }
//   }
// }
// alert(answerArray.join(" "));
// alert("Good job! The answer was " + word);

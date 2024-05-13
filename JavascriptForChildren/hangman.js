$(document).ready(function () {
  let canvas = document.getElementById("canvas");
  let ctx = canvas.getContext("2d");
  let word = pickWord();
  let answerArray = setupAnswerArray(word);
  let remainingLetters = word.length;
  let wrongLetter = 0;

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

  function showPlayerProgress() {
    $("#progress").text(answerArray.join(" "));
  }

  function updateGameState(guess) {
    let correctGuesses = 0;
    let samelet = $("#progress").text();
    for (let j = 0; j < word.length; j++) {
      if (samelet.includes(guess)) {
        alert(
          "You have already entered this letter. Please enter another letter."
        );
        return;
      }
      if (word[j] === guess) {
        answerArray[j] = guess;
        correctGuesses++;
      }
    }
    if (correctGuesses === 0) {
      wrongLetter++;
      drawHangman(wrongLetter);
    }
    remainingLetters -= correctGuesses;
    return remainingLetters;
  }

  function drawHangman(wrongLetter) {
    ctx.strokeStyle = "black";
    ctx.lineWidth = 3;
    ctx.beginPath();
    if (wrongLetter === 1) {
      ctx.lineTo(50, 50);
      ctx.lineTo(50, 100);
      ctx.lineTo(100, 100);
      ctx.lineTo(100, 50);
      ctx.lineTo(50, 50);
      // ctx.arc(100, 50, 20, 0, Math.PI * 2);
      ctx.stroke();
    }
    if (wrongLetter === 2) {
      ctx.lineTo(75, 100);
      ctx.lineTo(75, 160);
      ctx.stroke();
    }
    if (wrongLetter === 3) {
      ctx.lineTo(75, 120);
      ctx.lineTo(45, 105);
      ctx.stroke();
    }
    if (wrongLetter === 4) {
      ctx.lineTo(75, 120);
      ctx.lineTo(105, 105);
      ctx.stroke();
    }
    if (wrongLetter === 5) {
      ctx.lineTo(75, 160);
      ctx.lineTo(45, 195);
      ctx.stroke();
    }
    if (wrongLetter === 6) {
      ctx.lineTo(75, 160);
      ctx.lineTo(105, 195);
      ctx.stroke();
    }
  }

  $("#guessBtn").click(function () {
    let guess = $("#entlet").val().toLowerCase();
    $("form").trigger("reset");
    if (!guess.match(/[a-z]/)) {
      alert("Please enter a valid letter.");
      return;
    }
    let remaining = updateGameState(guess);
    showPlayerProgress();
    if (remaining === 0) {
      $("#message").text("Congratulations! You've guessed the word: " + word);
    } else if (wrongLetter === 6) {
      $("#message").text("Game Over! The word was: " + word);
    }
  });

  showPlayerProgress();
});

//the thecond try

// let canvas = document.getElementById("canvas");
// let ctx = canvas.getContext("2d");
// let word = pickWord();
// let answerArray = setupAnswerArray(word);
// let remainingLetters = word.length;
// let wrongLetter = 0;

// function pickWord() {
//   let words = ["javascript", "developer", "array", "object", "professional"];
//   return words[Math.floor(Math.random() * words.length)];
// }

// function setupAnswerArray(word) {
//   let arr = [];
//   for (let i = 0; i < word.length; i++) {
//     arr[i] = "_";
//   }
//   return arr;
// }

// function showPlayerProgress(answerArray) {
//   $("#progress").text(answerArray.join(" "));
//   // alert(answerArray.join(" "));
// }

// function getGuess() {
//   let letter = "";
//   const letterinput = document.querySelector("#entlet");
//   const answerlet = document.querySelector("#letter");
//   const getImput = (event) => {
//     answerlet.textContent = event.currentTarget.value;
//     letter = event.currentTarget.value;
//     if (event.currentTarget.value === "") {
//       return alert("Please fill this field!");
//     }
//   };
//   letterinput.addEventListener("input", getImput);
//   return letter;
//   // prompt(
//   //   "Guess a letter, or click Cancel to stop playing."
//   // ).toLowerCase();
// }

// // getGuess();
// function updateGameState(guess, word, answerArray) {
//   let number = 0;
//   for (let j = 0; j < word.length; j++) {
//     if (word[j] === guess) {
//       answerArray[j] = guess;
//       number++;
//     }
//   }
//   wrongLetter++;
//   return number;
// }

// function showAnswerAndCongratePlayer(answerArray) {
//    $("#progress").text(answerArray.join(" "));
//   // alert(answerArray.join(" "));
//   $("#progress").text("Good job! The answer was " + answerArray.join(""));
//   // alert("Good job! The answer was " + answerArray.join(""));
// }

// function hangmanPicture(number) {
//   ctx.strokeStyle = "Dark";
//   ctx.lineWidth = 3;
//   ctx.beginPath();
//   if (wrongLetter === 1) {
//     ctx.lineTo(50, 50);
//     ctx.lineTo(50, 100);
//     ctx.lineTo(100, 100);
//     ctx.lineTo(100, 50);
//     ctx.lineTo(50, 50);
//   }
//   ctx.stroke();
// }

// while (remainingLetters > 0) {
//   showPlayerProgress(answerArray);
//   let guess = getGuess();
//   if (guess === null) {
//     break;
//   } else if (guess.length !== 1) {
//     // alert("Please enter a single letter.");
//   } else {
//     let correctGuesses = updateGameState(guess, word, answerArray);
//     remainingLetters -= correctGuesses;
//     if (correctGuesses === 0) {
//       hangmanPicture(wrongLetter);
//     }
//   }
// }

// showAnswerAndCongratePlayer(answerArray);

//the firsh try

// // let words = ["javascript", "developer", "array", "object", "professional"];
// // let word = words[Math.floor(Math.random() * words.length)];
// // let answerArray = [];
// // let attempt = 15;
// // for (let i = 0; i < word.length; i++) {
// //   answerArray[i] = "_";
// // }
// // let remainingLetters = word.length;
// // while (remainingLetters > 0 && attempt > 0) {
// //   alert(answerArray.join(" "));

// //   let guess = prompt(
// //     "Guess a letter, or click Cancelto stop playing."
// //   ).toLowerCase();
// //   if (guess === null) {
// //     break;
// //   } else if (guess.length !== 1) {
// //     alert("Please enter a single letter.");
// //   } else {
// //     for (let j = 0; j < word.length; j++) {
// //       if (word[j] === guess && answerArray[j] === "_") {
// //         attempt--;
// //         answerArray[j] = guess;
// //         remainingLetters--;
// //       }
// //     }
// //   }
// // }
// // alert(answerArray.join(" "));
// // alert("Good job! The answer was " + word);

// // function hangmanPicture(number) {
// //   ctx.clearRect(0, 0, canvas.width, canvas.height); // Clear previous drawings
// //   ctx.strokeStyle = "Dark";
// //   ctx.lineWidth = 3;
// //   ctx.beginPath();
// //   if (number >= 1) {
// //     // Draw head
// //     ctx.arc(50, 30, 20, 0, Math.PI * 2);
// //   }
// //   if (number >= 2) {
// //     // Draw body
// //     ctx.moveTo(50, 50);
// //     ctx.lineTo(50, 100);
// //   }
// //   if (number >= 3) {
// //     // Draw left arm
// //     ctx.moveTo(50, 60);
// //     ctx.lineTo(20, 80);
// //   }
// //   if (number >= 4) {
// //     // Draw right arm
// //     ctx.moveTo(50, 60);
// //     ctx.lineTo(80, 80);
// //   }
// //   if (number >= 5) {
// //     // Draw left leg
// //     ctx.moveTo(50, 100);
// //     ctx.lineTo(20, 150);
// //   }
// //   if (number >= 6) {
// //     // Draw right leg
// //     ctx.moveTo(50, 100);
// //     ctx.lineTo(80, 150);
// //   }
// //   ctx.stroke();
// // }

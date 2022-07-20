const canvas = document.getElementById("main");
const ctx = canvas.getContext("2d");

/* const cWidth = canvas.width;
const cHeight = canvas.height; */

ctx.font = "48px sans-serif";
ctx.fillStyle = "black";
ctx.fillText("Click enter", 400, 50);
ctx.fillText("Click space to restart", 400, 100);

//fazer loop para passar para outro objeto
let words = [
  {
    answer: "mind",
    hint: "https://www.puzzlegamemaster.com/wp-content/uploads/2020/06/MIND-160x160.jpg",
    sentence: "Hey, ironhacker! What's on your ",
  },
  {
    answer: "alone",
    hint: "https://www.puzzlegamemaster.com/wp-content/uploads/2020/06/ALONE-160x160.jpg",
    sentence: "Don't code all ",
  },
  {
    answer: "parties",
    hint: "https://www.puzzlegamemaster.com/wp-content/uploads/2020/06/PARTIES-160x160.jpg",
    sentence: "We know you are missing the summer and the ",
  },
  {
    answer: "lisbon",
    hint: "",
    sentence: " is waiting for you, little dev.",
  },
  {
    answer: "around",
    hint: "https://www.puzzlegamemaster.com/wp-content/uploads/2020/06/AROUND-160x160.jpg",
    sentence: "dont know yet",
  },
];

let game = new Game(words, ctx);

document.addEventListener("keydown", (e) => {
  if (e.key === "Enter" && !game.isRunning) {
    game.start();
  }
});

document.addEventListener("keydown", (e) => {
  if (e.key == "Space" && game.isRunning) {
    game.restart();
  }
});

// to start
/* document.addEventListener("keydown", (e) => {
  if (e.code === "Enter" && !game.isRunning) {
    game.start();
    game.checkKey(e.key);
    game.checkTypedLetters(e.key, 20);
  } else {
    game.checkTypedLetters(e.key, 20);
    game.checkKey(e.key);
  }
});

// to restart
document.addEventListener("keydown", (e) => {
  if (e.code === "Space" && game.isRunning) {
    game.restart();
    game.checkKey(e.key);
    game.checkTypedLetters(e.key, 20);
  } else {
    game.checkKey(e.key);
    game.checkTypedLetters(e.key, 20);
  }
}); */

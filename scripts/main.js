const canvas = document.getElementById("main");
const ctx = canvas.getContext("2d");

const cWidth = canvas.width;
const cHeight = canvas.height;

ctx.font = "48px sans-serif";
ctx.fillStyle = "black";
ctx.fillText("Click enter", 400, 50);

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
    hint: (ctx.fillStyle = black),
    sentence: " is waiting for you, little dev.",
  },
  {
    answer: "around",
    hint: "https://www.puzzlegamemaster.com/wp-content/uploads/2020/06/AROUND-160x160.jpg",
    sentence: "dont know yet",
  },
];

const startGameBtn = document.getElementById("button-start");

let game = new Game(words, ctx);

// to start
document.addEventListener("keydown", (e) => {
  if (e.code === "Enter" && !game.isRunning) {
    game.start();
  } else {
    game.checkKey(e.key);
  }
});

// to restart
document.addEventListener("keydown", (e) => {
  if (e.code === "Space" && game.isRunning) {
    game.updateGame();
  } else {
    game.checkKey(e.key);
  }
});

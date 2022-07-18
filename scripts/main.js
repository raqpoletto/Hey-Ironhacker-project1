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
    hint: "https://i.kym-cdn.com/entries/icons/facebook/000/002/232/bullet_cat.jpg",
  },
  "alone",
  "ironhack",
  "web",
  "lisbon",
];

const startGameBtn = document.getElementById("button-start");

let game = new Game(words, ctx);

document.addEventListener("keydown", (e) => {
  if (e.code === "Enter" && !game.isRunning) {
    game.start();
  } else {
    game.checkKey(e.key);
  }
});

/* startGameBtn.addEventListener('click', () => {
  
}) */

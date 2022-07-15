const canvas = document.getElementById("main");
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

const ctx = canvas.getContext("2d");

ctx.fillText("Hey, Ironhacker! 200, 50");
ctx.font = "48px sans serif";

function draw() {
  ctx.clearRect(0, 0, window.innerWidth, window.innerHeight);
}

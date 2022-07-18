// new aproach - with classes

class Game {
  constructor(words, ctx) {
    this.ctx = ctx;
    this.words = words;
    this.currentAnswer = words[0].answer;
    this.currentHint = words[0].hint;
    this.erros = 0;
    this.acertos = 0;
    this.tentativas = [];
    this.interval = null;
    this.img = null;
    const img = new Image();
    img.addEventListener("load", () => {});
    img.src = this.currentHint;
    this.img = img;
    this.isRunning = false;
  }

  start = () => {
    this.interval = setInterval(this.updateGame, 1000 / 60);
    this.isRunning = true;
  };

  displayText() {
    this.ctx.fillStyle = "black";
    let hiddenWord = "_ ".repeat(this.currentAnswer.length);
    this.ctx.fillText(hiddenWord, 100, 100);
  }

  displayHint() {
    this.ctx.drawImage(this.img, 300, 0, 100, 100);
  }

  checkKey(key) {
    if (this.currentAnswer.includes(key)) {
      this.acertos++;
    } else {
      this.erros++;
    }
    this.tentativas.push(key);
    console.log(this.tentativas);
  }

  displayTentativas() {
    let allTentativas = this.tentativas.join("-");
    this.ctx.fillText("You tried: " + allTentativas, 400, 400);
  }

  updateGame = () => {
    this.ctx.clearRect(0, 0, 1000, 500);
    this.displayText();
    this.displayHint();
    this.displayTentativas();
  };
}
resetGame = () => {
  this.ctx.clearRect(0, 0, 1000, 500);
  if (erros >= 5) {
    this.ctx.font = "32px sans serif";
    this.ctx.fillStyle = "black";
    this.ctx.fillText("Try again", 200, 100);
    return;
  }
  if (this.acertos === this.words.length) {
    this.ctx.font = "32px sans serif";
    this.ctx.fillStyle = "black";
    this.ctx.fillText("You won", 200, 100);
    return;
  }
};

/* const canvas = document.getElementById("main"); */
/* canvas.width = window.innerWidth;
canvas.height = window.innerHeight; */

/* const ctx = canvas.getContext("2d"); */

/* ctx.fillText("Hey, Ironhacker!", 200, 50);
ctx.font = "48px sans serif"; */

/* startGame(); // related to button, clear, and display the displayText by order[index]
displayText(); // to display diferent part of the poem w/ the hint
displayHint(); // hint combined with text
displayErros(); // if erros >=5 { game over}
addTentativas(); */

//window.onkeypress = pressedKey;

/* function pressedKey() {
  if (
    !tentativas.includes(KeyboardEvent.key) &&
    words.includes(KeyboardEvent.key.toUpperCase())
  ) {
    addTentativas();
    for (let i = 0; i < tentativas.length; i++) {
      if (words[i] === KeyboardEvent.key.toUpperCase()) {
        ctx.font = "bold 48px sans serif";
        ctx.fillText(KeyboardEvent.key.toUpperCase(), 20 + 35 * i, 200);
        acertos++;
      }
    }
  } else {
    addTentativas();
    erros++;
    displayErros(erros);
  }
  verifyEndGame();
}

function draw() {
  ctx.clearRect(0, 0, window.innerWidth, window.innerHeight);
}

function addTentativas() {
  if (!tentativas.includes(KeyboardEvent.key)) {
    tentativas += KeyboardEvent.key;
    ctx.font = "32px sans serif";
    ctx.fillStyle = "black";
    ctx.fillText("You have tried " + tentativas.toUpperCase(), 200, 200);
    window.onkeypress = null;
    return;
  }
}

function verifyEndGame() {
  if (erros >= 5) {
    ctx.font = "32px sans serif";
    ctx.fillStyle = "black";
    ctx.fillText("Try again", 200, 100);
    return;
  }
  if (acertos === words.length) {
    ctx.font = "32px sans serif";
    ctx.fillStyle = "black";
    ctx.fillText("You won", 200, 100);
    window.onkeypress = null;
    return;
  }
} */

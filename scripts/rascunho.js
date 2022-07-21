// from main.js

/* const cWidth = canvas.width;
const cHeight = canvas.height; */

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
});

// from main.js

  /* displayHint() {
    // i need to define when this is happening
    this.ctx.drawImage(this.img, 300, 0, 100, 100);
  } */

/* checkKey = (key) => {
    this.checkTypedLetters(key, 10);
    if (this.currentAnswer.includes(key)) {
      this.acertos++;
    } else {
      this.erros++;
    }
    this.tentativas.push(key);
    console.log(this.acertos);
  }; */

/*  checkIfPlayerWins = this.alltentativas.map(
    (this.tentativas => {
      checkPlayerAnswer() {
        if (this.acertos === words.answer.length) {
          return this.ctx.fillText("you win", 100, 100);
        } else if (this.erros >= 5) {
          return this.ctx.fillText("try again", 100, 100);
        }
      },
    }) 
  ); */
/* 
  console.log(this.tentativas.join( ));

    this.ctx.fillText(this.tentativas, 400, 350);
  } I need to transforme the array of tentativas to string so I able to print on canvas induviduals letters (above the dashes)*/

/* function playerAnswer(key) {
  if ((key === words.answer[i])) {
    return true;
  } else {
    return false;
  }
} */

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

/*  restartGame = () => {
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
  }; created this if statement to restart the game automatically every time the playes gets 5 mistakes */

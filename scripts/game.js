class Game {
  constructor(words, ctx) {
    this.ctx = ctx;
    this.words = words; //array of objects on main
    this.currentAnswer = this.words[0].answer.split(""); //current secret word(prop)
    this.currentHint = this.words[0].hint; //current hint(prop)
    this.errors = 0; //player n. mistakes
    this.errorsLeft = 5;
    this.acertos = 0; //player correct n. letters
    this.letters = [];
    this.tentativas = []; //array of letters choosen by player
    this.interval = null; //interval to start game
    this.img = null; //img related to hint
    const img = new Image(); //to load the img on canvas
    img.addEventListener("load", () => {});
    img.src = this.currentHint;
    this.img = img;
    this.isRunning = false;
  }

  start = () => {
    this.interval = setInterval(this.updateGame, 1000 / 60);
    this.isRunning = true;
  };

  restart = () => {
    this.ctx.clearRect(0, 0, 1000, 500);
    this.interval = setInterval(this.updateGame, 1000 / 60);
    this.isRunning = true;
  };

  keyEvents() {
    window.addEventListener("keydown", (e) => {
      if (e.keyCode >= 65 && e.keyCode <= 90) {
        if (this.currentAnswer.indexOf(e.key.toString()) >= 0) {
          this.currentAnswer.splice(this.currentAnswer.indexOf(e.key), 1);
          this.acertos++;
        } else this.errors++;
      }
    });
  }

  checkTypedLetters(letter, spacing) {
    let notInclude = !this.letters.includes(letter);
    if (notInclude) {
      this.letters.push(letter);
      this.ctx.fillStyle = "green";
      this.ctx.fillText(letter, 100 + spacing, 100);
    }
    return notInclude ? true : false;
  }

  addCorrectLetter() {
    this.tentativas.push(this.currentAnswer);
  }

  checkGameOver = () => {
    let gameOver = this.errorsLeft === 0;
    if (gameOver) setTimeout(() => this.winner(), 900);
    return winner ? true : false;
  };

  gameOver() {
    this.ctx.clearRect(0, 0, 1200, 500);
    const gameOverImg = new Image();
    gameOverImg.src =
      "https://img.freepik.com/vetores-premium/game-over-neon-signs-style-text-em-um-fundo-de-parede-preto_77399-694.jpg?w=996";
    gameOverImg.onload = () => {
      this.ctx.drawImage(gameOverImg, 315, 0, 570, 240);
    };
  }

  winner() {
    this.ctx.clearRect(0, 0, 1200, 500);
    const winnerImg = new Image();
    winnerImg.src =
      "https://i.pinimg.com/564x/6d/6f/3d/6d6f3d278a08025550d1de0666a67fcf.jpg";
    winnerImg.onload = () => {
      this.ctx.drawImage(winnerImg, 247, 0, 705, 500);
    };
  }

  /* checkLoss() {
    if (this.errors >= 5) {
      this.ctx.fillStyle = "red";
      this.ctx.fillRect(0, 0, 1000, 500);
    }
  } */

  displaySentence() {
    // i need to define when this is happening
    this.ctx.clearRect(0, 0, 1000, 500);
    this.ctx.fillStyle = "black";
    let sentence = this.words[0].sentence;
    this.ctx.fillText(sentence, 100, 100);
  } // is not working // why?

  displayText() {
    this.ctx.fillStyle = "black";
    let hiddenWord = "_ ".repeat(this.currentAnswer.length);
    this.ctx.fillText(hiddenWord, 700, 100);
  }

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

  checkWin() {
    if (this.currentAnswer.length === 0) {
      this.ctx.fillStyle = "green";
      this.ctx.fillRect(0, 0, 1000, 500);
    }
  }

  let nextFase() {
  for(let i = 0; i <= this.words.length; i++) {
    this.ctx.clearRect(0, 0, 1000, 500)

  }
}

  displayTentativas() {
    let allTentativas = this.tentativas.join("-");
    this.ctx.fillText("You tried: " + allTentativas, 400, 400);
  }

  checkEvents = () => {};

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

  updateGame = () => {
    this.ctx.clearRect(0, 0, 1000, 500);

    //this.checkKey();
    //this.checkKeyEL();
    //this.checkTypedLetters()

    this.keyEvents();
    this.displaySentence();
    this.checkWin();
    //this.checkLoss();
    //this.displayText();
    //this.displayHint();
    this.displayTentativas();
  };
}

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

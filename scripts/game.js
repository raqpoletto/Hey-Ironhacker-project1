class Game {
  constructor(words, ctx) {
    this.ctx = ctx;
    this.level = 0;
    this.words = words;
    this.currentAnswer = this.words[this.level].answer.split("");
    this.currentHint = this.words[this.level].hint;
    this.errors = 0;
    this.acertos = 0;
    this.tentativas = [];
    this.sentences = [];
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

  restart = () => {
    this.ctx.clearRect(0, 0, 1500, 450);
    this.isRunning = true;
  };

  levelReset = () => {
    this.errors = 0;
    this.errorsLeft = 5;
    this.acertos = 0;
    this.tentativas = [];
  };

  stop = () => {
    clearInterval(this.interval);
  };

  addCorrectLetter() {
    this.tentativas.push(this.currentAnswer);
  }

  displaySentence() {
    this.ctx.clearRect(0, 0, 1500, 450);
    this.ctx.font = "10px Chakra Petch";
    this.ctx.fillStyle = "white";
    let sentence =
      this.sentences.join() + " " + this.words[this.level].sentence;
    this.ctx.fillText(sentence, 30, 100);
  }

  displayHint() {
    this.ctx.drawImage(this.img, 10, 250, 200, 200);
  }

  /* displayText() {
    this.ctx.fillStyle = "white ";
    let hiddenWord = "_ ".repeat(this.currentAnswer.length);
    this.ctx.fillText(hiddenWord, 700, 100);
  } */

  checkForNextLevel = () => {
    if (this.currentAnswer.length === 0) {
      this.sentences.push(this.words[this.level].sentence);
      this.sentences.push(this.words[this.level].answer);
      /*    this.ctx.fillStyle = "green";
      this.ctx.fillRect(0, 0, 1000, 500); */
      if (this.level < 4) {
        this.nextLevel();
      }
    }
  };
  /*  checkGameOver = () => {
    let gameOver = this.errorsLeft === 0;
    if (gameOver) setTimeout(() => this.winner(), 900);
    return winner ? true : false;
  }; */

  checkLoss = () => {
    if (this.errors === 5) {
      this.stop();
      this.ctx.clearRect(0, 0, 1000, 500);
      this.ctx.font = "32px Chakra Petch";
      this.ctx.fillStyle = "white";
      this.ctx.fillText("You lost! Press ENTER to start again.", 250, 250);
    }
  };

  checkWin = () => {
    if (this.errorsLeft < 5 && this.currentAnswer === this.words.answer) {
      this.stop();
      this.ctx.clearRect(0, 0, 1000, 500);
      this.ctx.font = "32px Chakra Petch";
      this.ctx.fillStyle = "white";
      this.ctx.fillText("You won!!!", 250, 250);
    }
  };

  nextLevel = () => {
    this.level++;
    this.levelReset();
    this.currentAnswer = this.words[this.level].answer.split("");
    this.currentHint = this.words[this.level].hint;
    this.img.src = this.currentHint;
  };

  displayTentativas() {
    let allTentativas = this.tentativas.join("-");
    this.ctx.font = "22px Chakra Petch";
    this.ctx.fillStyle = "white";
    this.ctx.fillText("You tried: " + allTentativas, 700, 400);
  }

  wordHint = () => {
    this.ctx.font = "20px Chakra Petch";
    this.ctx.fillStyle = "white";
    this.ctx.fillText("Hint", 80, 280);
  };
  /* 
  mainSound() {
    let audioTag = new Audio(
      "./docs/assets/sounds/[Official] Celeste Original Soundtrack - 03 - Resurrections [TubeRipper.com].m4a"
    );

    audioTag.play();
    audioTag.loop = true;
  } */

  updateGame = () => {
    this.ctx.clearRect(0, 0, 1000, 500);

    //this.checkKey();
    //this.checkKeyEL();
    //this.checkTypedLetters()

    this.displaySentence();
    this.checkForNextLevel();
    this.checkLoss();
    //this.displayText();
    this.displayHint();
    this.displayTentativas();
    this.wordHint();
    /* this.mainSound(); */
  };
}

/*  gameOver() {
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
 } */

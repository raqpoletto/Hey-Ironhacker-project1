window.onload = () => {
  let pause = false;
  let showInstruction = true;
  document.getElementById("instructionTxt").style.display = "none";

  window.addEventListener("keydown", (event) => {
    if (event.code === "Enter") {
      if (!pause) {
        game.start();
        document.getElementById("title").style.display = "none";
        pause = true;
      } else if (pause) {
        game.stop();
        window.location.reload();
      }
    }
  });

  document.getElementById("instructionBtn").addEventListener("click", () => {
    if (showInstruction) {
      document.getElementById("instructionTxt").style.display = "flex";
      showInstruction = false;
    } else if (!showInstruction) {
      document.getElementById("instructionTxt").style.display = "none";
      showInstruction = true;
    }
  });
};

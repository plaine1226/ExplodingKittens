function generateCode() {
  var gameCode = "";
    for (let i = 0; i < 6; i++) {
      let rand = Math.floor(Math.random()*10);
      rand.toString();
      gameCode = gameCode + rand;
    }
  switchPage();
}

function switchPage() {
  window.location.href = "gamepage.html";
}

document.getElementById("createGame").addEventListener("click", generateCode, true);
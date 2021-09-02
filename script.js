function generateCode() {
  var gameCode = "";
    for (let i = 0; i < 6; i++) {
      let rand = Math.floor(Math.random()*10);
      rand.toString();
      gameCode = gameCode + rand;
    }
  alert(gameCode);
}

function switchPage() {
  document.getElementById("gameScreen");

}

document.getElementById("createGame").addEventListener("click", generateServer, true);
function switchScreen() {
  gameScreen.style.visibility="visible";
}

function generateServer() {
  
}

var gameScreen = document.getElementById("gameScreen");

gameScreen.style.visibility="hidden";

document.getElementById("joinGame").addEventListener("click", generateServer());
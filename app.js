const tiles = document.querySelectorAll(".tile");
const player_X = "X";
const player_O = "O";
let turn = player_X;

const gameState = Array(tiles.length);
gameState.fill(null);

//Hover Feature

function setHoverText (){
  tiles.forEach((tile) => {
    tile.classList.remove("x-hover");
    tile.classList.remove("o-hover");
  });

  const hoverClass = `${turn.toLowerCase()}-hover`;

  tiles.forEach((tile) => {
    if (tile.innerText == "") {
      tile.classList.add(hoverClass);
    }
  });
}
setHoverText();

//Elements
const strike = document.getElementsByClassName("strike");
const gameOverArea = document.querySelector(".gameovermessage");
const gameOverText = document.querySelector(".game-over-text");
const playAgain = document.getElementById("restartButton");

tiles.forEach((tile) => tile.addEventListener("click",onBoardClick));

function onBoardClick(event) {
  if (gameOverArea.classList === "visible") {
    return;
  }

  const tile = event.target;
  const tileNumber = tile.dataset.index;
  if (tile.innerText != "") {
    return;
  }

  if(turn === player_X){
    tile.innerText = player_X
    gameState[tileNumber - 1] = player_X;
    turn = player_O
  }
   
  else {turn === player_O
      tile.innerText = player_O;
      gameState[tileNumber - 1] = player_O;
      turn = player_X;
  }

  setHoverText();
  checkWinner();
}


//Checking If there is a winner or Draw

//Draw 
function endGame(draw){
  const allTileFilledIn = gameState.every((tile) => tile !== null);
  if (allTileFilledIn) {
    gameOverText.innerText = "Draw!";}
  
  else if (turn === player_X){
      gameOverText.innerText = "O's Win!"
    }
  else if (turn === player_O){
      gameOverText.innerText = "X's Win!"
    }
    gameOverArea.classList.add('visible')
  }

const winningPlays = [
  { combo: [1, 2, 3], strikeClass: "strike-row-1" },
  { combo: [4, 5, 6], strikeClass: "strike-row-2" },
  { combo: [7, 8, 9], strikeClass: "strike-row-3" }, 
  { combo: [1, 4, 7], strikeClass: "strike-column-1" },
  { combo: [2, 5, 8], strikeClass: "strike-column-2" },
  { combo: [3, 6, 9], strikeClass: "strike-column-3" },
  { combo: [1, 5, 9], strikeClass: "strike-diagonal-1" },
  { combo: [3, 5, 7], strikeClass: "strike-diagonal-2" },
    ];

function checkWinner(){
    for (const winningPlay of winningPlays){
        const {combo, strikeClass } = winningPlay;
        const tileValue1 = gameState[combo[0] - 1];
        const tileValue2 = gameState[combo[1] - 1];
        const tileValue3 = gameState[combo[2] - 1];
        
    if(tileValue1 !== null && tileValue1 === tileValue2 && tileValue1 === tileValue3){
          endGame(tileValue1)
          return;
  }
      
 }
}

//Displaying Names at the top of the Page
document.getElementById('submitbutton').onclick = function (){
  const opponent1 = document.getElementById('player1name').value;
  const opponent2 = document.getElementById('player2name').value;
  let playerX = document.querySelector('#playerX');
  let playerO = document.querySelector('#playerO');
      if (opponent1 === ''){
          playerX.innerHTML = `Player X : Computer`
          playerO.innerHTML = `Player O: ${opponent2}`}
      else if (opponent2 === ''){
          playerX.innerHTML = `Player X : ${opponent1}`
          playerO.innerHTML = `Player O: Computer`}
      else {
          playerX.innerHTML = `Player X : ${opponent1}`
          playerO.innerHTML = `Player O: ${opponent2}`}
        }
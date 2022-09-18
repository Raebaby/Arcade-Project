/*- enter our names and have them displayed*/

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

let player_x = 'X';
let Player_O = 'O';
let gameState = {
    players: ['x', 'o'],
    board: [
      [null, null, null],
      [null, null, null],
      [null, null, null]
    ]
  }
/*
function buildInitialState() {

}

// render
function renderState() {

}

// add to above
function tick() {
    // this is an incremental change that happens to the state every time you update...
  
    renderState()
  }
  
  setInterval(tick, 1000 / 30) // as close to 30 frames per second as possible
  
  // now you might have things like
  document.addEventListener('keydown', function (event) {
    // here you might read which key was pressed and update the state accordingly
  })

// maybe a dozen or so helper functions for tiny pieces of the interface

// listeners
function onBoardClick() {
  // update state, maybe with another dozen or so helper functions...

  renderState() // show the user the new state
}
const board = document.getElementById('board');
board.addEventListener('click', onBoardClick); // etc */

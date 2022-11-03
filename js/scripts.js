//Business Logic//


// Business Logic SetGame
function SetGame(){
  this.players = {};
  this.playerId = 0;
}

SetGame.prototype.assignId = function() {
  return this.playerId += 1
};

SetGame.prototype.addPlayer = function(player) {
  player.playerId = this.assignId();
  this.players[player.playerId] = player;
};

// define constructor function for 
function Player (name) { 
  this.name = name; 
  this.score = 0;          
  this.globalTurnScore = 0;
}


function getRandomIntInclusive(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1) + min); // The maximum is inclusive and the minimum is inclusive
}

function roll() {
  let randomNumber = getRandomIntInclusive(1, 6)
  console.log("RandomNumber: ", randomNumber);
  if (randomNumber === 1) {
    playerId.globalTurnScore = 0;
    return
  } else {
    playerId.globalTurnScore = playerId.globalTurnScore + randomNumber; 
  }
  return 
}

function hold(){
  playerId.score += playerId.globalTurnScore;
  playerId.globalTurnScore = 0
  if (playerId.score >= 10){
  console.log("You win")
  }
}

// UI
// This is our hardcoded player declaration
let setGame = new SetGame();

function handleFormSubmission(event){
  event.preventDefaul();
  // event handler takes in submit button input of "name"
  //let player1 = new Player (input from the form)
  const player1 = document.querySelector("form#player-1").value;
  const player2 = document.querySelector("form#player-2").value;

}

//dont forget to add "load" event
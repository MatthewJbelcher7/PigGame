//Buisness Logic//
function SetGame(){
  this.players = {};
  this.playerId = 0;
}

function Player (name, playerId) { 
  this.name = name; 
  this.playerId = playerId;
  this.score = 0;          // score += scoretempScore
  this.globalTurnScore = 0;
}

// SetGame

// define constructor function for 

SetGame.prototype.assignId = function() {
  return this.playerId += 1
};

SetGame.prototype.addPlayer = function(player) {
  player.playerId = this.assignId();
  this.players[player.playerId] = player;
};



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
let playerId = new Player();









// UI Logic

//dont forget to add "load" event
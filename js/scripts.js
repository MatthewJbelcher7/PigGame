//Buisness Logic//
// function SetGame(){
//   this.players = {};
//   this.playerId = 0;
// }

function Player (name, playerId) { 
  this.name = name; 
  this.playerId = playerId;
  this.score = 0;          // score += scoretempScore
  this.globalTurnScore = 0;
}

// SetGame.

// define constructor function for 


function getRandomIntInclusive(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1) + min); // The maximum is inclusive and the minimum is inclusive
}


function roll() {
  let randomNumber = getRandomIntInclusive(1, 6)
  console.log(randomNumber)

  if (randomNumber === 1) {
    player1.globalTurnScore = 0;
    return
  } else {
  player1.globalTurnScore = player1.globalTurnScore + randomNumber; 
  }
  return 
}










// UI Logic

//dont forget to add "load" event
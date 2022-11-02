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
  //write code that gets us TO the return we want
  player1.globalTurnScore = getRandomIntInclusive(1, 6)
  return 
  //player1.globaleTurnScore should === a random number that was assigned to it

}










// UI Logic

//dont forget to add "load" event
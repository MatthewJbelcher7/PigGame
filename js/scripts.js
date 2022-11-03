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
  event.preventDefault();
  // event handler takes in submit button input of "name"
  //let player1 = new Player (input from the form)
  const playerInput1 = document.querySelector("form#player-input-1").value;
  const playerInput2 = document.querySelector("form#player-input-2").value;
  
  let player1 = new Player(playerInput1);
  let player2 = new Player(playerInput2);

  setGame.addPlayer(player1);
  setGame.addPlayer(player2);

  // roll(e);
  // hold(e);

  play the game fx(e);
  let didWin = "no";
  while (didWin === "yes") {
    if (player === playerId) {
      let holdCondition = roll(); // returns "lose" or "hold"
      if (holdCondition === "hold") {
        hold() //if hold() returns "winner" do this: didwin = "yes";
      } else if (holdCondition === "lose") {
        let holdCondition2 = roll()
          if (holdCondition2 === "hold") {
            hold()
          } else if (holdCondition2 === "lose") {
            continue;
          } 
      }
    }
}


//dont forget to add "load" event
window.addEventListener("load", function(){
  const form = document.querySelector("form#submit-button");
  form.addEventListener("submit", handleFormSubmission);

});
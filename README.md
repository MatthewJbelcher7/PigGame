

Each turn, a player repeatedly rolls a die until either a 1 is rolled or the player decides to "hold":
  // define constructor function for 
  Player (name, playerId) 
    { name = name; 
    playerId = playerId;
    score = 0;          // score += scoretempScore
    globalTurnScore = 0;
    }
 -->

const event = Player.prototype.anyGivenMethod(e.target.id); // e = handler fx

declare 

declare let player2 = new Player(nameInput, playerId)


// declare function roll(){ //attached to button element
  call getRandomIntInclusive()
    IF 1, add 0 score to this.globalTurnScore, end turn //(switchPlayer(event,findPlayerById))
      IF...Else add 2-6 to this.globaleTurnScore
      this.globalTurnScore = this.globalTurnScore + 2-6
    }

// declare function hold()
  add this.globalTurnScore to this.score;
  IF (this.score >= 100) {
    they win
  } break;
  this.gobalTurnScore = 0;



// declare switchPlayer()

  



//random int



Describe: getRandomIntInclusive(min, max)

TEST 1: "It gets a random number from min - max and output"
Code: 
getRandomIntInclusive(1, 6)
Expected Output:
random number between 1-6


Describe: roll()

Test1: "It should roll a random number between 2-6 and assign it to player1.globalTurnScore"
Code: 
let player1 = new Player(nameInput, playerId)
roll()
Expected Output:
player1.globaleTurnScore should === a random number that was assigned to it

Test2: "It shold roll 1 and make player1.globaleTurnScore 0"
Code:
roll()
Expected Output:
player1.globaleTurnScore should === 0 and call switchPlayer()

Test3 "It should roll a random number between 2-6 and ADD it to player1.globalTurnScore"
code: 
roll(); 
roll();
Expected Output:
player1.globaleTurnScore should === player1.globalTurnScore (that is either 2-6) + roll() output


Describe: hold()

Test1: "It should add player1.globalTurnScore to player1.score"
Code:
hold()
Expected Output:
player1.score === player1.score + player1.globaleTurnScore;

Test2: "It should assign player1.globaleTurnScore to 0;
Code:
hold()
Expected Output:
player1.globaleTurnScore === 0;

Test3: "It should console.log('You Win!')"
Code:
player1.score = 100;
hold()
Expected Output: 
console.log() shows "You Win!"






# Pig Dice

#### By Matthew Belcher, Richard Cha, Vera Weikel

#### A Game App

## Technologies Used

* HTML 
* CSS 
* Javascript

## Description
Create a web application that takes a number from the user and returns a list of values from 0 to the user's inputted number. Here is the (repo)[https://github.com/jenniferholcomb/mr-robogers-neighborhood.git]

### Objectives 

Print to DOM a list of values from 0 to the user's inputter number and write tests for your application's business logic. 

### Goals

To take a number from the user and returns a list of values from 0 to the user's inputted number with the following substitutions made within the returned list:

* For numbers that contain a 1, all digits are replaced with "Beep!"
For example, all digits of the number 109, 11, or 1 would be replaced with "Beep!"
* For numbers that contain a 2, all digits are replaced with "Boop!"
For example, all digits of the number 2, 24, or 2099 would be replaced with "Boop!"
* For numbers that contain a 3, all digits are replaced with "Won't you be my neighbor?"
For example, all digits of the number 39, 3, or 8763 would be replaced with "Won't you be my neighbor?"

* These substitutions are written from least to most important. The first substitution should apply unless the second does, and the same with the second and third. In other words, the substitution for the number 1 should apply unless there's a 2 present in the number. Then, the substitution for the number 2 should apply unless there's a 3 present in the number.

## Setup/Installation Requirements

* Clone this repo to your workspace.
* Navigate to the top level of the directory.
* Open index.html in your browser.

## Known Bugs

* No known bugs.

## License

[MIT](https://choosealicense.com/licenses/mit/)

Copyright (c) 2022 Matthew Belcher, Richard Cha, Vera Weikel

MIT License

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
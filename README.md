

Each turn, a player repeatedly rolls a die until either a 1 is rolled or the player decides to "hold":
  // define constructor function for 
  Player (name, playerId, score) 
    { name = name, 
    playerId = playerId,
    tempScore = tempScore, //currentScore (*starts at 0 each time)
        score = score, // score += scoretempScore
 -->



If the player rolls a 1, they score nothing and it becomes the next player's turn.
If the player rolls any other number, it is added to their turn total and the player's turn continues.
If a player chooses to "hold", their turn total is added to their score, and it becomes the next player's turn.
The first player to score 100 or more points wins.

For example, the first player, Donald, begins a turn with a roll of 5. Donald could hold and score 5 points, but chooses to roll again. Donald rolls a 2, and could hold with a turn total of 7 points, but chooses to roll again. Donald rolls a 1, and must end his turn without scoring. The next player, Alexis, rolls the sequence 4-5-3-5-6, after which she chooses to hold, and adds her turn total of 23 points to her score.








// gets a random number from min - max
function getRandomIntInclusive(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1) + min); // The maximum is inclusive and the minimum is inclusive
}

getRandomIntInclusive(1, 6)



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

| Test | Input | Output |
|--------|:------:|:-----:|
| 1.  This test will take an input. | Input: x  |  Output: x |
| 2.  This test will take in number. | Input: 0 |  Output: 0 |
| 3.   This test will require a number only. | Input: 1 |  Output: 1 |
| 4.  This test will identify a given number 1 and produce a message based on that number. | Input: 1 |  Output: Beep! |
| 5.  This test will identify numbers 1-2 and produce a specific message for number which appears first from the user input. | Input: 2 |  Output: Boop!|
| 6.  This test will identify numbers 1-3 and produce a specific message for number which appears first from the user input. | Input: 3 |  Output: Won't you be my neighbor?|
| 7.  This test will identify a multiple numbers entry and produce a specific message for number which appears first from the user input. | Input: 321,803 |  Output: Won't you be my neighbor?|
| 8.  This test will intake a multiple numbers entry and weigh from 1-3 with 3 being the most weighted. | Input: 321,803 |  Output: Won't you be my neighbor?|
| 9.  This test will identify if numbers 1, 2, 3 are not found from the user input. | Input: 5,806 |  Output: Outside?|


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
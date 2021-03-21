// inspired by https://exercism.io/tracks/javascript/exercises/etl/solutions/91f99a3cca9548cebe5975d7ebca6a85

const input = require("readline-sync");

const oldPointStructure = {
  1: ['A', 'E', 'I', 'O', 'U', 'L', 'N', 'R', 'S', 'T'],
  2: ['D', 'G'],
  3: ['B', 'C', 'M', 'P'],
  4: ['F', 'H', 'V', 'W', 'Y'],
  5: ['K'],
  8: ['J', 'X'],
  10: ['Q', 'Z']
};

function oldScrabbleScorer(word) {
	word = word.toUpperCase();
	let letterPoints = 0;
 
	for (let i = 0; i < word.length; i++) {
 
	  for (const pointValue in oldPointStructure) {
 
		 if (oldPointStructure[pointValue].includes(word[i])) {
			//letterPoints += `Points for '${word[i]}': ${pointValue}\n`
      letterPoints += Number(pointValue);
		 }
 
	  }
	}
	return letterPoints;
 }

// your job is to finish writing these functions and variables that we've named //
// don't change the names or your program won't work as expected. //

function initialPrompt() {
   return(input.question("Enter a word to score:"));
};

let simpleScore = function(word){
	
	return word.length;

};

let vowelBonusScore = function(word){
  word = word.toUpperCase();
  let vowels =['A','E','I','O','U'];
  let letterPoints = 0;

  for (let i = 0; i < word.length; i++) {

    if(vowels.includes(word[i])){
    letterPoints += 3;
    }
    else
    letterPoints += 1;
  }

  return letterPoints;

};

let scrabbleScore = function(word){
  word = word.toLowerCase();
  let letterPoints = 0;

  for(let i = 0; i < word.length; i++){

    letterPoints += (newPointStructure[word[i]]);

  }

  return letterPoints;
};

const scoringAlgorithms = [{name:"Simple Score", description:"Each letter is worth 1 point.",scoringFunction:simpleScore},
{name:"Bonus Vowels", description:"Vowels are 3 pts, consonants are 1 pt.",scoringFunction:vowelBonusScore},
{name:"Scrabble", description:"	The traditional scoring algorithm.",scoringFunction:scrabbleScore}];

function scorerPrompt() {

  console.log("Which scoring algorithm would you like to use?");
  console.log();
  console.log("0 - Simple: One point per character"); 
  console.log("1 - Vowel Bonus: Vowels are worth 3 points");
  console.log("2 - Scrabble: Uses scrabble point system");
  return(scoringAlgorithms[input.question("Enter 0, 1, or 2:")])
}

function transform(oldPointStructure) {

  let newStructure ={};

  for(eachKey in oldPointStructure){
    for(let i=0; i<oldPointStructure[eachKey].length; i++){
        newStructure[(oldPointStructure[eachKey][i]).toLowerCase()] = Number(eachKey);
    }
  }

  return newStructure;

};

let newPointStructure = transform(oldPointStructure);

function runProgram() {
   let word = initialPrompt();
   console.log(`Score for '${word}':${scorerPrompt().scoringFunction(word)}`);
   
}

// Don't write any code below this line //
// And don't change these or your program will not run as expected //
module.exports = {
   initialPrompt: initialPrompt,
   transform: transform,
   oldPointStructure: oldPointStructure,
   simpleScore: simpleScore,
   vowelBonusScore: vowelBonusScore,
   scrabbleScore: scrabbleScore,
   scoringAlgorithms: scoringAlgorithms,
   newPointStructure: newPointStructure,
	runProgram: runProgram,
	scorerPrompt: scorerPrompt
};


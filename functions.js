let answer = prompt("Enter a lowercase sentence here:");


let capitalizeFandL = function(answer) {
  let first = answer[0].toUpperCase();
  let last = answer[answer.length - 2].toUpperCase();
  return first + last;
}

let lettersToReverse = capitalizeFandL(answer);
console.log(lettersToReverse);

let reverseLetters = function(lettersToReverse){
  return lettersToReverse.split("").reverse().join("");
}

var appendingLetters = reverseLetters(lettersToReverse);

var concatSentenceAndLetters = function() {
  return answer + appendingLetters;
}

// Final answer alert

alert(concatSentenceAndLetters());

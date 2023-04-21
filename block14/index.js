// Only Odds

/*
-declare a variable with an array
-use a for loop
-return only odd number from the original array
-if there is only one odd number, return an array with that single value
*/
let odds = [];
let array = [2, 4, 6, 8, 11, 20, 15, 22];
for (let i = 0; i < array.length; i++) {
  if (array[i] % 2 !=0){
odds.push(array[i]);
  }
}

console.log(odds); 

// Vowel vs Consonant
/*
-declare a variable with an array of vowels
-use a for loop
  -return the following statement:
    -the initial variable or word
    -"has"
    -number of consonants
    -"and"
    -number of vowels

*/
let numCons = [];
let numVowel = [];
let word = hello;
let vowels = ["a", "e", "i", "o", "u"];

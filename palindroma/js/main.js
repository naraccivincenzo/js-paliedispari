'use strict'

// init the function 
/* function split the word in single letters
then reverse and join again, after that
compare if they are equal at the original word
then return true or false
*/
function palindrome(word) {

    if (word === word.split('').reverse().join('')) {
        return true
    } else {
        return false
    }
}

//init the prompt
const word = prompt('Inserisci una parola per vedere se è palindroma');

//call the function and print the result
if (palindrome(word) === true) {
    console.log(`La parola inserita ${word} è palindroma`);
} else {
    console.log(`La parola inserita ${word} non è palindroma`);
}



'use strict'

//init the function
//function to generate a random number from 1 to 5
function randomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
}
//function to check who is the winner
function check(num1, num2, num3, num4) {
    if (num1 === true && num2 === true || num3 === true && num4 === true) {
        return 'HAI VINTO';
    } else {
        return 'HAI PERSO';
    }
}

//function to sum two numbers
function sumNumber(num1, num2) {
    return num1 + num2;
}

/*function to check if the sum is even or odd
and return the result*/
function isEven(num1) {
    if (num1 % 2 === 0) {
        return true;
    } else {
        return false;
    }
}

//retrieve the elements from the DOM
const inputNumber = document.getElementById('inputNumber');
const even = document.getElementById('even');
const odd = document.getElementById('odd');
const sumDom = document.getElementById('sum');
const winner = document.getElementById('winner');
const evenOrOdd = document.getElementById('evenOrOdd');
const random = document.getElementById('random');

//generate the random number and inject it into the DOM
let number = randomNumber(1, 5);
random.innerText = `Il numero random è: ${number}`;

/*add an event listener to the form to call the function
to sum the two numbers then check if the sum is even or odd
 and inject the result into the DOM when the form is submitted*/
form.addEventListener('submit', function (event) {
    event.preventDefault();
    let sum = sumNumber(number, Number(inputNumber.value));
    sumDom.innerText = `La somma è:  ${sum}`;
    winner.innerText = check(even.checked, isEven(sum), odd.checked, isEven(sum));

    if (isEven(sum) === true) {
        evenOrOdd.innerText = 'La somma dei numeri è pari';
    } else {
        evenOrOdd.innerText = 'La somma dei numeri è dispari';
    }
})

/* add an event listener to the reset button to reset 
the values of the form and generate a new random number*/
reset.addEventListener('click', function (event) {
    event.preventDefault();

    //default values
    inputNumber.value = '';
    even.checked = false;
    odd.checked = false;
    number = randomNumber(1, 5);
    random.innerText = `Il numero random è: ${number}`;
    sumDom.innerText = ``;
    evenOrOdd.innerText = '';
    winner.innerText = '';
});




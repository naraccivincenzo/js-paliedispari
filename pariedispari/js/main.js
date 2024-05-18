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
function evenOrOdd(num1) {
    if (num1 % 2 === 0) {
        return true;
    } else {
        return false;
    }
}

//generate the random number and inject it into the DOM
let number = randomNumber(1, 5);
document.getElementById('random').innerText = `Il numero random è: ${number}`;


//retrieve the elements from the form
const inputNumber = document.getElementById('inputNumber');
const even = document.getElementById('even');
const odd = document.getElementById('odd');


/*add an event listener to the form to call the function
to sum the two numbers then check if the sum is even or odd
 and inject the result into the DOM when the form is submitted*/
form.addEventListener('submit', function (event) {
    event.preventDefault();
    const sum = sumNumber(number, Number(inputNumber.value));
    document.getElementById('sum').innerText = `La somma è:  ${sum}`;
    document.getElementById('winner').innerText = check(even.checked, evenOrOdd(sum), odd.checked, evenOrOdd(sum));

    if (evenOrOdd(sum) === true) {
        document.getElementById('evenOrOdd').innerText = 'La somma dei numeri è pari';
    } else {
        document.getElementById('evenOrOdd').innerText = 'La somma dei numeri è dispari';
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
    document.getElementById('random').innerText = `Il numero random è: ${number}`;
    document.getElementById('sum').innerText = ``;
    document.getElementById('evenOrOdd').innerText = '';
    document.getElementById('winner').innerText = '';
});




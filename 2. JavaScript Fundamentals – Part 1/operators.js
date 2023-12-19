/*
Type of Operator:
    1. Assignment. =, +=, -+, *=, /=, ++, --
    2. Arithematic. +, - , *, /, %, ** (exponential)
    3. typeof()
    4. Comparison. >, <, <=, >=
    5. 
     
*/

// assignment operator
const firstNumber = 20;

let secondNumber = 23;
secondNumber += 12;

console.log(secondNumber);

secondNumber ++;
console.log("After increment:",secondNumber)

secondNumber *= 2;
console.log("After Multiply: "+secondNumber);

// Arithematic operator

const firstValue = 4;
const secondValue = 3;

const result = 3**3;
console.log("result of exponential is: ",result);

const number = 20;
const output = (number % 3);
console.log("Remaining Number is:",output);

// comparison
const ahanafAge = (2022 - 2023);
// console.log(ahanafAge);
const fatherAge = (1996- 2023);
// console.log(fatherAge); 

let age = true;
let country = false;

console.log(age > country);

console.log(ahanafAge > fatherAge);
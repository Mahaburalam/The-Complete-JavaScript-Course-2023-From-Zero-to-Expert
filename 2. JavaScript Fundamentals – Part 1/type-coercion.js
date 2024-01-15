// type coersion

const firstNumber = 3;
const secondNumber = '21';
const thirdNumber = 7;

console.log(`Case when subtraction: `,firstNumber - secondNumber + thirdNumber);

/*
    In JavaScript when - operation between string and number, the string value will be converted by number.
    But if the operation is +, then the case is different. this case string is not converted.
*/

console.log(`Case When Addition: `,firstNumber + secondNumber + thirdNumber);

console.log(`Divided: `,firstNumber / secondNumber);

console.log(`Multiply`, firstNumber * secondNumber);
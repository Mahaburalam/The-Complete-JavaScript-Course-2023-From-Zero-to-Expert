// type conversion -> The value we convert.
// type coercion -> The value is converted behind the seen, that we can not see.

const currentYear = 2023;
// console.log(typeof(currentYear));

const birthYear = '1996';
console.log(`Before type conversion the value is:` + birthYear);
console.log(typeof birthYear);

// concatination with string and number
const currentBirthYear = (currentYear - birthYear);
console.log(`My Current age is: ${currentBirthYear}`);
console.log(typeof(currentBirthYear));

// string to number conversion
const birthYearAfterConversion = Number(birthYear);
console.log(`After type conversion the value is:`,birthYearAfterConversion);
console.log(typeof birthYearAfterConversion);

// concatination with string and number after string convesion
const currentBirthYearAfterConversion = (currentYear - birthYearAfterConversion);
console.log(`After type Conversion the age is: ${currentBirthYearAfterConversion}`);
console.log(typeof(currentBirthYearAfterConversion));



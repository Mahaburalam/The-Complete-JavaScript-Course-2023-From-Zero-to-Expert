// javascript 5 falsy values:
/*
    1. 0 -> Zero
    2. ' ' -> Empty String
    3. undefined
    4. null
    5. NaN ->Actually it is number but no exist
    6. false
*/
let number;
let emptyString = '';
let age = 0;
if(age)
{
    console.log(`This is true value and the value is: ${age}`);
}
else
{
    console.log(`This is falsy value and the value is ${age}`);
}
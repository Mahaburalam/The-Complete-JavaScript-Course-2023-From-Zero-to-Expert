// write a program if a person age is more than 18 then he/she can drive the car

const currentAge = 21;
const newAge = 16;
// const condition = newAge >= 18;

if(newAge >= 18){
    console.log("yes!! Now you are permitted to drive the car 🚓🚗");
}
else{
    const ageLeftToGetPermission = (18 - newAge);
    console.log(`You behind ${ageLeftToGetPermission} years to get permission to drive the car.`);
}


// calculate the century based on birth year

let century;
const dateOfBirth = 2000;
if(dateOfBirth <=1999){
    century = 20;
}
else{
    century = 21;
}
console.log(`Which century your birth is ${century}`)
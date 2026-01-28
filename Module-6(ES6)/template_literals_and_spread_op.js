// Template literals ==> ``

const countryName = "Bangladesh";

// const country = "my country name is " + countryName;
const country = `My country is ${countryName}`; 
console.log(country);


// Spread operator ==> ...

const numbers = [1,2,3,4,5,6,7,8,9,10];
const numbers2 = [11,12,13,14,15,16,17,18,19];

console.log([...numbers, ...numbers2]);

const maxValue = Math.max(...numbers);
console.log(maxValue);
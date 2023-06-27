"use strict";
let person2 = { name: 'td', address: 'pune', email: 'kdfa@kjf' };
let person = { name: 'pc', address: 'jalgaon' };
const { address } = person;
console.log(address); // Output: jalgaon
const { name: personName, email } = person2;
console.log(personName); // Output: td
console.log(email); // Output: kdfa@kjf
const myArray = [1, 2, 3, 4, 5];
// Array destructuring
const [firstElement, secondElement, ...restOfArray] = myArray;
console.log(firstElement); // Output: 1
console.log(secondElement); // Output: 2
console.log(restOfArray); // Output: [3, 4, 5]

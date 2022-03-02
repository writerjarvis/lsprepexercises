/* Modify the age.js program you wrote in the exercises for the Variables chapter.
The update code should ask the user to enter their age instead of hard-coding the age in the program. */

// Answer below

let rlSync = require('readline-sync');
let userAge = Number(rlSync.question('How old are you? '));
console.log(`You are ${userAge}, years old. `);
console.log(`In 10 years you will be ${userAge + 10} years old. `);
console.log(`In 20 years you will be ${userAge + 20} years old. `);
console.log(`In 30 years you will be ${userAge + 30} years old. `);
console.log(`In 40 years you will be ${userAge + 40} years old. `);
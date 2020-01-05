// day3.js
// Exercise 1: Data types Part
let firstName = 'Jon';
let lastName = 'Fowler';
let country = 'USA';
let city = 'Denver';
let age = 32;
let isMarried = true;
let year = 2020;
console.log(typeof firstName);
console.log(typeof lastName);
console.log(typeof country);
console.log(typeof city);
console.log(typeof age);
console.log(typeof isMarried);
console.log(typeof year);

// Exercise 2: Arithmetic Operators Part
let operandOne = 4;
let operandTwo = 3;
console.log(operandOne + operandTwo);
console.log(operandOne - operandTwo);
console.log(operandOne * operandTwo);
console.log(operandOne / operandTwo);
console.log(operandOne % operandTwo);
console.log(operandOne ** operandTwo);
console.log(operandOne++);
console.log(operandOne--);
console.log(++operandOne);
console.log(--operandOne);

// Exercise 3: Booleans Part
// true
console.log(3 > 2);
console.log(4 == '4');
console.log((2 + 2) == (2 * 2));
//false
console.log(3 < 2);
console.log(4 === '4');
console.log((3 + 3) == (3 * 3));

// Exercise 4: Comparison Operators
console.log('Exercise 4')
console.log(4 > 3);     // true
console.log(4 >= 3);    // true
console.log(4 < 3);     // false
console.log(4 <= 3);    // false
console.log(4 == 4);    // true
console.log(4 === 4);   // true
console.log(4 != 4);    // false
console.log(4 !== 4);   // false
console.log(4 != '4');  // false
console.log(4 == '4');  // true
console.log(4 === '4'); // false

// Exercise 5: Logical Operators
console.log('Exercise 5');
console.log(4 > 3 && 10 < 12);    // true
console.log(4 > 3 && 10 > 12);    // false
console.log(4 > 3 || 10 < 12);    // true
console.log(4 > 3 || 10 > 12);    // true
console.log(!(4 > 3));            // false
console.log(!(4 < 3));            // true
console.log(!(false));            // true
console.log(!(4 > 3 && 10 < 12)); // false
console.log(!(4 > 3 && 10 > 12)); // true
console.log(!(4 === '4'));        // true

// Exercise 6: Date time Object
const now = new Date();
// What is the year today?
console.log(now.getFullYear());
// What is the month today?
console.log(now.getMonth());
// What is the date today?
console.log(now.getDate());
// What is the day today?
console.log(String(now).substr(0, 3));
// What is the hours now?
console.log(now.getHours());
// What is the minutes now?
console.log(now.getMinutes());
// Find out the numbers of seconds elapsed from January 1, 1970 to now.
console.log(Math.round(now.getTime() / 1000));
// Create a human readable time format
// jQuery would be a better way to do date formatting:
// https://github.com/phstc/jquery-dateFormat
const fullYear = now.getFullYear();
const month = now.getMonth() + 1;
const date = now.getDate();
const hours = now.getHours();
const minutes = now.getMinutes();
const seconds = now.getSeconds();
// YYYY-MM-DD HH:mm:ss
console.log(`${fullYear}-${month}-${date} ${hours}:${minutes}:${seconds}`);
// DD-MM-YYYY HH:mm:ss
console.log(`${date}-${month}-${fullYear} ${hours}:${minutes}:${seconds}`);
// DD/MM/YYY HH:mm:ss
console.log(`${date}/${month}/${fullYear} ${hours}:${minutes}:${seconds}`);

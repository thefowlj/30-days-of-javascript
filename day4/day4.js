// day4.js
// Exercise 8: Conditionals
/*
  Get user input using prompt(“Enter your age:”). If user is 18 or older , give
  feedback:You are old enough to drive but if not 18 give feedback to wait for
  the years he supposed to wait for.
*/
// let age = prompt('Enter your age');
// if(age >= 18) {
//   console.log('You are old enough to drive');
// } else if(age < 18) {
//   console.log(`You are left with ${18 - age} years to drive.`);
// } else {
//   console.log('Please enter a valid age.');
// }

/*
  Compare the values of myAge and yourAge using if … else. Based on the
  comparison log to console who is older (me or you).
  Use prompt(“Enter your age:”) to get the age as input.
*/
// const myAge = 32;
// let yourAge = prompt('Enter your age:');
// if(myAge > yourAge) {
//   console.log(`I am ${myAge - yourAge} years older than you.`);
// } else if(myAge < yourAge) {
//   console.log(`You are ${yourAge - myAge} years older than me.`);
// } else if(myAge == yourAge) {
//   console.log('You are the same age as me.');
// } else {
//   console.log('Please enter a valid age.');
// }

/*
  If a is greater than b return a is greater than b else a is less than b.
  Do it both using if else and ternary operator.
*/
let a = 4;
let b = 3;
if(a > b) {
  console.log(`${a} is greater than ${b}`);
} else if(a < b){
  console.log(`${a} is less than ${b}`);
} else {
  console.log(`${a} is equal to ${b}`);
}
console.log(a > b ?
  `${a} is greater than ${b}` :
  `${a} is not greater than ${b}`
);

/*
  Write a code which give grade students according to theirs scores:

  90-100, A
  70-89, B
  60-69, C
  50-59, D
  0 -49, F
*/
let grade;
let score = 45;
if(score >= 90) {
  grade = 'A';
} else if(score >= 70 && score < 90) {
  grade = 'B';
} else if(score >= 60 && score < 70) {
  grade = 'C';
} else if(score >= 50 && score < 60) {
  grade = 'D';
} else {
  grade = 'F';
}
console.log(grade);

/*
  Check if the season is Autumn, Winter, Spring or Summer. If the user input is:

  September, October or November, the season is Autumn.
  December, January or February, the season is Winter.
  March, April or May, the season is Spring
  June, July or August, the season is Summer
*/
// let month = prompt('Enter a month');
// let season;
// if(month == 'September' || month == 'October' || month =='November') {
//   season = 'Autumn';
// } else if(month == 'December' || month == 'January' || month =='February') {
//   season = 'Winter';
// } else if(month == 'March' || month == 'April' || month =='May') {
//   season = 'Spring';
// } else if (month == 'June' || month == 'July' || month =='August') {
//   season = 'Summer';
// } else {
//   console.log('Please enter a valid month.');
// }
// console.log(season);

/*
  Even numbers are divisible by 2 and the remainder is zero.
  How do you check if a number is even or not using JavaScript?
*/
// let output;
// let parity;
// let number = prompt('Enter an integer');
// number = parseInt(number);
// if(!isNaN(number)) {
//   parity = number % 2 == 0 ? 'even' : 'odd';
//   output = `${number} is an ${parity} number.`;
// } else {
//   output = 'NaN';
// }
// console.log(output);

/*
  Check if a day is weekend day or a working day.
  Your script will take day as an input.

      What is the day is today? Saturday
      Saturday is a weekend day.

      What is the day today? saturDaY
      Saturday is a weekend day.

      What is the day today? Friday
      Friday is a work day.

      What is the day today? FrIDAy
      Friday is a work day.
*/
// let output;
// let dayOfWeek = prompt('What day is today?').toLowerCase();
// switch(dayOfWeek) {
//   case 'monday':
//     output = 'Monday is a work day.';
//     break;
//   case 'tuesday':
//     output = 'Tuesday is a work day.';
//     break;
//   case 'wednesday':
//     output = 'Wednesday is a work day.';
//     break;
//   case 'thursday':
//     output = 'Thursday is a work day';
//     break;
//   case 'friday':
//     output = 'Friday is a work day';
//     break;
//   case 'saturday':
//     output = 'Saturday is a weekend day.';
//     break;
//   case 'sunday':
//     output = 'Sunday is a weekend day.';
//     break;
//
//   default:
//     output = `${dayOfWeek} is not a valid day.`;
// }
// console.log(output);

/*
  Write a program which tells the number days in a month.
*/
const months = ['january','february','march','april','may','june','july','august','september','october','november','december'];
const daysInMonth = [31,28,31,30,31,30,31,31,30,31,30,31];
let output;
let monthEntered = prompt('Enter month:').toLowerCase();
let monthIndex = months.indexOf(monthEntered);
if(monthIndex >= 0) {
  output = `${monthEntered[0].toUpperCase()}${monthEntered.substr(1)} has ${daysInMonth[monthIndex]} days.`;
} else {
  output = `${monthEntered} is not a valid month.`;
}
console.log(output);

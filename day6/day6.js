// day6.js
const countries = [
  'Albania',
  'Bolivia',
  'Canada',
  'Denmark',
  'Ethiopia',
  'Finland',
  'Germany',
  'Hungary',
  'Ireland',
  'Japan',
  'Kenya'
];

const webTechs = [
  'HTML',
  'CSS',
  'JavaScript',
  'React',
  'Redux',
  'Node',
  'MongoDB'
];

const mernStack = ['MongoDB', 'Express', 'React', 'Node'];

/*
  Iterate 0 to 10 using for loop, do the same using while and do while loop
*/
for(let i = 0; i < 11; i++) {
  console.log(i);
}
let i = 0;
while(i < 11) {
  console.log(i++);
}
i = 0;
do {
  console.log(i++);
} while(i < 11);
/*
  Iterate 10 to 0 using for loop, do the same using while and do while loop
*/
for(let i = 10; i > -1; i--) {
  console.log(i);
}
i = 10;
while(i > -1) {
  console.log(i--);
}
i = 10;
do {
  console.log(i--);
} while(i > -1);
/*
  Iterate 0 to n using for loop
*/
let n = 5;
for(let i = 0; i <= n; i++) {
  console.log(i);
}
/*
  Write a loop that makes the following pattern using console.log():

    #
    ##
    ###
    ####
    #####
    ######
    #######
*/
for(let i = 0; i < 7; i++) {
  let output = '';
  for(let j = 0; j < i; j++) {
    output = `${output}#`;
  }
  console.log(output);
}

/*
  Use loop to print the following pattern:

  0 x 0 = 0
  1 x 1 = 1
  2 x 2 = 4
  3 x 3 = 9
  4 x 4 = 16
  5 x 5 = 25
  6 x 6 = 36
  7 x 7 = 49
  8 x 8 = 64
  9 x 9 = 81
  10 x 10 = 100
*/
for(let i = 0; i < 11; i++) {
  console.log(`${i} x ${i} = ${i ** 2}`);
}
/*
  Use for loop to iterate from 0 to 100 and print only even numbers
*/
for(let i = 0; i < 101; i++) {
  if(i % 2 == 0) {
    console.log(`${i}`);
  }
}
/*
  Use for loop to iterate from 0 to 100 and print only odd numbers
*/
for(let i = 0; i < 101; i++) {
  if(i % 2 != 0) {
    console.log(`${i}`);
  }
}
/*
  Use for loop to iterate from 0 to 100 and print only prime numbers
*/
for(let i = 0; i < 101; i++) {
  let prime = true;
  for(let j = 2; j < i - 1; j++) {
    prime = false;
  }
  if(prime) {
    console.log(i);
  }
}
/*
  Use for loop to iterate from 0 to 100 and print and print the sum of all numbers.

  The sum all numbers is 5050.
*/
let sum = 0;
for(let i = 0; i < 101; i++) {
  sum += i;
}
console.log(sum);
/*
  Use for loop to iterate from 0 to 100 and print the sum of all evens and the sum of all odds.
  The sum of all evens is 2550. And the sum of all odds is 2500.
*/
sum = [0,0];
for(let i = 0; i < 101; i++) {
  if(i % 2 == 0) {
    sum[0] += i;
  } else {
    sum[1] += i;
  }
}
console.log(`The sum of all evens is ${sum[0]}. and the sum of all odds is 2500.`);
/*
  Use for loop to iterate from 0 to 100 and print the sum of all evens and the
  sum of all odds. Print sum of evens and sum of odds as array
*/
sum = [0,0];
for(let i = 0; i < 101; i++) {
  if(i % 2 == 0) {
    sum[0] += i;
  } else {
    sum[1] += i;
  }
}
console.log(sum);
/*
  Develop a small script which generate array of 5 random numbers
*/
let rand = [];
let seed = performance.now() * (10 ** 14);
let a = 3284923;
let c = 57323
let m = 100;
for(i = 0; i < 5; i++) {
  let x = (a * seed + c) % m;
  rand.push(x);
  seed = performance.now() * (10 ** 14);
  console.log(seed);
}
console.log(rand);
/*
  Develop a small script which generate array of 5 random numbers and the numbers must be unique
*/
rand = [];
m = 100;
for(let i = 0; i < 5; i++) {
  while(i == rand.length) {
    let x = (a * seed + c) % m;
    if(!rand.includes(x)) {
      rand.push(x);
    }
    seed = x * performance.now() * (10 ** 14);
  }
}
console.log(rand);
/*
  Develop a small script which generate a six characters random id:

  ex: 5j2khz
*/
let alphaNum = '0123456789abcdefghijklmnopqrstuvwxyz';
rand = '';
seed = performance.now() * (10 ** 14);
m = alphaNum.length;
for(let i = 0; i < 6; i++) {
  let y = (a * seed + c) % 501;
  let x = (a * seed + c) % m;
  rand = `${rand}${alphaNum[x]}`;
  seed = y * performance.now() * (10 ** 14);
}
console.log(rand);

// Using Math.random()
rand = '';
for(let i = 0; i < 6; i++) {
  let x = Math.floor(Math.random() * m);  // 0-36
  rand = `${rand}${alphaNum[x]}`;
}
console.log(rand);
/*
  Develop a small script which generate any number of characters random id:
*/
rand = '';
n = 45;
for(let i = 0; i < n; i++) {
  let x = Math.floor(Math.random() * m);  // 0-36
  rand = `${rand}${alphaNum[x]}`;
}
console.log(rand);

hex = '0123456789abcdef';
rand = '#';
m = hex.length;
n = 6;
for(let i = 0; i < n; i++) {
  let x = Math.floor(Math.random() * m);  // 0-36
  rand = `${rand}${hex[x]}`;
}
console.log(rand);
/*
  Write a script which generates a random rgb color number.
*/
rand = [];
m = 255;
n = 3;
for(let i = 0; i < n; i++) {
  let x = Math.floor(Math.random() * m);  // 0-36
  rand.push(x);
}
console.log(rand);
/*
  Using the above countries array, create the following new array.

  ["ALBANIA", "BOLIVIA", "CANADA", "DENMARK", "ETHIOPIA", "FINLAND", "GERMANY", "HUNGARY", "IRELAND", "JAPAN", "KENYA"]
*/
// for(let i = 0; i < countries.length; i++) {
//   countries[i] = countries[i].toUpperCase();
// }
// console.log(countries);

/*
  Using the above countries array, create an array for countries length'.
*/
let cLen = [];
for(let i = 0; i < countries.length; i++) {
  cLen.push(countries[i].length);
}
console.log(cLen);
/*
  Use the countries array to create the following array of arrays:

  [
    ['Albania', 'ALB', 7],
    ['Bolivia', 'BOL', 7],
    ['Canada', 'CAN', 6],
    ['Denmark', 'DEN', 7],
    ['Ethiopia', 'ETH', 8],
    ['Finland', 'FIN', 7],
    ['Germany', 'GER', 7],
    ['Hungary', 'HUN', 7],
    ['Ireland', 'IRE', 7],
    ['Japan', 'JAP', 5],
    ['Kenya', 'KEN', 5]
  ]
*/
let cArr = []
for(let i = 0; i < countries.length; i++) {
  let temp = [];
  temp.push(countries[i]);
  temp.push(countries[i].substr(0, 3).toUpperCase());
  temp.push(countries[i].length);
  cArr.push(temp);
}
console.log(cArr);
/*
  In above countries array, check if there is a country or countries containing
  the word 'land'. If there are countries containing 'land', print it as array.
  If there is no country containing the word 'land', print 'These are countries
  without land'.
*/
landArr = []
for(let i = 0; i < countries.length; i++) {
  if(countries[i].includes('land')) {
    landArr.push(countries[i]);
  }
}
console.log(landArr.length > 0 ? landArr : 'These are countries without land.');
/*
  In above countries array, check if there a country or countries end with a
  substring 'ia'. If there are countries end with, print it as array. If there
  is no country containing the word 'land', print 'These are countries ends
  without ia'.
*/
iaArr = []
for(let i = 0; i < countries.length; i++) {
  if(countries[i].includes('ia')) {
    iaArr.push(countries[i]);
  }
}
console.log(iaArr.length > 0 ? iaArr : 'These are countries without ia.');
/*
  Using the above countries array, find the country containing the biggest
  number of characters.
*/
c = 0;
x = -1;
for(let i = 0; i < countries.length; i++) {
  let l = countries[i].length;
  if(l > c) {
    c = l;
    x = i;
  }
}
console.log(countries[x]);
/*
  Using the above countries array, find the country containing only 5 characters.
*/
c = [];
for(const country of countries) {
  if(country.length == 5) {
    c.push(country);
  }
}
console.log(c);
/*
  Find the longest word in the webTechs array
*/
c = 0;
x = '';
for(const tech of webTechs) {
  let l = tech.length;
  if(l > c) {
    c = l;
    x = tech;
  }
}
console.log(x);
/*
  Use the webTechs are to create the following array of arrays:

  [["HTML", 4], ["CSS", 3],["JavaScript", 10],["React", 5],["Redux", 5],["Node", 4],["MongoDB", 7]]
*/
let tArr = [];
for(const tech of webTechs) {
  tArr.push([tech,tech.length]);
}
console.log(tArr);
/*
  An application created using MongoDB, Express, React and Node is called a
  MERN stack. Create the acronym MERN by using the array mernStack
*/
let mern = '';
for(const tech of mernStack) {
  mern = `${mern}${tech[0].toUpperCase()}`;
}
console.log(mern);
/*
  This is a fruit array , ['banana', 'orange', 'mango', 'lemon'] reverse the
  order using loop without using a reverse method.
*/
let fruit = ['banana', 'orange', 'mango', 'lemon'];
let reverseFruit = [];
for(let i = fruit.length-1; i >= 0; i--) {
  reverseFruit.push(fruit[i]);
}
console.log(reverseFruit);
/*
Print all the elements of array as shown below.

    const fullStack = [
      ['HTML', 'CSS', 'JS', 'React'],
      ['Node', 'Express', 'MongoDB']
    ]
    HTML
    CSS
    JS
    REACT
    NODE
    EXPRESS
    MONGODB
  */
const fullStack = [
  ['HTML', 'CSS', 'JS', 'React'],
  ['Node', 'Express', 'MongoDB']
];
for(i of fullStack) {
  for(j of i) {
    console.log(j.toUpperCase());
  }
}
/*
  Copy countries array(Avoid mutation)
*/
let copyCountries = countries.slice();
console.log(copyCountries);
/*
  Arrays are mutable. Create a copy of array which does not modify the original.
  Sort the copied array and store in a variable sortedCountries
*/
let sortedCountries = countries.slice();
sortedCountries.sort();
console.log(sortedCountries);
/*
  Sort the webTechs array and mernStack array
*/
webTechs.sort();
mernStack.sort();
console.log(webTechs);
console.log(mernStack);
/*
  Extract all the countries contain the word 'land' from the countries array
  and print it as array
*/
landArr = [];
for(const c of countries) {
  if(c.includes('and')) {
    landArr.push(c);
  }
}
console.log(landArr);
/*
  Extract all the countries containing only four characters from the countries
  array and print it as array
*/
let fourChar = [];
for(const c of countries) {
  if(c.length == 4) {
    fourChar.push(c);
  }
}
console.log(fourChar);
/*
  Reverse the countries array and capitalize each country and stored it as an array
*/
let reverseCountries = [];
for(let i = countries.length-1; i >= 0; i--) {
  reverseCountries.push(countries[i].toUpperCase());
}
console.log(reverseCountries);

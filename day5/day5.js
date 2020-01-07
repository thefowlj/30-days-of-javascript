// day5.js
/*
  Declare an empty array;
*/
let arr = [];
/*
  Declare an array with more than 5 number of elements
*/
let myArr = [1,2,3,4,5,6];
/*
  Find the length of your array
*/
console.log(myArr.length);
/*
  Get the first item, the middle item and the last item of the array
*/
console.log(myArr[0]);
console.log(myArr[parseInt(myArr.length / 2) - 1 ]);
console.log(myArr[myArr.length - 1]);
/*
  Declare an array called mixedDataTypes,put different data types in your array
  and find length of the array. You are should size be greater than 5
*/
let mixedDataType = [
  1,
  'Taco',
  {company: 'Taco Hut', revenue: 1000000000},
  5.25,
  'Burrito',
  3.50,
  'Nacho'
];
console.log(mixedDataType.length);
/*
  Declare an array variable name itCompanies and assign initial values
  Facebook, Google, Microsoft, Apple, IBM, Oracle and Amazon
*/
const ogITCompanies = [
  'Facebook',
  'Google',
  'Microsoft',
  'Apple',
  'IMB',
  'Oracle',
  'Amazon'
];
let itCompanies = ogITCompanies.slice();
/*
  Print the array using console.log()
*/
console.log(itCompanies);
/*
  Print the number of companies in the array
*/
console.log(itCompanies.length);
/*
  Print the first company, middle and last company
*/
console.log(itCompanies[0]);
console.log(itCompanies[parseInt(itCompanies.length / 2) - 1 ]);
console.log(itCompanies[itCompanies.length - 1]);
/*
  Print out each company
*/
console.log(itCompanies.join('\n'));
/*
  Change each company name to uppercase one by one and print them out
*/
for(let i = 0; i < itCompanies.length; i++) {
  console.log(itCompanies[i].toUpperCase());
}
/*
  Print the array like as a sentence:
  Facebook, Google, Microsoft, Apple, IBM,Oracle and Amazon are big IT companies.
*/
let coSentence = itCompanies[0];
for(let i = 1; i < itCompanies.length; i++) {
  if(i < (itCompanies.length - 1)) {
    coSentence = `${coSentence}, ${itCompanies[i]}`;
  } else {
    coSentence = `${coSentence} and ${itCompanies[i]} are big IT companies.`;
  }
}
console.log(coSentence);
/*
  Check if a certain company exists in the itCompanies array.
  If it exist return the company else return a company is not found
*/
let coCheck = 'Facebooker';
console.log(itCompanies.includes(coCheck) ? coCheck : 'Company is not found.');
/*
  Filter out companies which have more than one 'o' without the filter method
*/
let filteredItCompanies = [];
for(let i = 0; i < itCompanies.length; i++) {
  if(itCompanies[i].match(/.*o.*o.*$/gi) == null) {
    filteredItCompanies.push(itCompanies[i]);
  }
}
console.log(filteredItCompanies);
/*
  Sort the array using sort() method
*/
console.log(itCompanies.sort());
/*
  Reverse the array using reverse() method
*/
console.log(itCompanies.reverse());
/*
  Slice out the first 3 companies from the array
*/
console.log(itCompanies.slice(3, itCompanies.length));
/*
  Slice out the last 3 companies from the array
*/
itCompanies = ogITCompanies.slice();
console.log(itCompanies);
console.log(itCompanies.slice(0, itCompanies.length - 3));
/*
  Slice out the middle IT company or companies from the array
*/
itCompanies = ogITCompanies.slice();
itCompanies = itCompanies.slice(0, itCompanies.length - 1);
console.log(itCompanies);
let j = parseInt(itCompanies.length / 2);
if(itCompanies.length % 2 == 0) {
  console.log(itCompanies.slice(j -1 , j+1));
} else {
  console.log(itCompanies.slice(j, j + 1));
}
/*
  Remove the first IT company from the array
*/
itCompanies = ogITCompanies.slice();
itCompanies.shift()
console.log(itCompanies);
/*
  Remove the middle IT company or companies from the array
*/
itCompanies = ogITCompanies.slice();
j = parseInt(itCompanies.length / 2);
let firstArr = itCompanies.slice(0, j);
let secondArr = itCompanies.slice(j + 1, itCompanies.length);
itCompanies = firstArr.concat(secondArr);
console.log(itCompanies);
/*
  Remove the last IT company from the array
*/
itCompanies = ogITCompanies.slice();
console.log(itCompanies.pop());
console.log(itCompanies);
/*
  Remove all IT companies
*/
itCompanies = [];
/*
  Create a separate countries.js file and store the countries array in to this
  file, create a separate file web_techs.js ans store the webTechs array in to
  this file. Access both file in main.js file
*/
console.log(countries);
console.log(webTechs);
/*
  First remove all the functions and change the string to array and count the number of words in the array

  let text =
  'I love teaching and empowering people. I teach HTML, CSS, JS, React, Python.'
  console.log(words)
  console.log(words.length)
  ["I", "love", "teaching", "and", "empowering", "people", "I", "teach", "HTML", "CSS", "JS", "React", "Python"]
  13
*/
let text = 'I love teaching and empowering people. I teach HTML, CSS, JS, React, Python.';
text = text.replace(/\.|,/gi, '');
words = text.split(' ');
console.log(words);
console.log(words.length);
/*
  In the following shopping cart add, remove, edit items

  const shoppingCart = ['Milk', 'Coffee', 'Tea', 'Honey']
  add 'Meat' in the beginning of your shopping cart if if it has not be already added
  add sugar at the end of you shopping cart if it has not been already added
  Remove 'Honey' if you are allergic to honey
  modify tea to 'Green Tea'
*/
const shoppingCart = ['Milk', 'Coffee', 'Tea', 'Honey'];
shoppingCart.unshift('Meat');
console.log(shoppingCart);
shoppingCart.push('Sugar');
console.log(shoppingCart);
j = shoppingCart.indexOf('Honey');
shoppingCart.splice(j, 1);
console.log(shoppingCart);
j = shoppingCart.indexOf('Tea');
shoppingCart[j] = 'Green Tea';
console.log(shoppingCart);
/*
In countries array check if 'Ethiopia' exists in the array if it exists print
'ETHIOPIA'. If it does not exist add to the countries list.

In the webTechs array check if Sass exists in the array if it exists print
'Sass is a CSS preprocess'. If it does not exist add Sass to the array.
*/
let c = 'Ethiopia';
if(countries.includes(c)) {
  console.log(c.toUpperCase());
} else {
  countries.push(c);
}
console.log(countries);

if(webTechs.includes('Sass')) {
  console.log('Sass is a CSS preprocess');
} else {
  webTechs.push('Sass');
}
console.log(webTechs);
/*
  Concatenate the following two variables and store it in a fullStack variable.

  const frontEnd = ['HTML', 'CSS', 'JS', 'React', 'Redux']
  const backEnd = ['Node','Express', 'MongoDB']

  console.log(fullStack)
  ["HTML", "CSS", "JS", "React", "Redux", "Node", "Express", "MongoDB"]
*/
const frontEnd = ['HTML', 'CSS', 'JS', 'React', 'Redux'];
const backEnd = ['Node','Express', 'MongoDB'];
let fullStack = frontEnd.concat(backEnd);
console.log(fullStack);
/*
  The following is a list of 10 students ages:

  const ages = [19, 22, 19, 24, 20, 25, 26, 24, 25, 24]
  Sort the array and find the min and max age
  Find the min age and the max age
  Find the median age(one middle item or two middle items divided by two)
  Find the average age(all items divided by number of items)
  Find the range of the ages(max minus min)
  Compare the value of (min - average) and (max - average), use abs() method
*/
const ages = [19, 22, 19, 24, 20, 25, 26, 24, 25, 24]
ages.sort();
let min = ages[0];
let max = ages[ages.length - 1];
let median;
j = parseInt(ages.length / 2);
median = ages.length % 2 == 0 ? (ages[j-1] + ages[j]) / 2 : ages[j];
let average = 0;
for(let i = 0; i < ages.length; i++) {
  average += ages[i];
}
average = average / ages.length;
let range = max - min;
let dev = Math.abs(Math.abs(max - average) - Math.abs(min - average));
console.log(min);
console.log(max);
console.log(median);
console.log(average);
console.log(range);
console.log(dev);
/*
  Find the middle country(ies) in the countries list
*/
let middle;
j = parseInt(countries.length / 2);
if(countries.length % 2 == 0) {
  middle = countries.slice(j -1 , j+1);
} else {
  middle = countries.slice(j, j + 1);
}
console.log(middle);

/*
  Divide the countries list into two equal lists if it is even.
  If countries array is not even one more country for the first half.
*/
j = countries.length % 2 == 0 ?
  parseInt(countries.length / 2) :
  parseInt(countries.length / 2) + 1; 
firstArr = countries.slice(0, j);
secondArr = countries.slice(j, countries.length);
console.log(firstArr);
console.log(secondArr);

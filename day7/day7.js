// day7.js
const GRAVITY = 9.81
/*
  Declare a function fullName and it print out your full name.
*/
// function fullName() {
//   console.log('Jon Fowler');
// }
// fullName();
/*
  Declare a function fullName and now it takes firstName,
  lastName as a parameter and it returns your full - name.
*/
function fullName(firstName, lastName) {
  return `${firstName} ${lastName}`;
}
console.log(fullName('Jon', 'Fowler'));
/*
  Declare a function addNumbers and it takes two two parameters
  and it returns sum.
*/
function addNumbers(n1, n2) {
  return n1 + n2;
}
console.log(2, 3);
/*
  An area of a rectangle is calculated as follows: area = length x width.
  Write a function which calculates areaOfRectangle.
*/
function areaOfRectangle(l, w) {
  return l * w;
}
console.log(areaOfRectangle(2, 3));
/*
  A perimeter of a rectangle is calculated as follows:
  perimeter= 2x(length + width).
  Write a function which calculates perimeterOfRectangle.
*/
function perimeterOfRectangle(l, w) {
  return 2 * (l + w);
};
console.log(perimeterOfRectangle(2, 3));
/*
  A volume of a rectangular prism is calculated as follows:
  volume = length x width x height.
  Write a function which calculates volumeOfRectPrism.
*/
function volumeOfRectPrism(l, w, h) {
  return l * w * h;
}
console.log(volumeOfRectPrism(2, 3, 4));
/*
  Area of a circle is calculated as follows: area = π x r x r.
  Write a function which calculates areaOfCircle
*/
function areaOfCircle(r) {
  return Math.PI * r * r;
}
console.log(areaOfCircle(3));
/*
  Circumference of a circle is calculated as follows: circumference = 2πr.
  Write a function which calculates circumOfCircle
*/
function circumOfCircle(r) {
  return 2 * Math.PI * r;
}
console.log(circumOfCircle(3));
/*
  Density of a substance is calculated as follows:density= mass/volume.
  Write a function which calculates density.
*/
function density(m, v) {
  return m / v;
}
console.log(density(3, 2));
/*
  Speed is calculated by dividing the total distance covered by a moving object
  divided by the total amount of time taken. Write a function which calculates
  a speed of a moving object, speed.
*/
function speed(d, t) {
  return d / t;
}
console.log(speed(10, 3));
/*
  Weight of a substance is calculated as follows: weight = mass x gravity.
  Write a function which calculates weight.
*/
function weight(m) {
  return m * GRAVITY;
}
console.log(weight(20));
/*
  Temperature in oC can be converted to oF using this formula:
  oF = (oC x 9/5) + 32.
  Write a function which convert oC to oF convertCelciusToFahrenheit.
*/
function convertCelciusToFahrenheit(c) {
  return (c * 9 / 5) + 32;
}
console.log(convertCelciusToFahrenheit(27));
/*
  Body mass index(BMI) is calculated as follows:
  bmi = weight in Kg / (height x height) in m2.
  Write a function which calculates bmi. BMI is used to broadly define
  different weight groups in adults 20 years old or older. Check if a person is
  underweight, normal, overweight or obese based the information given below.

  The same groups apply to both men and women.
  Underweight: BMI is less than 18.5
  Normal weight: BMI is 18.5 to 24.9
  Overweight: BMI is 25 to 29.9
  Obese: BMI is 30 or more
*/
function bmi(w, h) {
  let bmi = w / (h * h);
  if(bmi < 18.5) {
    return 'Underweight';
  } else if(bmi >= 18.5 && bmi < 25) {
    return 'Normal weight';
  } else if(bmi >= 25 && bmi < 30) {
    return 'Overweight';
  } else if(bmi >= 30) {
    return 'Obese';
  } else {
    return 'Invalid parameters';
  }
}
console.log(bmi(150, 1.8));
/*
  Write a function called checkSeason,
  it takes a month parameter and returns the season:
  Autumn, Winter, Spring or Summer.
*/
function checkSeason(month) {
  month = month.toLowerCase();
  if(month == 'december' || month == 'january' || month == 'february') {
    return 'Winter';
  } else if(month == 'march' || month == 'april' || month == 'may') {
    return 'Spring';
  } else if(month == 'june' || month == 'july' || month == 'august') {
    return 'Summer';
  } else if(month == 'september' || month == 'october' || month == 'november') {
    return 'Fall';
  } else {
    return 'Invalid month';
  }
}
console.log(checkSeason('April'));
/*
  Math.max returns its largest argument. Write a function findMax that takes three arguments and returns their maximum with out using Math.max method.

  console.log(findMax(0, 10, 5))
  10
  console.log(findMax(0, -10, -2))
  0
*/
function findMax(n1, n2, n3) {
  let n = n1 > n2 ? n1 : n2;
  n = n > n3 ? n : n3;
  return n;
}
console.log(findMax(0, 10, 5));
console.log(findMax(0, -10, -2));
/*
  Linear equation is calculated as follows: ax + by + c = 0.
  Write a function which calculates value of a linear equation, solveLinEquation
*/
function solveLinEquation(a, b, c, x) {
  return -1 * ((a * x) + c) / b;
}
console.log(solveLinEquation(1, 2, 3, 0));
/*
  Quadratic equation is calculated as follows: ax2 + bx + c = 0.
  Write a function which calculates value or values of a
  quadratic equation, solveQuadEquation.

  console.log(solveQuadratic()) // {0}
  console.log(solveQuadratic(1, 4, 4)) // {-2}
  console.log(solveQuadratic(1, -1, -2)) // {2, -1}
  console.log(solveQuadratic(1, 7, 12)) // {-3, -4}
  console.log(solveQuadratic(1, 0, -4)) //{2, -2}
  console.log(solveQuadratic(1, -1, 0)) //{1, 0}
*/
function solveQuadratic(a, b, c) {
  let output = [];
  a = typeof a == 'number' ? a : 0;
  b = typeof b == 'number' ? b : 0;
  c = typeof c == 'number' ? c : 0;
  if(a == 0 && b == 0 && c == 0) {
    output = [0];
  } else {
    x1 = (-1*b + Math.sqrt(b ** 2 - 4 * a *c)) / (2 * a);
    x2 = (-1*b - Math.sqrt(b ** 2 - 4 * a *c)) / (2 * a);
    output.push(x1);
    if(x2 != x1) {
      output.push(x2);
    }
  }
  return output;
}
console.log(solveQuadratic()) // {0}
console.log(solveQuadratic(1, 4, 4)) // {-2}
console.log(solveQuadratic(1, -1, -2)) // {2, -1}
console.log(solveQuadratic(1, 7, 12)) // {-3, -4}
console.log(solveQuadratic(1, 0, -4)) //{2, -2}
console.log(solveQuadratic(1, -1, 0)) //{1, 0}
/*
  Declare a function name printArray.
  It takes array as a parameter and it prints out each value of the array.
*/
function printArray(arr) {
  for(const a of arr) {
    console.log(a);
  }
}
printArray([0,1,2,3,4,5]);
/*
  Write a function name showDateTime which shows time in this format:
  08/01/2020 04:08 using the Date object.
  showDateTime()
  08/01/2020 04:08

  This would be easier using Moment.js: https://momentjs.com/
*/
function showDateTime(t) {
  let date;
  if(t != undefined) {
    date = new Date(t);
  } else {
    date = new Date();
  }
  let MM = (date.getMonth()+1).toString().length < 2 ?
    `0${date.getMonth()+1}` :
    date.getMonth() + 1;
  let dd = date.getDate().toString().length < 2 ?
    `0${date.getDate()}` :
    date.getDate();
  let yyyy = date.getFullYear();
  let hh = date.getHours().toString().length < 2 ?
    `0${date.getHours()}` :
    date.getHours();
  let mm = date.getMinutes().toString().length < 2 ?
    `0${date.getMinutes()}` :
    date.getMinutes();
  return `${MM}/${dd}/${yyyy} ${hh}:${mm}`;
}
console.log(showDateTime());
/*
  Declare a function name swapValues. This function swaps value of x to y.

  swapValues(3, 4) // x => 4, y=>3
  swapValues(4, 5) // x = 5, y = 4
*/
function swapValues(x, y) {
  return `x = ${y}, y = ${x}`;
}
console.log(swapValues(4, 6));
/*
  Declare a function name reverseArray. It takes array as a parameter and it returns the reverse of the array (don't use method).

  console.log(reverseArray([1, 2, 3, 4, 5]))
  //[5, 4, 3, 2, 1]
  console.log(reverseArray(['A', 'B', 'C']))
  //['C', 'B', 'A']
*/
function reverseArray(arr) {
  let newArr = [];
  for(let i = arr.length-1; i >= 0; i--) {
    newArr.push(arr[i]);
  }
  return newArr;
}
console.log(reverseArray([1, 2, 3, 4, 5]))
//[5, 4, 3, 2, 1]
console.log(reverseArray(['A', 'B', 'C']))
//['C', 'B', 'A']
/*
  Declare a function name capitalizeArray. It takes array as a parameter and it returns the - capitalizedarray.
*/
function capitalizeArray(arr) {
  for(let i = 0; i < arr.length; i++) {
    arr[i] = `${arr[i][0].toUpperCase()}${arr[i].substr(1)}`;
  }
  return arr;
}
let array = ['blah','flarg'];
console.log(capitalizeArray(array));
/*
  Declare a function name addItem.
  It takes an item parameter and it returns an array after adding the item
*/
function addItem(arr, item) {
  arr.push(item);
  return arr;
}
console.log(addItem(array, 'malrg'));
/*
  Declare a function name removeItem.
  It takes an index parameter and it returns an array after removing an item
*/
function removeItem(arr, i) {
  return arr.filter((value, index, arr) => {
    return value != arr[i];
  });
}
console.log(removeItem(array, 1));
/*
  Declare a function name sumOfNumbers.
  It takes a number parameter and it adds all the numbers in that range.
*/
function sumOfNumbers(n1, n2) {
  n1 = parseInt(n1);
  n2 = parseInt(n2);
  if(n1 > n2) {
    let temp = n1;
    n1 = n2;
    n2 = temp;
  } else if(isNaN(n1) || isNaN(n2)) {
    return NaN;
  }
  let sum = 0;
  for(let i = n1; i <= n2; i++) {
    sum += i;
  }
  return sum;
}
console.log(sumOfNumbers(1, 51 ** 4));
/*
  Declare a function name sumOfOdds.
  It takes a number parameter and it adds all the odd numbers in that - range.
*/
function sumOfOdds(n1, n2) {
  n1 = parseInt(n1);
  n2 = parseInt(n2);
  if(n1 > n2) {
    let temp = n1;
    n1 = n2;
    n2 = temp;
  } else if(isNaN(n1) || isNaN(n2)) {
    return NaN;
  }
  let sum = 0;
  n1 = n1 % 2 == 0 ? ++n1 : n1;
  n2 = n2 % 2 == 0 ? --n2 : n2;
  for(let i = n1; i <= n2; i+=2) {
    sum += i;
  }
  return sum;
}
console.log(sumOfOdds(1, 500));
/*
  Declare a function name sumOfEven. It takes a number parameter and it adds all the even numbers in that - range.
*/
function sumOfEvens(n1, n2) {
  n1 = parseInt(n1);
  n2 = parseInt(n2);
  if(n1 > n2) {
    let temp = n1;
    n1 = n2;
    n2 = temp;
  } else if(isNaN(n1) || isNaN(n2)) {
    return NaN;
  }
  let sum = 0;
  n1 = n1 % 2 == 0 ? n1 : ++n1;
  n2 = n2 % 2 == 0 ? n2 : --n2;
  for(let i = n1; i <= n2; i+=2) {
    sum += i;
  }
  return sum;
}
console.log(sumOfEvens(1, 10));
/*
  Declare a function name evensAndOdds . It takes a positive integer as parameter and it counts number of evens and odds in the number.

  evensAndOdds(100);
  The number of odds are 50.
  The number of evens are 51.
*/
function evensAndOdds(n) {
  let evens = parseInt(n / 2) + 1;
  let odds = parseInt(n / 2);
  odds = n % 2 != 0 ? ++odds : odds;
  return `The number of odds are ${odds}. The number of evens are ${evens}`;
}
console.log(evensAndOdds(100));
/*
  Write a function which takes any number of arguments and return the sum of the arguments

  sum(1, 2, 3) // -> 6
  sum(1, 2, 3, 4) // -> 10
*/
function sum() {
  let sum = 0;
  for(const n of arguments) {
    sum += typeof n == 'number' ? n : 0;
  }
  return sum;
}
console.log(sum(1, 2, 3, 4));
/*
  Write a function which generates a randomUserIp.
*/
function randomUserIp() {
  return `${parseInt(Math.random()*255)}.${parseInt(Math.random()*255)}.${parseInt(Math.random()*255)}.${parseInt(Math.random()*255)}`;
}
console.log(randomUserIp());
/*
  Write a function which generates a randomMacAddress
  FF:FF:FF:FF:FF:FF
*/
const hex = '0123456789abcdef';
function randomMacAddress() {
  let mac = '';
  for(let i = 0; i < 12; i++) {
    let r = Math.round(Math.random()*15);
    mac = i % 2 == 0 && i != 0 ? `${mac}:${hex[r]}`: `${mac}${hex[r]}`;
  }
  return mac;
}
console.log(randomMacAddress());
/*
  Declare a function name randomHexaNumberGenerator.
  When this function is called it generates a random hexadecimal number.
  The function return the hexadecimal number.

  console.log(randomHexaNumberGenerator());
  '#ee33df'
*/
function randomHexaNumberGenerator() {
  let h = '#';
  for(let i = 0; i < 6; i++) {
    let r = Math.round(Math.random()*15);
    h = `${h}${hex[r]}`;
  }
  return h;
}
console.log(randomHexaNumberGenerator());
/*
  Declare a function name userIdGenerator. When this function is called it generates seven character id. The function return the id.

  console.log(userIdGenerator());
  41XTDbE
*/
const alphaNum = '0123456789abcdefghijklmnopqrstuvwxyz'
function userIdGenerator() {
  let uid = '';
  for(let i = 0; i < 7; i++) {
    let r = Math.round(Math.random()*15);
    let uc = Math.round(Math.random());
    uc = uc == 0 ? false : true;
    if(uc) {
      uid = `${uid}${alphaNum[r].toUpperCase()}`;
    } else {
      uid = `${uid}${alphaNum[r]}`;
    }
  }
  return uid;
}
console.log(userIdGenerator());
/*
  Modify question number n . Declare a function name userIdGeneratedByUser.
  It doesn’t take any parameter but it takes two inputs using prompt().
  One of the input is the number of characters and the second input is the
  number of ids which are supposed to be generated.

  userIdGeneratedByUser()
  'kcsy2
  SMFYb
  bWmeq
  ZXOYh
  2Rgxf
  '
  userIdGeneratedByUser()
  '1GCSgPLMaBAVQZ26
  YD7eFwNQKNs7qXaT
  ycArC5yrRupyG00S
  UbGxOFI7UXSWAyKN
  dIV0SSUTgAdKwStr
  '
*/
// function userIdGeneratedByUser() {
//   let nChar = prompt('Enter number of characters in a user ID:');
//   let nIds = prompt('Enter number of user IDs to generate:');
//   let uidArr = []
//   for(let j = 0; j < nIds; j++) {
//     let uid = '';
//     for(let i = 0; i < nChar; i++) {
//       let r = Math.round(Math.random()*15);
//       let uc = Math.round(Math.random());
//       uc = uc == 0 ? false : true;
//       if(uc) {
//         uid = `${uid}${alphaNum[r].toUpperCase()}`;
//       } else {
//         uid = `${uid}${alphaNum[r]}`;
//       }
//
//     }
//     uidArr.push(uid);
//   }
//   return uidArr;
// }
// console.log(userIdGeneratedByUser());
/*
  Write a function name rgbColorGenerator and it generates rgb colors.

  rgbColorGenerator()
  rgb(125,244,255)
*/
function rgbColorGenerator() {
  return [
    Math.round(Math.random()*255),
    Math.round(Math.random()*255),
    Math.round(Math.random()*255)
  ];
}
console.log(rgbColorGenerator());
/*
  Write a function arrayOfHexaColors which return any number of hexadecimal colors in an array.
*/
function arrayOfHexaColors(n) {
  n = parseInt(n);
  n = isNaN(n) ? 1 : n;
  let arr = []
  for(let i = 0; i < n; i++) {
    arr.push(randomHexaNumberGenerator());
  }
  return arr;
}
console.log(arrayOfHexaColors(10));
/*
  Write a function arrayOfRgbColors which return any number of RGB colors in an array.
*/
function arrayOfRgbColors(n) {
  n = parseInt(n);
  n = isNaN(n) ? 1 : n;
  let arr = []
  for(let i = 0; i < n; i++) {
    arr.push(rgbColorGenerator());
  }
  return arr;
}
console.log(arrayOfRgbColors(10));
/*
  Write a function convertHexaToRgb which converts hexa color to rgb and it returns an rgb color.
*/
function convertHexaToRgb(hexa) {
  let r = parseInt(`0x${hexa.substr(1, 2)}`);
  let g = parseInt(`0x${hexa.substr(3, 2)}`);
  let b = parseInt(`0x${hexa.substr(5, 2)}`);
  return([r,g,b]);
}
console.log(convertHexaToRgb('#7fffff'));
/*
  Write a function convertRgbToHexa which converts rgb to hexa color and it returns an hexa color.
*/
function convertRgbToHexa(r, g, b) {
  r = Number(r).toString(16);
  g = Number(g).toString(16);
  b = Number(b).toString(16);
  return `#${r}${g}${b}`;
}
console.log(convertRgbToHexa(127, 44, 23));
/*
  Write a function generateColors which
  can generate any number of hexa or rgb colors.

  console.log(generateColors('hexa', 3)) // ['#a3e12f', '#03ed55', '#eb3d2b']
  console.log(generateColors('hexa', 1)) // '#b334ef'
  console.log(generateColors('rgb', 3)) // ['rgb(5, 55, 175)', 'rgb(50, 105, 100)', 'rgb(15, 26, 80)']
  console.log(generateColors('rgb', 1)) // 'rgb(33,79, 176)'
*/
function generateColors(c, n) {
  n = parseInt(n);
  n = n >= 1 ? n : 1;
  if(c == 'hexa') {
    if(n > 1) {
      let arr = [];
      for(let i = 0; i < n; i++) {
        arr.push(randomHexaNumberGenerator());
      }
      return arr;
    } else {
      return randomHexaNumberGenerator();
    }
  } else if(c == 'rgb') {
    if(n > 1) {
      let arr = []
      for(let i = 0; i < n; i++) {
        arr.push(rgbColorGenerator());
      }
      return arr;
    } else {
      return rgbColorGenerator();
    }
  }
  return null;
}
console.log(generateColors('hexa', 3)) // ['#a3e12f', '#03ed55', '#eb3d2b']
console.log(generateColors('hexa', 1)) // '#b334ef'
console.log(generateColors('rgb', 3)) // ['rgb(5, 55, 175)', 'rgb(50, 105, 100)', 'rgb(15, 26, 80)']
console.log(generateColors('rgb', 1)) // 'rgb(33,79, 176)'
/*
  Call your function shuffleArray, it takes an array as a parameter and it
  returns a shuffled array
*/
function shuffleArray(arr) {
  tempLen = arr.length * 10;
  shuffledArr = Array(tempLen);
  for(let i = 0; i < arr.length; i++) {
    let r;
    do {
      r = Math.round(Math.random() * tempLen);
    } while(shuffledArr[r] != undefined);
    shuffledArr[r] = arr[i];
  }
  return shuffledArr.filter((value, index, arr) => {
    return value != undefined;
  });
}
console.log(shuffleArray([1,2,3,4,10,122,34,56,23,4,3,2,3,4,2,3,4,2,3,4,5,6,7,8]));
/*
  Call your function factorial, it takes a whole number as a parameter and it
  return a factorial of the number
*/
function factorial(n) {
  n = parseInt(n);
  let f = 1;
  for(let i = 1; i <= n; i++) {
    f *= i;
  }
  return f;
}
console.log(factorial(5));
/*
  Call your function isEmpty, it takes a parameter and it checks if it is empty
  or not
*/
function isEmpty(arr) {
  return arr.length == 0 ? true : false;
}
console.log(isEmpty([]));
/*
  Call your function sum, it takes any number of arguments and it returns
  the sum.
*/
function sum() {
  let sum = 0;
  for(const n of arguments) {
    sum += typeof n == 'number' ? n : 0;
  }
  return sum;
}
/*
  Write a function called sumOfArrayItems, it takes an array parameter
  and return the sum of all the items. Check if all the array items are number
  types. If not give return reasonable feedback.
*/
function sumOfArrayItems(arr) {
  let sum = 0;
  for(const n of arr) {
    if(typeof n != 'number') {
      return 'NaN found in array';
    }
    sum += n;
  }
  return sum;
}
console.log(sumOfArrayItems([1,2,3,4,5]));
/*
  Write a function called average, it takes an array parameter and returns
  the average of the items. Check if all the array items are number types.
  If not give return reasonable feedback.
*/
function average(arr) {
  let sum = sumOfArrayItems(arr);
  if(typeof sum != 'number') {
    return sum;
  }
  return sum / arr.length;
}
console.log(average([1,2,3,4,5,6,123]));
/*
  Write a function called modifyArray takes array as parameter and modifies
  the fifth item of the array and return the array. If the array length is
  less than five it return 'item not found'.

  console.log(modifyArray(['Avocado', 'Tomato', 'Potato','Mango', 'Lemon','Carrot']);
  // →['Avocado', 'Tomato', 'Potato','Mango', 'LEMON', 'Carrot']
  console.log(modifyArray(['Google', 'Facebook','Apple', 'Amazon','Microsoft',  'IBM']);
  // →['Google', 'Facebook','Apple', 'Amazon','MICROSOFT',  'IBM']
  console.log(modifyArray(['Google', 'Facebook','Apple', 'Amazon']);
  // →'Not Found'
*/
function modifyArray(arr) {
  if(arr.length < 5) {
    return 'Not found';
  }
  arr[4] = arr[4].toUpperCase();
  return arr;
}
console.log(modifyArray(['taco','burrito','chips','salsa','tortilla']));
/*
  Write a function called isPrime, which checks if a number is prime number.
*/
function isPrime(n) {
  n = parseInt(n);
  if(isNaN(n)) {
    return false;
  }
  let prime = true;
  for(let i = 2; i < n - 1; i++) {
    if(n % i == 0) {
      prime = false;
    }
  }
  return prime;
}
console.log(isPrime(58300001)); // true
/*
  Write a functions which checks if all items are unique in the array.
*/
function isUniqueArray(arr) {
  for(let i = 0; i < arr.length; i++) {
    let l = arr.filter((item) => {
      return item == arr[i];
    }).length;
    if(l > 1) {
      return false;
    }
  }
  return true;
}
console.log(isUniqueArray([1,2,3,4,5,3]));
/*
  Write a function which checks if all the items of the array are the same
  data type.
*/
function isSameDataType(arr) {
  let dataType = typeof arr[0];
  let filterArr = arr.filter((item) => {
    return typeof item == dataType;
  });
  if(arr.length == filterArr.length) {
    return true;
  }
  return false;
}
console.log(isSameDataType([1,2,3,4,5,]));
console.log(isSameDataType([1,2,3,4,5,'taco']));
/*
  JavaScript variable name does not support special characters or symbols
  except $ or _. Write a function isValidVariable which check if a
  variable is valid or invalid variable.

  This should probably check against a reserved word list as well.
*/
function isValidVariable(v) {
  return v[0].match(/[a-z]|$|_/gi) != '';
}
console.log(isValidVariable('temp'));
/*
  Write a function which returns array of seven random numbers in a range
  of 0-9. All the numbers must be unique.

  sevenRandomNumbers()[(1, 4, 5, 7, 9, 8, 0)]
*/
function sevenRandomNumbers() {
  let arr = [];
  for(let i = 0; i < 7; i++) {
    let r;
    do {
      r = Math.round(Math.random() * 7);
    } while(arr.includes(r));
    arr.push(r);
  }
  return arr;
}
console.log(sevenRandomNumbers());
/*
  Write a function called reverseCountries, it takes countries array and
  first it copy the array and returns the reverse of the original array;
*/
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
function reverseCountries(countries) {
  let c = countries.slice();
  let reverse = [];
  for(let i = c.length-1; i >= 0; i--) {
    reverse.push(c[i]);
  }
  return reverse;
}
console.log(reverseCountries(countries));

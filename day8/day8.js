// day8.js - Scope
/*
  Exercises: Level 1
*/
/*
  Create an empty object called dog
*/
const dog = {};
/*
  Print the the dog object on the console
*/
console.log(dog);
/*
  Add name, legs, color, age and bark properties for the dog object.
  The bark property is a method which return woof woof
*/
dog.name = 'Fido';
dog.legs = 4;
dog.color = 'brown';
dog.age = 5;
dog.bark = function () {
  return 'woof woof';
};
console.log(dog);
/*
  Get name, legs, color, age and bark value from the dog object
*/
console.log(dog.name);
console.log(dog.legs);
console.log(dog.color);
console.log(dog.age);
console.log(dog.bark());
/*
  Set new properties the dog object: breed, getDogInfo
*/
dog.breed = 'Labrador';
dog.getDogInfo = function() {
  return `${this.name} is a ${this.age} year old ${this.color} ${this.breed}.`;
};
console.log(dog.getDogInfo());

/*
  Exercises: Level 2
*/
const users = {
  Alex: {
    email: 'alex@alex.com',
    skills: ['HTML', 'CSS', 'JavaScript'],
    age: 20,
    isLoggedIn: false,
    points: 30
  },
  Asab: {
    email: 'asab@asab.com',
    skills: ['HTML', 'CSS', 'JavaScript', 'Redux', 'MongoDB', 'Express', 'React', 'Node'],
    age: 25,
    isLoggedIn: false,
    points: 50
  },
  Brook: {
    email: 'daniel@daniel.com',
    skills: ['HTML', 'CSS', 'JavaScript', 'React', 'Redux'],
    age: 30,
    isLoggedIn: true,
    points: 50
  },
  Daniel: {
    email: 'daniel@alex.com',
    skills: ['HTML', 'CSS', 'JavaScript', 'Python'],
    age: 20,
    isLoggedIn: false,
    points: 40
  },
  John: {
    email: 'john@john.com',
    skills: ['HTML', 'CSS', 'JavaScript', 'React', 'Redux', 'Node.js'],
    age: 20,
    isLoggedIn: true,
    points: 50
  },
  Thomas: {
    email: 'thomas@thomas.com',
    skills: ['HTML', 'CSS', 'JavaScript', 'React'],
    age: 20,
    isLoggedIn: false,
    points: 40
  },
  Paul: {
    email: 'paul@paul.com',
    skills: ['HTML', 'CSS', 'JavaScript', 'MongoDB', 'Express', 'React', 'Node'],
    age: 20,
    isLoggedIn: false,
    points: 40
  }
}
/*
  Find the person who has the most skills in the users object.
*/
let n = 0;
let usersArray = Object.entries(users);
console.log(usersArray);
let userNames = Object.keys(users);
let mostSkilledUser;
for(let i = 0; i < usersArray.length; i++) {
  if(usersArray[i][1].skills.length > n) {
    n = usersArray[i][1].skills.length;
    mostSkilledUser = usersArray[i][0];
  }
}
console.log(mostSkilledUser);
/*
  Count logged in users,count users having greater than equal to
  50 points from the users object.
*/
n = 0;
for(const user of usersArray) {
  n = user[1].points >= 50 && user[1].isLoggedIn ? ++n : n;
}
console.log(n);
/*
  Find people who are MERN stack developer from the users object
*/
mernStackDevelopers = [];
for(const user of usersArray) {
  let skills = user[1].skills;
  if(
    skills.includes('MongoDB') &&
    skills.includes('Express') &&
    skills.includes('React') &&
    skills.includes('Node')
  ) {
    mernStackDevelopers.push(user[0]);
  }
}
console.log(mernStackDevelopers);
/*
  Set your name in the users object without modifying the original users object
*/
let jon = {
  Jon: {
    email: 'jonfowler@protonmail.com',
    skills: ['HTML','CSS','JavaScript','Node','Python'],
    age: 32,
    isLoggedIn: false,
    points: 0
  }
};
let usersCopy = Object.assign({}, users, jon);
console.log(usersCopy);
/*
  Get all keys or properties of users object
*/
let usersKeys = Object.keys(users);
console.log(usersKeys);
/*
  Get all the values of users object
*/
let usersValues = Object.values(users);
console.log(usersValues);
/*
  Use the countries object to print a country name, capital, populations and
  languages.
*/
let countries = [
  {
    name: 'USA',
    capital: 'Washington, D.C.',
    population: 327000000,
    language: ['English','Spanish']
  }
];
console.log(countries[0].name);
console.log(countries[0].capital);
console.log(countries[0].population);
console.log(countries[0].language);

/*
  Exercises: Level 3
*/
/*
  Create an object literal called personAccount. It has firstName, lastName,
  incomes, expenses properties and it has totalIncome, totalExpense,
  accountInfo,addIncome, addExpense and accountBalance methods.
  Incomes is a set of incomes and its description and expenses is a set of
  incomes and its description.
*/
const personAccount = {
  firstName: 'Greg',
  lastName: 'Finkle',
  incomes: [
    { income: 95000, description: 'yearly salary' },
    { income: 1200, description: 'march freelance' },
    { income: 1500, description: 'june freelance' },
    { income: 3500, description: 'project x' }
  ],
  expenses: [
    { expense: 40000, description: 'house' },
    { expense: 10000, description: 'car' },
    { expense: 17000, description: 'student loans' }
  ],
  totalIncome: function() {
    let sum = 0;
    for(const i of this.incomes) {
      sum += i.income;
    }
    return sum;
  },
  totalExpense: function() {
    let sum = 0;
    for(const e of this.expenses) {
      sum += e.expense;
    }
    return sum;
  },
  accountInfo: function () {
    return `${this.firstName} ${this.lastName[0]}. has a total income of $${this.totalIncome()} and total expenses of $${this.totalExpense()} for an account balance of $${this.accountBalance()}.`;
  },
  addIncome: function(n, d) {
    return this.incomes.push({ income: n, description: d });
  },
  addExpense: function(n, d) {
    return this.expenses.push({ expense: n, description: d });
  },
  accountBalance: function() {
    return this.totalIncome() - this.totalExpense();
  }
};
console.log(personAccount);
console.log(personAccount.totalIncome());
console.log(personAccount.totalExpense());
console.log(personAccount.accountInfo());
console.log(personAccount.addIncome(50000, 'inheritence'));
console.log(personAccount.addExpense(43000, 'wedding'));
console.log(personAccount.accountInfo());

/*
  Imagine you are getting the below users collection from a MongoDB database.
  a. Create a function called signUp which allows user to add to the collection.
  If user exists, inform the user that he has already an account.
  b. Create a function called signIn which allows user to sign in to the
  application
*/
const dbUsers = [
  {
    _id: 'ab12ex',
    username: 'Alex',
    email: 'alex@alex.com',
    password: '123123',
    createdAt:'08/01/2020 9:00 AM',
    isLoggedIn: false
  },
  {
    _id: 'fg12cy',
    username: 'Asab',
    email: 'asab@asab.com',
    password: '123456',
    createdAt:'08/01/2020 9:30 AM',
    isLoggedIn: true
  },
  {
    _id: 'zwf8md',
    username: 'Brook',
    email: 'brook@brook.com',
    password: '123111',
    createdAt:'08/01/2020 9:45 AM',
    isLoggedIn: true
  },
  {
    _id: 'eefamr',
    username: 'Martha',
    email: 'martha@martha.com',
    password: '123222',
    createdAt:'08/01/2020 9:50 AM',
    isLoggedIn: false
  },
  {
    _id: 'ghderc',
    username: 'Thomas',
    email: 'thomas@thomas.com',
    password: '123333',
    createdAt:'08/01/2020 10:00 AM',
    isLoggedIn: false
  }
];

usersCopy = dbUsers.slice();

function signUp(username, email, password) {
  for(const obj of usersCopy) {
    if(obj.username == username) {
      return `${username} already exists`;
    }
  }
  let newUser = {
    _id: userIdGenerator(),
    username: username,
    email: email,
    password: password,
    createdAt: showDateTime(),
    isLoggedIn: false
  };
  usersCopy.push(newUser);
  return newUser;
}
console.log(signUp('thefowlj', 'jonfowler@protonmail.com', '12345'));
console.log(usersCopy);

function signIn(username, password) {
  for(const obj of usersCopy) {
    if(obj.username == username && obj.password == password) {
      obj.isLoggedIn = true;
      return true;
    }
  }
  return false;
}
console.log(signIn('thefowlj', '12345'));
console.log(usersCopy);

function userIdGenerator() {
  const alphaNum = '0123456789abcdefghijklmnopqrstuvwxyz';
  let uid = '';
  for(let i = 0; i < 6; i++) {
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
  let h = date.getHours();
  let period = h < 12 ? 'AM' : 'PM';
  h = h == 0 ? 12 : h;
  let hh = h.toString().length < 2 ?
    `0${h}` :
    date.getHours();
  let mm = date.getMinutes().toString().length < 2 ?
    `0${date.getMinutes()}` :
    date.getMinutes();
  return `${MM}/${dd}/${yyyy} ${hh}:${mm} ${period}`;
}

/*
  The products array has three elements and each of them has six properties.
  a. Create a function called rateProduct which rates the product b.
  Create a function called averageRating which calculate the average rating
  of a product
*/
const products = [
  {
    _id: 'eedfcf',
    name: 'mobile phone',
    description: 'Huawei Honor',
    price: 200,
    ratings: [
      { userId: 'fg12cy', rate: 5 },
      { userId: 'zwf8md', rate: 4.5 }
    ],
    likes: []
  },
  {
    _id: 'aegfal',
    name: 'Laptop',
    description: 'MacPro: System Darwin',
    price: 2500,
    ratings: [],
    likes: ['fg12cy']
  },
  {
    _id: 'hedfcg',
    name: 'TV',
    description: 'Smart TV:Procaster',
    price: 400,
    ratings: [{ userId: 'fg12cy', rate: 5 }],
    likes: ['fg12cy']
  }
];

function rateProduct(userId, productId, rating) {
  let userExists = false;
  for(const obj of usersCopy) {
    if(obj._id == userId) {
      userExists = true;
    }
  }
  if(!userExists) { return false; }
  for(const obj of products) {
    if(obj._id == productId) {
      let ratingObj = { userId: userId, rate: rating };
      obj.ratings.push(ratingObj);
      return ratingObj;
    }
  }
}
console.log(rateProduct('eefamr', 'hedfcg', 4));
console.log(products);

function averageRating(productId) {
  for(const obj of products) {
    if(obj._id == productId) {
      let avg = 0;
      for(const r of obj.ratings) {
        avg += r.rate;
      }
      avg /= obj.ratings.length;
      return avg;
    }
  }
  return -1;
}
console.log(averageRating('hedfcg'));

/*
  Create a function called likeProduct.
  This function will helps to like to the product if it is not liked and
  remove like if it was liked.
*/
function likeProduct(userId, productId) {
  let userExists = false;
  for(const obj of usersCopy) {
    if(obj._id == userId) {
      userExists = true;
    }
  }
  if(!userExists) { return false; }
  for(const obj of products) {
    if(obj._id == productId) {
      if(!obj.likes.includes(userId)) {
        obj.likes.push(userId);
        return true;
      } else {
        obj.likes = obj.likes.filter((item) => {
          return item != userId;
        });
      }
    }
  }
  return false;
}
console.log(likeProduct('ghderc','hedfcg'));
console.log(likeProduct('ghderc','hedfcg'));
console.log(products);

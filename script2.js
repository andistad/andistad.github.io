
let myVariable = 5;

console.log(myVariable);
console.log("Hello world!");
let colors = ['orange', 'blue', 'red'];
colors.push('green');
colors.forEach(oneColor => {
  if (oneColor === 'orange') {
    console.log('great')
  }
  else {
    console.log('not great')
  }
});

// exercise01
console.log('Hello world!');
console.log('Hello Andrea');

// exercise02
let daysCamp = 4;
let hoursCoding = 9;
let allHoursCoding = daysCamp * hoursCoding;
console.log(`Days of coding ${daysCamp} and hours of coding ${hoursCoding}!`);
console.log(`I spend ${allHoursCoding} of conding!`);

// switch of the values
let a = 4;
let b = 1;
let c = a + b;
a = b;
b = c - a;

console.log(`a = ${a}, b = ${b}`);

let d = a;
a = b;
b = d;
console.log(`a = ${a}, b = ${b}`);

// exercise03
/* Write "positive" if the number is above zero
Write "zero" if the number is zero
Write "negative" if the number is below zero
Use the following code snippet */
let number = 10;

if (number > 0) {
  console.log ('positive');
}
else if (number === 0) {
  console.log ('zero');
} else {
  console.log ('negative');
}

// exercise04
let neighbours = ['Michal', 'Jirka', 'Jana', 'Andrea'];
neighbours.forEach (neighbour => {console.log (neighbour)});
neighbours.forEach (neighbour => {console.log ('Ahoj, ' + neighbour)});
neighbours.push('Petra');
console.log (neighbours);
console.log (`Ahoj, ${neighbours}`);
console.log (`Ahoj, ${neighbours [3]}`);

//Change the code, so it only greets, if it's not you (why greet yourself? :)

neighbours.forEach (neighbour => {
  if (neighbour !== 'Andrea')
  {
    console.log(`Ahoj, ` + neighbour); 
  }
});

/* Change the code, so it writes What a clever person YourName it is but keep the greeting of others*/

 // Create an array of numbers starting from 1 to 15

let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];
console.log(numbers); 
numbers.forEach (number => {
  if (number % 2 == 0) {
  console.log(`even:` + number); 
} else {
  console.log(`odd:` + number);
}
});

numbers.forEach (number => {
  if (number % 2 == 0) {
  console.log(`odd:` + number);
}
});

// But for multiples of three print 'Fizz' instead of the number
numbers.forEach (number => {
  if (number % 3 == 0) {
  console.log(`Fizz:` + number);
}
});

// and for the multiples of five print 'Buzz'.
numbers.forEach (number => {
  if (number % 5 == 0) {
  console.log(`Buzz:` + number);
}
});
// For numbers which are multiples of both three and five print 'FizzBuzz'.
numbers.forEach (number => {
  if ((number % 3 == 0) && (number % 5 == 0))  {
  console.log(`FizzBuzz:` + number);
}
});
//Add some more numbers to see if it is working right: 25, 26, 27, 28, 29, 30
numbers.push (25, 26, 27, 28, 29, 30);
console.log(numbers); 
numbers.forEach (number => {
  if ((number % 3 == 0) && (number % 5 == 0))  {
  console.log(`FizzBuzz:` + number);
}
});

//Create an object for the details of your favourite book (author, title, year)
let book1 = { name: 'Andrea', title: 'Praha', year: '2018'};
console.log(book1);
console.log(book1['name']);
console.log(book1['title']);
console.log(book1['year']);

//Create two more book objects (with the same details)
let book2 = { name: 'Jana', title: 'Londyn', year: '2019'};
let book3 = { name: 'Alena', title: 'Brno', year: '2010'};
//Put all of them into an array

let Books = [book1, book2, book3] ;
console.log(Books);

// Write all of them to the console using a forEach
Books.forEach (itemBooks => {
  console.log(Books)
});
 // Write out the title for each   
Books.forEach(book => {
  console.log(book['title'])
});
// Write out I recommend reading TitleOfBook if the year is fresher than 2010
Books.forEach (book => {
  if (book['year'] > 2010) {
    console.log (`I recommend reading ${book['title']}.`)
  } else {
    console.log(`You've probably already read ${book['title']}.`);
  }
});
//Write out You've probably already read TitleOfBook otherwise

//Create an array of numbers: 3, 2, 5, 1, 8


//Try to arrange them in ascending order programatically

let numbers2 = [ 3, 2, 5, 1, 8];
console.log(numbers2.sort(function(a, b){return a-b}));



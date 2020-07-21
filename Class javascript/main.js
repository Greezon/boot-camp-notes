// alert("hello World")

// 
// 
// console.log('Hello World')
// console.error('this and error')
// console.warn('this is a warning')


// --Methods-- MDN console Methods
// console.assert()
// console.clear()
// console.count()
// console.countReset()
// console.debug()
// console.dir()
// console.dirxml()
// console.error()
// console.exception()
// console.group()
// console.groupCollapsed()
// console.groupEnd()
// console.info()
// console.log()
// console.profile()
// console.profileEnd()
// console.table()
// console.time()
// console.timeEnd()
// console.timeLog()
// console.timeStamp()
// console.trace()
// console.warn()

// var, let, const

// // var is globally scoped let and const have a block level scope
// // let you can reassign settings
// let age = 30;
// // const = 30; use const if something does not chage. use var if something does change.
// age = 31;
// console.log(age)

// good time to use let
// let score;
// score = 10;
// const score; cant initilize you have to add a value.
// score = 10; spits out error.
// console.log(score)

// data types
    // primitive datatypes data is directly assigned to memory
// strings
// numbers
// boolean
// null
// undefined
// symbol

// const name = 'john'; // string
// const age = 30;//  Number
// const rating = 4.5; // decimil just a number
// const isCool = true;//  Boolean
// const x = null; // empty or a variable with nothing in it
// const y = undefined;//  we can specifically define undefined
// let z; //  undefined as well

// console.log(typeof) // you can  use this to see the different type of variables.

// One thing to note, JS null is object is an error
// typeof object return to null is an error

// STRINGS
// const name = 'john'; // string
// const age = 30;//  Number

// contcatenation
    // console.log('My name is name and I am age')
    // This just spits out what is in the quotes

    // This is the old way of doing things.
    // console.log('my name is ' + name + ' and I am ' + age);

// Template String
    // console.log(`My name is ${name} and I am ${age}`)
// we can assign to variable
    // const hello = `My name is ${name} and I am ${age}`
// console.log(hello)

//========================================
// String properties and methods.
// const s = 'Hello world !';
// const d = 'technology, computers, mice, calculator, ';
// console.log(s.length)
// length property, property does not have parenthese
// If it has perenthases it is a method.
// logs teh actual character length of the variable

// methods need Perentheses,
// toUpperCase is a method, it needs parenthases
// A method is a function associated with an object


// console.log(s.toUpperCase())
// console.log(s.toLowerCase())
// console.log(s.substring(0, 5)) //takes two indexes, start at 0 and ends at 5  
// console.log(s.substring(0, 5).toUpperCase()) //
// console.log(s.split('')) //Splits by letter
// console.log(s.split(' '))//Splits at the space 
// console.log(d.split(', '))//Splits at , 
//========================================

//========================================
// Arrays - Variables that hold multiple values

// const numbers = new Array(1,2,3,4,5); 
    //if you see new and something after it is known as
    // new and something after it is a
    //constructor

  // Array with brackets
// const fruits = ['apples', 'oranges', 'pears']
// // console.log(fruits);

// // In javascript you can have multiple datatypes within the array
// // You can have Numbers Booleans or whatever

// // console.log(fruits[1]) //arrays are 0 based spits out oranges
// fruits[3] = 'grapes'; //needs quotes
// console.log(fruits)

// // adding to the end. with push
// fruits.push('mangoes')
// console.log(fruits)

// // adding to beginning with unshift
// fruits.unshift('strawberries')
// console.log(fruits)

// // Removes last item in the array
// fruits.pop()
// console.log(fruits)

// //check to see if it is an array
// console.log(Array.isArray(fruits))

// //check to see if it is a string
// console.log(Array.isArray('hello'))

// //If you want an index of a certain value
// console.log(fruits.indexOf('oranges'))

//========================================


//========================================
// Object Literals
// key value pairs

// // // const person ={
// // //     firstName: 'John',
// // //     lastName: 'Doe',
// // //     age: 30,
// // //     hobbies: ['music', 'movies', 'sports'], //needs comma
// // //     address: {
// // //         street: '50 main st',
// // //         city: 'Boston',
// // //         state: 'MA'
// // //     }
// // // }
// // // 
// // // //If you want to access a single value use dot sintax
// // // console.log(person.firstName)
// // // //You can log more than one thing, with comma.
// // // console.log(person.lastName, person.firstName)
// // // //getting just the movie.
// // // console.log(person.hobbies[1])
// // // //Getting just the city
// // // console.log(person.address.city)
// // // 
// // // 
// // // 
// // // //Destructuring
// // // //const { firstName, lastName} = person;
// // // 
// // // //console.log(firstName);
// // // 
// // // //Think of this as pulling this out of the person object
// // // 
// // // //Destructering is kind of advanced
// // // // const { firstName, lastName, address: { city }} = person;
// // // 
// // // // console.log(city)
// // // 
// // // //Adding Properities
// // // person.email = 'ian@gmail.com'
// // // 
// // // console.log(person)
// // // 
// // // 
//========================================

//========================================
// // // 
// // // //arrays of object
// // // 
// // // const todos = [ //arrays use brackets
// // //     { //values in the array to be an object
// // //         id: 1,
// // //         text: 'take out trash',
// // //         isCompleted: true,// notice comma
// // //     },
// // //     { //values in the array to be an object
// // //         id: 2,
// // //         text: 'meeting with boss',// notice comma
// // //         isCompleted: true,
// // //     },
// // //     { //values in the array to be an object
// // //         id: 3,
// // //         text: 'dentist appointment',
// // //         isCompleted: false,
// // //     },// notice comma
// // // ];
// // // 
// // // // console.log(todos)
// // // 
// // // //say we want to gram text: 'meeting with boss'
// // //  
// // // // console.log(todos[1].text)
//========================================

// // // //========================================
// // // //jason format
// // // 
// // // const todos = [
// // //     { 
// // //         id: 1,
// // //         text: 'take out trash',
// // //         isCompleted: true,
// // //     },
// // //     { 
// // //         id: 2,
// // //         text: 'meeting with boss',
// // //         isCompleted: true,
// // //     },
// // //     { 
// // //         id: 3,
// // //         text: 'dentist appointment',
// // //         isCompleted: false,
// // //     },
// // // ];
// // // 
// // // // https://www.freeformatter.com/json-formatter.html
// // // 
// // // //how to send to server
// // // const todoJSON = JSON.stringify(todos);
// // // console.log(todoJSON)
// // // 
// // // //========================================


//========================================
// For loops
// // const todos = [ //arrays use brackets
// //     { //values in the array to be an object
// //         id: 1,
// //         text: 'take out trash',
// //         isCompleted: true,// notice comma
// //     },
// //     { //values in the array to be an object
// //         id: 2,
// //         text: 'meeting with boss',// notice comma
// //         isCompleted: true,
// //     },
// //     { //values in the array to be an object
// //         id: 3,
// //         text: 'dentist appointment',
// //         isCompleted: false,
// //     },// notice comma
// // ];
// // 
// // // For loops
// // for(let i = 0; i <= 10; i++){
// //     console.log(i);
// // }
// // 
// // for(let i = 0; i <= 10; i++){
// //     console.log(`For Loop Number: ${i}`);
// // }
// // 
// // // while loop set variable outside loop
// // let i = 0;
// // while(i < 10){
// //     console.log(`While Loop Number: ${i++}`); 
// //     //Need to add ++ otherwise it will go on forever
// // }
// // 
//========================================

//========================================
// const todos = [ //arrays use brackets
//     { //values in the array to be an object
//         id: 1,
//         text: 'take out trash',
//         isCompleted: true,// notice comma
//     },
//     { //values in the array to be an object
//         id: 2,
//         text: 'meeting with boss',// notice comma
//         isCompleted: true,
//     },
//     { //values in the array to be an object
//         id: 3,
//         text: 'dentist appointment',
//         isCompleted: false,
//     },// notice comma
// ];

// //Way to loop trhough of an array
// // for(let i = 0; i < todos.length; i++) {
// //     console.log(todos[i].text)
// // }
//                 // name of the array
// for(let todo of todos) {
//     console.log(todo)

// }

// for(let todo of todos) {
//     console.log(todo.text)

// }

// for(let todo of todos) {
//     console.log(todo.id)

// }

// ================================================
// // // const todos = [ //arrays use brackets
// // //     { //values in the array to be an object
// // //         id: 1,
// // //         text: 'take out trash',
// // //         isCompleted: true,// notice comma
// // //     },
// // //     { //values in the array to be an object
// // //         id: 2,
// // //         text: 'meeting with boss',// notice comma
// // //         isCompleted: true,
// // //     },
// // //     { //values in the array to be an object
// // //         id: 3,
// // //         text: 'dentist appointment',
// // //         isCompleted: false,
// // //     },// notice comma
// // // ];
// // // 
// // // //High order array methods
// // // 
// // // 
// // // //forEach, map, filter
// // // 
// // // //High order array methods take a function as a perameter
// // // todos.forEach(function(todo) {
// // //     console.log(todo.text)
// // // 
// // // }); // notice the parenthases here
// // // 
// // // // take in a function and pass in a variable
// // // const todoText = todos.map(function(todo) {
// // //     return todo.text
// // // });
// // // 
// // // // console.log(todoText)
// // // 
// // // // const todoCompleted = todos.filter(function(todo) {
// // // //     return todo.isCompleted === true;
// // // // });
// // // 
// // // // console.log(todoCompleted)
// // // 
// // // const todoCompleted = todos.filter(function(todo) {
// // //     return todo.isCompleted === true;
// // // }).map(function(todo) {
// // //     return todo.text;
// // // })
// // // 
// // // console.log(todoCompleted)
//========================================


//========================================
// conditional
//const x = 10;
//if(x == 10) {
//    console.log('x is 10')
//}
//

// //const x = 10;
// //if(x === 10) {
// //    console.log('x is 10')
// //} else {
// //    console.log('X is not 10')
// //}

// // // const x = 22;
// // // if(x === 10) {
// // //     console.log('x is 10')
// // // } else {
// // //     console.log('X is not 10')
// // // }


// // // // const x = 10; //change const to see
// // // // if(x === 10) {
// // // //     console.log('x is 10')
// // // // } else if(x > 10) {
// // // //     console.log('x is greater than 10')
// // // // } else {
// // // //     console.log('x is less than 10')
// // // // }

// // const x = 4; //change const to see
// // const y = 10;
// // 
// // // OR || either x is more or y is morr.
// // if(x > 5 || y > 10) {
// //     console.log('x is than 5 or y is more than 10')
// // }
// // 
// // 
// // //&& both have to me true.
// // if(x > 5 && y > 10) {
// //     console.log('x is more than 5 AND  y is more than 10')
// // }
// // 
// // // You can sue this instead of nesting if statements.

//========================================

//========================================
// // // turnary operator
// // // short hand if statement
// // const x = 10;
// // 
// // const color = x > 10 ? 'red' : 'blue'
// // //condition x than (?) red than (:) blue
// // // if true than this if not than this
// // 
// // console.log(color);
// // 
// // //change x to 11 and back to 10
// // 

//========================================

// //switch
// const x = 10;
 
// const color = x > 10 ? 'red' : 'blue'
// //condition x than (?) red than 

// switch(color){
//     case 'red':
//         console.log('color is red');
//         break;
//     case 'blue':
//         console.log('color is blue');
//         break;
//     default:
//         console.log('color is NOT red or blue')
//         break;

// }
//========================================
// functtions
// //                 //inside parenths put perameters
// // function addNums(num1, num2) {
// //     console.log(num1 + num2)
// // 
// // }
// // // must call the function here
// // addNums(5,4)
// // // 5 and 4 are the perameters
// // addNums() // spits out NaN

// // function addNums (num1 = 1, num2 = 1) {
// //  return num1 + num2;
// // }
// // 
// // console.log(addNums(5, 5))
//========================================

//Arrow functions
// // const addNums = (num1 = 1, num2 = 1) => {
// //     return num1 + num2;
// // }
// // 
// // console.log(addNums(5, 5)) 

// // const addNums = (num1 = 1, num2 = 1) => console.log(num1 + num2);
// This line is the same as above
// // addNums(5, 5)


// can remove return
// // const addNums = (num1 = 1, num2 = 1) => /*return*/num1 + num2;
// // 
// // console.log(addnums(5, 5))
// // 

// If one value cans slim it up a lot
// const addNums = num1 => num1 + 5;
// 
// console.log(addNums(5));
//========================================

//========================================
// constructor functions
// https://youtu.be/hdI2bqOjy3c?t=3599

//instantiate object

//========================================

//========================================























//========================================

//========================================


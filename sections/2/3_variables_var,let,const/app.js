// var has been around forever

// let, const  introduced in ES2015 AKA ES6

// var name = 'John Doe';
// console.log(name);

// name = "Steve Smith";
// console.log(name);

// init a variable. will be undefined until assigned value. Used mainly in conditionals like If statements. for instance, If something is true greeting = value1, or else greeting = value2   

// var greeting;
// console.log(greeting);

// greeting = "hello";
// console.log(greeting);

// variables can only include letters, numbers, _(underscore), and $ symbol. And cannot start with an number!

// multi word variables naming conventions

// var firstName = 'John'; camel case

// var first_name = 'John'; underscore

// var FirstName = 'John'; Pascal case. Used for ES6 classes and constructors


// using LET

// let name = 'john smith';
// console.log(name);
// name = 'jane smith';
// console.log(name);

// using CONST

// const firstName = 'jon';
// console.log(firstName);

// cannot be reassigned

// firstName = 'sara';
// console.log(firstName);

// const must have a value assignment. cannot be initialized



// the data within an object of a const can change, but not the object itself
const person = {
  name: 'john',
  age: 30
}

// mutating the data
person.name = 'sara'
person.age = 32

console.log(person);

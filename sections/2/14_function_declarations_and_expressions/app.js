// Functions are blocks of code that can be defined and called at a later time or at the same time

// FUNCTION DECLARATIONS

function greet(){
  // everything inside here is the function scope
  console.log('Hello');
 
}
// calling the function 
greet();



function greet(){
  // you wouldn't console log normally, you would return a value 
  return 'Hello'
}
// now that a return is within the scope of the function, we wrap the greet() with a console.log to get the value to show in the console
console.log(greet());



// Function taking in a parameters/arguments
function greet(firstName){
  return 'Hello ' + firstName
}
// now that a return is within the scope of the function, we wrap the greet() with a console.log to get the value to show in the console
console.log(greet('Logan'));


// Function taking in multiple parameters/arguments
function greet(firstName, lastName){
  return 'Hello ' + firstName + lastName
}

console.log(greet('Logan ', 'Randall'));

// with undefined parameters/arguments
function greet(firstName = 'Beautiful ', lastName = 'Person'){
  return 'Hello ' + firstName + '' + lastName
}

console.log(greet());

// FUNCTION EXPRESSIONS (PUTTING A FUNCTION AS A VARIABLE ASSIGNMENT). Can be named or anonymous

// example of anonymous
// const square = function(x){
//   return x*x
// };
// console.log(square(8));

// giving x a default value
const square = function(x = 3){
  return x*x
};
console.log(square());


//IMMEDIATELY INVOKABLE FUNCTION EXPRESSIONS (IIFE) these are usedful in design patterns like the Module Pattern

// note that functions have parenthesis at he end of them, so an IIFE must have a set of parenthesis at the end as well
(function(){
  console.log('IFEE ran..')
})();

// taking in parameters
(function(firstName){
  console.log('Hello ' + firstName)
})('Logan');

// PROPERTY METHODS. When a function is put inside an object it is called a method

const todo = {
  add: function(){
    console.log('Add todo..');
  },
  edit: function(id){
    console.log(`Edit todo ${id}`);
  }
}

// can also define functions outside of the object
todo.delete = function(){
  console.log('Delete todo ');
}

todo.add();
todo.edit(22);
todo.delete();
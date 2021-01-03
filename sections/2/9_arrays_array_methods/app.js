// create some arrays of numbers(recommended)
const numbers = [43,56,33,23,44,36,5];

// Create an array using the array constructor
const numbers2 = new Array(22,45,33,76,54)

// creating an 'array with strings
const fruit = ['apples', 'oranges', 
'pears', 'plums']

// mixed data types
const mixed = [22, 'hello', true, null, {a:1, b:2}, new Date()];

console.log(mixed);

let val;

// get array length

val = numbers.length

// test if is an array
val = Array.isArray(numbers);
val = Array.isArray("Hello");

// get a single value form array using index (0 based)
val = numbers[3];
val = numbers[0];

// insert into array
numbers[2] = 100;

// find index of a value
val = numbers.indexOf(36);

// MUTATING ARRAYS WITH DIFFERENT METHODS/FUNCTIONS

// adding onto the end of an array
numbers.push(250);

// add onto the front of an array
numbers.unshift(120);

// take off from end
numbers.pop();

// take off from front
numbers.shift();

// splice out values from array: .splice(start, how many beyond that first number)
numbers.splice(1, 3);

// reverse the array
numbers.reverse();

// concatenate arrays
val = numbers.concat(numbers2);

// sort an array alphabetically
val = fruit.sort();

// sort an array numerically using the "compare function"
val = numbers.sort(function(x,y){
  return x-y;
})

// reverse sort
val = numbers.sort(function(x,y){
  return y-x;
})

// find using a testing function
function under50(num){
  return num<50;
}
val = numbers.find(under50);

// this function wont work due to the pre sorting of the numbers array. To make it work, comment out all the sorts
function over50(num){
  return num > 50;
}
val = numbers.find(over50);


console.log(numbers);
console.log(val);

let val;

// number to string
val = 5

// output
console.log(val);
console.log(typeof val);
console.log(val.length);

// .length only works on strings hence it returns undefined.

// convert number to string using the String function
val = String(533);
console.log(val);
console.log(typeof val);
console.log(val.length);

// expression
val = String(5+5);
console.log(val);
console.log(typeof val);
console.log(val.length);

// boolean to string

val = String(true);
console.log(val);
console.log(typeof val);
console.log(val.length);

// date to string

val = String(new Date());
console.log(val);
console.log(typeof val);
console.log(val.length);

// array to string

val = String([1,2,3,4]);
console.log(val);
console.log(typeof val);
console.log(val.length);

// toString method
val = (5).toString();
console.log(val);
console.log(typeof val);
console.log(val.length);

// STRINGS TO NUMBERS

val = Number('5')
console.log(val);
console.log(typeof val);
// console.log(val.length); .length will only  work on a string
console.log(val.toFixed());


// boolean to number
val = Number(true);
console.log(val);
console.log(typeof val);
console.log(val.toFixed());

val = Number(false);
console.log(val);
console.log(typeof val);
console.log(val.toFixed());

// null to number
val = Number(null);
console.log(val);
console.log(typeof val);
console.log(val.toFixed());

// string to number
val = Number('hello');
console.log(val);
console.log(typeof val);
console.log(val.toFixed());

// array to number
val = Number([1,3,4,5]);
console.log(val);
console.log(typeof val);
console.log(val.toFixed());

// USING parseInt

val = parseInt('100');
console.log(val);
console.log(typeof val);
console.log(val.toFixed());

// if you want to use decimal numbers, you have to use parseFloat

val = parseFloat('100.5678');
console.log(val);
console.log(typeof val);
console.log(val.toFixed(4));

// TYPE COERSION

// if the expression has a string and a number, js will change the number to a string and concatenate the result.

const val1 = '5';
const val2 = 6;
const sum = val1 + val2;
console.log(sum);
console.log(typeof sum);




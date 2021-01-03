const num1 = 100;
const num2 = 50;
let val;

// simple math with numbers

val = num1 + num2;
val = num1 * num2;
val = num1 - num2;
val = num1 / num2;

// modulus operator
val = num1 % num2;

// math Object

val = Math.PI;
val = Math.E;
val = Math.round(2.8);

// Math.ceil will round up any decimal to next number
val = Math.ceil(2.1);

// Math.floor will round down any decimal number
val = Math.floor(2.9);

// square root
val = Math.sqrt(64);

// absolute value
val = Math.abs(-3);

// powers (8 to the power of 2)
val = Math.pow(8, 2);

// return the minimum value
val = Math.min(2,33,4,1,55,6,3);

// return the maximum value
val = Math.max(2,33,4,1,55,6,3);

// returns a random decimal value
val = Math.random();

// get a random decimal number between 0 and 19
val = Math.random() *20

val = Math.round(Math.random() * 20);



console.log(val);
const firstName = 'William';
const lastName = 'Johnson';
const age = 41;
const str = 'Hello my name is Logan'
const tags = 'web design,web development,HTML,CSS,JS'

let val;

val = firstName + lastName;
console.log(val);

// CONCATENATION

val = firstName + ' ' + lastName;
console.log(val);

// APPENDING
val = 'Logan '
val += 'Randall';
console.log(val);

val = 'Hello my name is ' + firstName + ' and I am ' + age;
console.log(val);

// ESCAPING
// one solution is to use doubble and single quotes.
val = "that's awesome, I can't wait";
console.log(val);

// using backslash
val = 'that\'s awesome, I can\'t wait';
console.log(val);

//LENGTH
val = firstName.length;
console.log(val);

// CONCAT method
val = firstName.concat(' ', lastName);
console.log(val);

// change case
val = firstName.toUpperCase();
console.log(val);

val = firstName.toLowerCase();
console.log(val);

val = firstName[0];
console.log(val);

// INDEX OF method

val = firstName.indexOf('W');
console.log(val);

val = firstName.lastIndexOf('l');
console.log(val);

// CHAR AT method
val = firstName.charAt('2');
console.log(val);

// to get last character
val = firstName.charAt(firstName.length -1);
console.log(val);

// SUBSTRINGS
val = firstName.substring(0, 4);
console.log(val); 

// SLICE (mostly  used in arrays, but can be used in strings)
val = firstName.slice(0, 4);
console.log(val);

val = firstName.slice(-5);
console.log(val); 

val = firstName.slice(5);
console.log(val);

// SPLIT (can split a string into an array based on a separator)

val = str.split(' ');
console.log(val);

val = tags.split(',');
console.log(val);

// REPLACE (change one value to another inside a string)
val = str.replace('Logan', 'Badass');
console.log(val);

// INCLUDE (test to see if there is a value within a string)
val  = str.includes('Hello');
console.log(val);
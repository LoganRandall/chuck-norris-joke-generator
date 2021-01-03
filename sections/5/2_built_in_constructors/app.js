// primitives can bre created as objects you will not use this b/c is slows everything down but you may run into it.

// STRING
const name1 = 'Logan';
const name2 = new String('Logan');

// one thing you can do when we use a string as an object, is add properties to it
name2.foo = 'bar'

console.log(name1);
console.log(name2);

console.log(typeof name1);
console.log(typeof name2);

if(name1 === 'Logan'){
    console.log('yes');
} else {
    console.log('no');
}

if(name2 === 'Logan'){
    console.log('yes');
} else {
    console.log('no');
}

// NUMBERS
const num1 = 5;
const num2 = new Number(5);

console.log(num1);
console.log(typeof num1);
console.log(num2);
console.log(typeof num2);

// BOOLEAN

const bool1 = true;
const bool2 = new Boolean(true);

console.log(bool1);
console.log(typeof bool1);
console.log(bool2);
console.log(typeof bool2);

// FUNCTIONS
const getSum1 = function(x, y){
    return x + y;
}
console.log(getSum1(1, 2));

const getSum2 = new Function('x', 'y', 'return 2 + 2');
console.log(getSum2());

// OBJECTS
const logan1 = {
    name: 'Logan'
}
const logan2 = new Object({name: 'Logan'});


console.log(logan1);
console.log(typeof logan1);
console.log(logan2);
console.log(typeof logan1);

// ARRAYS

const arr1 = [1,2,3,4];
const arr2 = new Array(1,2,3,4);

console.log(arr1);
console.log(typeof arr1);
console.log(arr2);
console.log(typeof arr1);

// REGULAR EXPRESSIONS
// the back slash is a requirement of an expression.
const re1 = /\w+/;

// b/c the back slash is a requirement of a regular expression the code below wont work b\c it returns only w+ and not \w+
// const re2 = new RegExp('\w+')

// we fix this issue by escaping the backslash with a backslash
const re2 = new RegExp('\\w+')

console.log(re1);
console.log(re2);
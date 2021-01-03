// if(something){
//   do something
// } else {
//   do something else
// }

// a single = is an assignment
const id = 100;

// equal to (uses ==)
// if (id == 100){
//   console.log('true');
// }

// nothing will happen because it is false
// if (id == 101){
//   console.log('true');
// }

// now use an else statement to compare
// if (id == 101){
//   console.log('true');
// } else {
//   console.log('false');
// }

// not equal to
// if (id != 101){
//   console.log('true');
// } else {
//   console.log('false');
// }

// strict equal to (value and type)
// if (id === 100){
//   console.log('true');
// } else {
//   console.log('false');
// }

// strict not equal to (value and type)
// if (id !== 100){
//   console.log('true');
// } else {
//   console.log('false');
// }


// test to see if a type of something is undefined
// if(typeof id !== 'undefined'){
//   console.log(`The id is ${id}`);
// } else {
//   console.log ('NO ID')
// }

// greater or less than
// if (id <= 100){
//   console.log('true');
// } else {
//   console.log('false');
// }

// IF ELSE
// const color = 'yellow';

// if(color ==='red'){
//   console.log('Color is red');
// } else if (color === 'blue'){
//   console.log('The color is blue');
// } else {
//   console.log('The color is neither red or blue');
// }

// LOGICAL OPERATORS
const name = 'Logan';
const age = 18;


// and (&&)
if(age > 0 && age <= 12){
  console.log(`${name} is a child`);
} else if (age >= 13 && age <=17){
  console.log(`${name} is a teenager`);
} else {
  console.log(`${name} is an adult`);
}

// or (||)
if(age < 18 || age >= 65){
  console.log(`${name} cannot run in the race`);
} else {
  console.log(`${name} can run in the race`);
}

// TERNARY OPERATOR

console.log(id === 100 ? 'correct' : 'incorrect')
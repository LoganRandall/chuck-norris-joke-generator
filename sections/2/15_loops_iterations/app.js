// loops are used to a set of instructions that repeats until a specific condition is reached. used to run the same block of code using different values each time.

// FOR LOOP. USED WHEN YOU KNOW HOW MANY ITERATIONS WILL RUN.
// Takes in three parameters separated by semi colons.
// first one is the declaration of a variable (only a var= or let)=
// second one is th condition
// last condition increments i (i++)
// for(let i = 0; i < 10; i++){
//   console.log('number ' + i);
// }

// BREAKING LOOPS

// This will still CL 'Number 2' in addition to '2 is my favorite number'
// for(let i = 0; i < 10; i++){
//   if(i === 2){
//     console.log('2 is my favorite number')
//   }
//   console.log('number ' + i);
// }

// To stop the double logging of i === 2 use continue; this will break the iteration and move on to the next iteration
// for(let i = 0; i < 10; i++){
  
//   if(i === 2){
//     console.log('2 is my favorite number');
//     continue;
//   }
//   console.log('number ' + i);
// }


// to stop iterations use break:
// for(let i = 0; i < 10; i++){
  
//   if(i === 2){
//     console.log('2 is my favorite number');
//     continue;
//   }
//   if(i === 5){
//     console.log('Stop the loop')
//     break;
//   }
//   console.log('number ' + i);
// }

// WHILE LOOP. USED WHEN IT IS UNLCEAR HOW MANY ITERATIONS WILL HAPPEN.
// declare variable outside the while loop
// increment takes place within the while loop

// let i = 0;
// while(i < 10){
//   console.log('Number ' + i++);
// }

// DO WHILE LOOP. 
// Will always run at least once no matter what

// let i = 0
// do {
//   console.log('Number ' + i);
//   i++
// }

// while(i < 10);


// LOOP THROUGH ARRAYS

const cars = ['Ford', 'Chevy', 'Honda', 'Toyota']
// for(let i = 0; i < cars.length; i++){
//   console.log(cars[i]);
// }

// FOREACH ARRAY LOOP
// takes in a call back function(anonymous) which takes in an iterator, an index, actual array
// cars.forEach(function(car, index, array){
//   console.log( `${index}  ; ${car}`);
//   console.log(array);
// });


// MAP METHOD

// const users = [
//   {id: 1, name: 'John'},
//   {id: 2, name: 'Sara'},
//   {id: 3 , name: 'Karen'},
//   {id: 4 , name: 'Logan'}
// ];

// const ids = users.map(function(user){
//   return user.id
// });

// console.log(ids);

// FOR IN LOOP
const user = {
  firstName: 'Logan',
  lastName: 'Randall',
  age: 41
}

for(let x in user){
  console.log(`${x} : ${user[x]}`);
}
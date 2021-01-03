// GLOBAL SCOPE
var a = 1;
let b = 2;
const c = 3;

// you can have a var, let, or const with the same name as the global scope as long as its inside the function scope.
// function test(){
//   var a = 4;
//   let b = 5;
//   const c = 6;
//   console.log('Function scope ', a, b, c);
// }
// test();

// console.log("Global Scope ", a, b, c);


// BLOCK LEVEL SCOPE


// the var is reassigned the to the block scope declaration in this example. let and const will not be changed
// if(true){
//   // this is the block scope
//   var a = 4;
//   let b = 5;
//   const c = 6;
//   console.log('if (block) scope ', a, b, c);
// }

for(var a = 0; a < 10; a++){
  console.log(` for loop: ${a}`);
}
console.log("Global Scope ", a, b, c);
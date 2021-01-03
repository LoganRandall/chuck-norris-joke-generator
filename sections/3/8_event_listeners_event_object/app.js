
// addEventListener('whats the event is, anonymous call back function)
// document.querySelector('.clear-tasks').addEventListener('click', function(e){
//   console.log('Hello World');
//   e.preventDefault();
// });


// you can use a named parameter within the function as well
document.querySelector('.clear-tasks').addEventListener('click', onClick);

function onClick(e){
// console.log('Clicked');
let val;
val = e;

// event target element
val = e.target;
val = e.target.id;
val = e.target.className;
val = e.target.classList;

// event type (click, mouseover, etc)
val = e.type



console.log(val);
e.preventDefault();
};




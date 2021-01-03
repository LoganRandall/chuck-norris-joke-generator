// SET LOCAL STORAGE ITEM
// uses key, value pairs
// localStorage.setItem('name', 'john');
// localStorage.setItem('age', '30');

// SET SESSION STORAGE ITEM
// sessionStorage.setItem('name', 'BETH');

// REMOVE FROM STORAGE
// localStorage.removeItem('name');
// sessionStorage.removeItem('name');

// GET FROM STORAGE
// const name = localStorage.getItem('name');
// const age = localStorage.getItem('age');

// CLEAR LOCAL STORAGE
// localStorage.clear();
// console.log(name, age);

document.querySelector('form').addEventListener('submit', function(e){
  const task = document.getElementById('task').value;

  let tasks;

  if(localStorage.getItem('tasks') === null){
    tasks = [];
  } else {
    // JSON.parse will store strings in the array as an "object"
    tasks = JSON.parse(localStorage.getItem('tasks'));
  }

  tasks.push(task);

  // JSON.stringify will set the tasks inside an array formatted as a string
  localStorage.setItem('tasks', JSON.stringify(tasks));
  alert('task saved');

  // console.log(task);
  // e.preventDefault();
});


// forEach loop through the array and get each task entry
const tasks = JSON.parse(localStorage.getItem('tasks'));

tasks.forEach(function(task){
  console.log(task);
});

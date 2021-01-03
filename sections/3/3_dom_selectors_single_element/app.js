// document.getElementById();


console.log(document.getElementById('task-title'));

// get things from the element

// console.log(document.getElementById('task-title').id);
// console.log(document.getElementById('task-title').className);

// change styling (when implementing event-for dynamic functionality)

// document.getElementById('task-title').style.background = "grey";

// document.getElementById('task-title').style.color = "white";
// document.getElementById('task-title').style.padding = "10px";

// change content

// document.getElementById('task-title').textContent = "Task List";

// document.getElementById('task-title').innerText = "My Tasks List";

// document.getElementById('task-title').innerHTML = "<span style='color:red'>My Red Task List Title</span>";




// calling document.getElementById all the time like we did above is not very efficient so we would put this into a variable, then the code would look like this

const taskTitle = document.getElementById('task-title');

// change styling (when implementing event-for dynamic functionality)

taskTitle.style.background = "grey";

taskTitle.style.color = "white";
taskTitle.style.padding = "10px";

// change content

taskTitle.textContent = "Task List";

taskTitle.innerText = "My Tasks List";

taskTitle.innerHTML = "<span style='color:red'>My Red Task List Title</span>";


// document.querySelector();

console.log(document.querySelector('#task-title'));
console.log(document.querySelector('.card-title'));
console.log(document.querySelector('h5'));

document.querySelector('li').style.color = "red";
document.querySelector('li:nth-child(3').style.color = "blue";

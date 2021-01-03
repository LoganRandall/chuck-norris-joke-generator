const form = document.querySelector('form');
const taskInput = document.getElementById('task');
const heading = document.querySelector('h5');

// CLEAR INPUT
taskInput.value = '';

// form.addEventListener('submit', runEvent);
// taskInput.addEventListener('submit', runEvent);


// KEY EVENTS
// keydown-runs event when key is pressed down
// taskInput.addEventListener('keydown', runEvent);

// keyup-runs event when key is released
// taskInput.addEventListener('keyup', runEvent);

// Keypress
// taskInput.addEventListener('keypress', runEvent);

// FOCUS EVENTS
// Focus:When an input has focus/cursor inside
// taskInput.addEventListener('focus', runEvent);

// Blur:When the focus leaves the input
// taskInput.addEventListener('blur', runEvent);

// CUT & PASTE EVENTS
// taskInput.addEventListener('cut', runEvent);
// taskInput.addEventListener('paste', runEvent);

// INPUT EVENT- fires off any event within the input
// taskInput.addEventListener('blur', runEvent);

// CHANGE EVENT-only works on select inputs when the selection changes.
// taskInput.addEventListener('change', runEvent);




function runEvent(e){
  console.log(`EVENT TYPE: ${e.type}`);

  // GET INPUT VALUE
  // console.log(e.target.value);

  // make the heading match the input value
  // heading.innerText = e.target.value

  // e.preventDefault();
}
const clearBtn = document.querySelector('.clear-tasks');
const card = document.querySelector('.card');
const heading = document.querySelector('h5');

// CLICK EVENTS

// single click
// clearBtn.addEventListener('click', runEvent);

// double click
// clearBtn.addEventListener('dblclick', runEvent);

// MOUSE EVENTS

// mouse down
// clearBtn.addEventListener('mousedown', runEvent);

// mouse up
// clearBtn.addEventListener('mouseup', runEvent);

// mouse ENTER
// card.addEventListener('mouseenter', runEvent);

// mouse leave
// card.addEventListener('mouseleave', runEvent);

// mouse over
// card.addEventListener('mouseover', runEvent);

// mouse out
// card.addEventListener('mouseout', runEvent);

// mouse move
card.addEventListener('mousemove', runEvent);


// creat event handler
function runEvent(e){
  console.log(`EVENT TYPE: ${e.type}`);
  // e.preventDefault();
  
  heading.textContent = `MouseX: ${e.offsetX} MouseY: ${e.offsetY}`;

  document.body.style.backgroundColor = `rgb(${e.offsetX}, ${e.offsetY}, 40)`;
}


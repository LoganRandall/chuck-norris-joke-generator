// replace element


// create element
const newHeading = document.createElement('h2');

// add id
newHeading.id = 'task-title';

// create new text node
newHeading.appendChild(document.createTextNode('task-list'));

// get the old heading to be replaced

const oldHeading = document.getElementById('task-title');

// parent needs to be targeted in order to replace its child using replaceChild();
const cardAction = document.querySelector('.card-action');

// replace old element with new element using .replaceChild("newElement, oldElement");
cardAction.replaceChild(newHeading, oldHeading)


// remove element
const lis = document.querySelectorAll('li');
const list = document.querySelector('ul');

// remove a specific list item
lis[0].remove();

// remove child using removeChild();
list.removeChild(lis[3]);


// CLASSES & ATTRIBUTES
const firstLi = document.querySelector('li:first-child');
const link = firstLi.children[0];
let val;

// adding/removing classes
val = link.className;

// returns DOM token list that is set up like an array where it returns an indexed list
val = link.classList;

// now we can access these indexed items individually
val = link.classList[0];

// we can add classes using classList.add()
link.classList.add('test-class');

val = link;

// we can also remove classes using classList.remove()
link.classList.remove('test-class');

val = link;

// adding/removing attributes

// getting attributes value
val = link.getAttribute('href')

// setting attributes value using .setAttribute("which attribute", "what you want to set it to")
link.setAttribute('href', 'http://www.google.com');
link.setAttribute('title', 'Google');

// check to see if there is an attribute
val = link.hasAttribute('href');

// remove attribute
link.removeAttribute('title')



console.log(link);
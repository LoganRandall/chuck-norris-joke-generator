// creat the element

const li = document.createElement('li');

// add class
li.className = 'collection-item';

// add id
li.id = "new-item";

// add attribute
li.setAttribute('title', 'new item')

// creat text node an append
li.appendChild(document.createTextNode('HELLO WORLD'));

// create new link element
const link = document.createElement('a');

// create attributes for link
link.className = 'delete-item secondary-content';

// add icon HTML to 
link.innerHTML = '<i class="fa fa-remove"></i>';

// append link into li
li.appendChild(link);

// append li as child to ul
document.querySelector('ul.collection').appendChild(li);



console.log(li);
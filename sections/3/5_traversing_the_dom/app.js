let val;

const list = document.querySelector('ul.collection');
const listItem = document.querySelector('li.collection-item:first-child');

val = listItem;
val = list;

// GET CHILD NODES (returns a node list)

val = list.childNodes;
val = list.childNodes[0];
val = list.childNodes[0].nodeName;
val = list.childNodes[1].nodeType;

// NODE TYPES
// 1-Element
// 2-Attribute (deprecated)
// 3-Text node
// 8_Comment
// 9-Document itself
// 10-Doctype

// ^ this will also return text nodes which are the line breaks between the li's. this is not usually what you will want. We usually use the following instead

// GET CHILDREN ELEMENT NODES (returns an HTML collection)
val = list.children;
val = list.children[1];
val = list.children[1].textContent = "hello";

// GET THE CHILDREN OF CHILDREN
val = list.children[3].children;
val = list.children[3].children[0].id = "test link";
val = list.children[3].children[0];

// FIRST CHILD
val = list.firstChild;
// ^ this returns the first child node = text. use the following instead

val = list.firstElementChild;

// LAST CHILD
val = list.lastChild;
// ^ this returns the last child node = text. use the following instead

val = list.lastElementChild;

// CHILD COUNT
val = list.childElementCount;


// GET PARENT NODE
val = listItem.parentNode;
val = listItem.parentElement;

// GET PARENT OF PARENT
val = listItem.parentElement.parentElement

// GET NEXT SIBLING NODE
val = listItem.nextSibling;

// GET NEXT SIBLING ELEMENT
val = listItem.nextElementSibling;
val = listItem.nextElementSibling.nextElementSibling;

// PREVIOUS SIBLING
val = listItem.previousSibling;

// GET previous SIBLING ELEMENT
val = listItem.previousElementSibling;
// val = listItem.previousElementSibling.previousElementSibling;


console.log(val);
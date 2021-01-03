// EVENT BUBBLING events get bubbled up through the parents even though the parents didn't get clicked. This is because the children are being clicked and that click takes place within the parent, triggering an event within each ancestor.
// document.querySelector('.card-title').addEventListener('click', function(){
//   console.log('card title');
// });


// document.querySelector('.card-content').addEventListener('click', function(){
//   console.log('card content');
// });

// document.querySelector('.card').addEventListener('click', function(){
//   console.log('card');
// });

// document.querySelector('.col').addEventListener('click', function(){
//   console.log('col');
// });

// EVENT DELEGATION putting an event listener on a parent and then targeting a child/grandchild/etc. Also used for elements added to the HTML via javascript to run events. Without delegation, only the first one of a type will have the event attached to it, i.e the first <li> in a <ul>. and the event listener can be placed on any parent


// this is an option but if you later add an additional class to the element then the event will not work because the className must match everything declared in the class assignment.
// document.body.addEventListener('click', deleteItem);
// function deleteItem(e){
//   if(e.target.parentElement.className === 'delete-item secondary-content')(
//     console.log('Deleted Item')
//   )
// };


// heres a better way to target an element do it using classList.contains()



document.body.addEventListener('click', deleteItem);

// function deleteItem(e){
//   console.log(e.target);
// }

// ^ this returns the icon as the target when clicked upon, but we need the anchor link to be the target so we need to target the parent element and then removing its parent element (<li>) whe the function is triggered by coding the following

function deleteItem(e){
  if(e.target.parentElement.classList.contains('delete-item')){
    e.target.parentElement.parentElement.remove();
    
    console.log('Deleted Item');
}};
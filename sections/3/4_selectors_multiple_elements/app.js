// document.getElementsByClassName();

// const items = document.getElementsByClassName('collection-item');

// console.log(items);
// console.log(items[0]);
// items[0].style.color = 'red';
// items[1].textContent = 'Second List tem';

// const listItems = document.querySelector('ul').getElementsByClassName('collection-item');
// console.log(listItems);

// ^ Notice that the added div.collection-item was added to the first global scope but not in the second log because these are only the collection-item within the ul


// document.getElementsByTagName();
// let lis = document.getElementsByTagName('li');

// console.log(lis);
// console.log(lis[0]);
// lis[0].style.color = 'red';
// lis[1].textContent = 'Second List Item';


// convert HTML collection onto an array
// lis = Array.from(lis);
// lis.forEach(function(li){
//   console.log(li);
// });


// console.log(lis);

// document.querySelectorAll();
// returns node lists which don't have to be converted to arrays

const items = document.querySelectorAll('ul.collection li.collection-item');

items.forEach(function (item, index){
  item.textContent = `${index}: Hello`;
});

const liOdd = document.querySelectorAll('li:nth-child(odd)');
const liEven = document.querySelectorAll('li:nth-child(even)');

// changing colors using forEach(); loop
// liOdd.forEach(function(li, index){
//   li.style.background = "#ccc";
// })

// liEven.forEach(function(li, index){
//   li.style.background = "#f4f4f4";
// })

// changing colors using for(); loop which will also work for an HTML collection without converting to an array
for(let i = 0; i < liEven.length; i++){
    liEven[i].style.background = "#f4f4f4";

}


console.log(items);
const name = 'Logan';
const age = 41;
const job = 'Web Developer';
const city = 'Cool'

// Without template strings-ES5 way
html = '<ul><li>Name: ' + name + '</li><li>Age: ' + age + '</li><li>Job: ' + job +  '<li>City: ' + city + '</li></ul>';

// this could also be written like this
// html = '<ul>' + 
//       '<li>Name: ' + name + '</li>' + 
//       '<li>Age: ' + age + '</li>' + 
//       '<li>Job: ' + job + '</li>' + 
//       '<li>City: ' + city + '</li>' + 
//       '</ul>';



// using TEMPLATE STRINGS using backtics ES6
function hello(){
  return 'hello';
}
html = `
<ul>
  <li>Name: ${name}</li>
  <li>Job: ${job}</li>
  <li>Age: ${age}</li>
  <li>City: ${city}</li>
  <li>City: ${2+2}</li>
  <li>City: ${hello()}</li>
  <li>City: ${age > 30 ? 'Over 30' : 'under 30'}</li>
</ul>
`;

      document.body.innerHTML = html;


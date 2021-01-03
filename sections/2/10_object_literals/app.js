const person = {
  firstName: 'Logan',
  lastName: 'Randall',
  age: 41,
  email: 'loganrandall@me.com',
  hobbies: ['music', 'running', 'kayaking'],
  address: {
    city: 'Cool',
    state: 'CA'
  },
  getBirthYear: function(){
    return new Date().getFullYear() - this.age;
  }
}

let val;

// get the object info
val= person;

// get the specific value
val = person.lastName;
val = person.age;
val = person.hobbies;
val = person.hobbies[1];
val = person.address.city;
val = person.address.state;
val = person.getBirthYear();

console.log(val);
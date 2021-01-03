// each object in javascript has a prototype and each prototype is an object itself. all objects inherit inherit their methods and properties from their prototype.

// Object.prototype
// Person.prototype

// the prototype chain allows you to move up to the main Object.prototype

// PERSON CONSTRUCTOR
function Person(firstName, lastName, dob){
    this.firstName = firstName;
    this.lastName = lastName;
    this.birthday = new Date(dob);
    /*
    
    this.calcAge = function(){
        const diff = Date.now() - this.birthday.getTime();
        const ageDate = new Date(diff);
        return Math.abs(ageDate.getUTCFullYear() - 1970);
    }
    
    */
    
}

// CALCULATE AGE --> PROTOTYPE
Person.prototype.calcAge = function(){
        const diff = Date.now() - this.birthday.getTime();
        const ageDate = new Date(diff);
        return Math.abs(ageDate.getUTCFullYear() - 1970);
}

// GET FULL NAME
Person.prototype.getFullName = function(){
    return `${this.firstName} ${this.lastName}`;
}

// GETS MARRIED
Person.prototype.getsMarried = function(newLastName){
    this.lastName = newLastName;
}

const logan = new Person('Logan', 'Randall', 'may 27 1979');
const bre = new Person('Bre', 'McCluskey', 'may 30 1989');

console.log(bre);
console.log(logan.calcAge());
console.log(logan.getFullName());
console.log(bre.getFullName());

bre.getsMarried('Randall');
console.log(bre.getFullName());


console.log(bre.hasOwnProperty('firstName'));
console.log(bre.hasOwnProperty('getFullName'));

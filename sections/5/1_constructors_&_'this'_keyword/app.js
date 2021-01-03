// OBJECT LITERAL this is fine for one object or one instance

/*const brad = {
    name: 'brad',
    age: 30
}

console.log(brad);
console.log(brad.age);*/

// CONSTRUCTOR (always starts with a capital letter) used for multiple instances of an object-prototypes-inheritance

// PERSON CONSTRUCTOR
// one property called name
// we can instantiate a person object from this
// when there are multiple instances an argument needs to be passed into the constructor and set this.name = name; for the console.log to work/operation
// the 'this' keyword refers to the current instance of the object-the scope of the constructor

function Person(name, dob){
    this.name = name;
    // this.age = age;
    
    // common formula to calculate age from a birthday
    this.birthday = new Date(dob);
    this.calcAge = function(){
        const diff = Date.now() - this.birthday.getTime();
        const ageDate = new Date(diff);
        return Math.abs(ageDate.getUTCFullYear() - 1970);
    // console.log(this);
    
}
}

// using the 'this' keyword outside of the function scope and within the global scope returns the window object.

// console.log(this);
// this.alert('alert')

// to instantiate an object use the 'new' Keyword

// const logan = new Person('Logan', 41);
// const jon = new Person('Jon', 40);
// console.log(jon.age);

const logan = new Person('Logan', 'may 27 1979');

console.log(logan.calcAge());
// person constructor
function Person(firstName, lastName) {
    this.firstName = firstName;
    this.lastName = lastName;

}

Person.prototype.greeting = function(){
    return `Hello there ${this.firstName} ${this.lastName}`;
}

const person1 = new Person('Logan' , 'Randall');

// console.log(person1.greeting());

// customer constructor

// v The call() function allows us to call another function from somewhere else in the current context. In this example we are using it to pull firstName and lastName from the above person constructor. The parameters of the function are 1 ('this' keyword) followed by what parameters you want to pull. Any extra properties for customers need to be created below to call.

function Customer(firstName, lastName, phone, membership){
    Person.call(this, firstName, lastName);
    this.phone = phone;
    this.membership = membership;
}

// inherit the person prototype methods
Customer.prototype = Object.create(Person.prototype)

// make customer.prototype return Customer() as prototype instead of Person()
Customer.prototype.constructor = Customer;

// create Customer

const cust1 = new Customer('Breanne', 'Randall', '555-555-5555', 'premium');

console.log(cust1);


// customer greeting
Customer.prototype.greeting = function(){
    return `Hello there ${this.firstName} ${this.lastName} you are our best customer`;
}


console.log(cust1.greeting());

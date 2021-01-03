// person class/sub class

class Person {
    constructor (firstName, lastName){
        this.firstName = firstName;
        this.lastName = lastName;
    }

    greeting(){
        return `Hello there ${this.firstName} ${this.lastName}`;
    }
}

// creating customer as a subclass of the Person class
class Customer extends Person {
    constructor(firstName, lastName, phone, membership) {
        
        // When instantiating a new customer since its extending a person we want to call the Person constructor using the function called super

        // super takes in the arguments from the Person class and any additional arguments from the customer class can be defined below.

        super(firstName, lastName);
        this.phone = phone;
        this.membership = membership;

    }

    static getMembershipCost(){
        return 500;
    }
}

const logan = new Customer('Logan', 'Randall', '555-555-5555', 'Supreme')

console.log(logan);

console.log(logan.greeting());

console.log(Customer.getMembershipCost());
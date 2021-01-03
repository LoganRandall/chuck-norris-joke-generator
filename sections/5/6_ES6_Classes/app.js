// ES6 class
class Person{
    constructor(firstName, lastName, dob){
        this.firstName = firstName;
        this.lastName = lastName;
        this.birthday = new Date(dob);
    }

    // add greeting method. Adding methods to ES6 classes doesn't require the .prototype, just define the method

    greeting(){
        return `Hello there ${this.firstName} ${this.lastName}`;
    }

    calcAge(){
        const diff = Date.now() - this.birthday.getTime();
        const ageDate = new Date(diff);
        return Math.abs(ageDate.getUTCFullYear() - 1970);
    }

    getsMarried(newLastName){
        this.lastName = newLastName;
    }

    // add a static method that does not need to be instantiated. This is not a function and not part of this instance

    static addNumbers(x, y){
        return x + y;
    }

}

const bre = new Person('Breanne', 'McCluskey', 'may 30 1989');

bre.getsMarried('Randall');

console.log(bre);

console.log(bre.greeting());

console.log(bre.calcAge());

// using static method requires the use of the actual class name
console.log(Person.addNumbers(1,2));


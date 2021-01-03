// person prototypes

const personPrototypes = {
    greeting: function(){
        return `Hello ${this.firstName} ${this.lastName}`;
    },
    getsMarried: function (newLastName){
        this.lastName = newLastName;
    }
}

const mary = Object.create(personPrototypes);
mary.firstName = 'Mary';
mary.lastName = 'Williams';
mary.age = 30;

mary.getsMarried('Thompson');

console.log(mary.greeting());

const logan = Object.create(personPrototypes, {
    firstName: {value: 'Logan'},
    lastName: {value: 'Randall'},
    age: {value: 41}
});

console.log(logan);
console.log(logan.greeting());
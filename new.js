class Person{
    constructor(firstname,lastName,salary){
        this.firstname = firstname;
        this.lastName = lastName;
        this.salary = salary;
    }
}

const person1 = new Person('Anthony','Bridgerton',300000);
console.log(person1);
const person2 = new Person('Daphne','Bridgerton',800000);
console.log(person2);
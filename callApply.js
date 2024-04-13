const person = {
    firstName: 'Rah',
    lastName: 'Uddd',
    salary: 150000,
    getFullName: function(){
        console.log(this.firstName,this.lastName);
    },
    chargeBill: function(amount){
        console.log(this);
        this.salary = this.salary-amount;
        // return this.salary;
    }
}
// console.log(person.chargeBill(1));
// person.chargeBill(100);
// console.log(person.salary);
const person2 = {
    firstName: 'Rah',
    lastName: 'Uddd',
    salary: 2500
}

//Bind
const per2chargeBill = person.chargeBill.bind(person2);
per2chargeBill(500);
console.log(person2.salary);

//call
person.chargeBill.call(person2,900);
console.log(person2.salary);

//APPLY
person.chargeBill.apply(person2, [1000]);
console.log(person2.salary);
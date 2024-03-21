function factorial(number){
    let fact = 1;
    for(let i=1;i<=number;i++){
        fact = fact * i;
    }
    return fact;
}
let result = factorial(25);
console.log(result);


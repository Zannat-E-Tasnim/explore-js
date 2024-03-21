function factorial(number){
    if(number==0){
        return 1;
    }
    else if(number==1){
        return 1;
    }
    else{
        return number*factorial(number-1);
    }
}
let result = factorial(25);
console.log(result);


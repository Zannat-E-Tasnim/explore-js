function addNumbers(num1,num2){
    console.log(arguments);
    let sum=0;
    for(let i=0;i<arguments.length;i++){
        sum=sum+arguments[i];
    }
    return sum;
}
let result = addNumbers(12,14,16,17);
console.log(result);
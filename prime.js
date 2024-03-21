function isPrime(num){
    for(let i=2;i<num;i++){
   //     console.log(i, num%i);
        if(num%i==0){
            return "Not Prime"
        }
    }
    return "Prime";
}
let result = isPrime(21301);
console.log(result);

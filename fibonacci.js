function fibonacci(num){
    let fibo =[0,1];
    for(let i=2;i<=num;i++){
        fibo[i] = fibo[i-1]+fibo[i-2];
    }
    return fibo;
}
let result = fibonacci(12);
console.log(result);
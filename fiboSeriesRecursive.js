//fiboSeriesRecursive
function fibonacci(num){
    if(num==0){
        return [0];
    }
    else if(num==1){
        return [0,1];
    }
    else{
        let fibo = fibonacci(num-1);
        let nextElement = fibo[num-1]+fibo[num-2];
        fibo.push(nextElement);
        return fibo;
    }
}
let result = fibonacci(24);
console.log(result);
function sumOfArray(num){
    let sum = 0;
    for(let i=0;i<num.length;i++){
        sum = sum + num[i];
    }
    return sum;
}
let num = [1,2,3,4,5,6,7,8,9,10];
console.log(sumOfArray(num));

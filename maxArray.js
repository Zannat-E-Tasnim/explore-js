let num = [23,53,672,37,923,67,3682,9273,23413,730];
let max = num[0];
for(let i=1;i<num.length;i++){
    if(num[i]>max){
        max = num[i];
    }
}
console.log(max);


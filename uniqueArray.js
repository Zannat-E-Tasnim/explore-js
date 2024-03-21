let array = [3,4,5,3,6,7,9,2,5,1,8,9];
let unique = [];
for(let i=0;i<array.length;i++){
    let check = unique.indexOf(array[i]);
    if(check==-1){
        unique.push(array[i]);
    }
}
console.log(unique);
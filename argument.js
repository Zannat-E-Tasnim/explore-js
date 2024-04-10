function addNumbers(num1,num2){
    console.log(arguments);
    let sum = 0;
    for(let i=0;i<arguments.length;i++){
        sum=sum+arguments[i];
    }
    return sum;
}  
let result = addNumbers(12,14,16,17);
console.log(result);

function getFullName(firstName, lastName){
    let fullName =  '' ;
    for(let i=0;i<arguments.length;i++){
        fullName = fullName + ' ' + arguments[i];
    }
    return fullName;
}
const name = getFullName('Zannat','E','Tasnim','Binte','Zahurul');
console.log(name);
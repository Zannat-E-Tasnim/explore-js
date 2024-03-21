// 1st way
let num1 = 5;
let num2 = 7;
let temp = num1;
num1 = num2;
num2 = temp;
console.log("After swaping: num1 = ",num1," num2 = ",num2);

// 2nd way
num1 = 15;
num2 = 17;
num1 = num2 + num1;
num2 = num1 - num2;
num1 = num1 - num2;
console.log("After swaping: num1 = ",num1," num2 = ",num2);

// 3rd way

num1 = 25;
num2 = 27;
[num1,num2] = [num2,num1];
console.log("After swaping: num1 = ",num1," num2 = ",num2);




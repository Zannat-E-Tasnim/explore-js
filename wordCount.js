let line = "I    am  a student.     I love to read books.";
let count = 0;
for(let i=0;i<line.length;i++){
    if(line[i]==" " && line[i-1]!=" "){
        count++;
    }
}
count++;
console.log(count);
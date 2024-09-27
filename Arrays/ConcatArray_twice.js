const arr = [1,22,45];
const arrCopy = [...arr]; // spread operator 

for(let i=0;i<arrCopy.length;i++)
    arr.push(arrCopy[i]);

console.log(arr);
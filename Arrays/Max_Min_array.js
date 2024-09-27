let arr2 = [45,7865,3,875,345,876,23];

let min = arr2[0];
let max = arr2[0];

findMin(arr2);
findMax(arr2);

function findMin(arr){
    for(i=1;i<arr.length;i++)
        if(arr[i]<min)
            min = arr[i];
        console.log(`Minimum - ${min}`);
}

function findMax(arr){
    for(i=1;i<arr.length;i++)
        if(arr[i]>max)
            max = arr[i];
        console.log(`Maximum - ${max}`);
}


function findLargest(arr){
    let max= 0;
    for ( let i = 0; i < arr.length; i++){
        if(arr[i] > max){
            max = arr[i];
        }
    }
    return max;
}

let arr = [10,4,2,64,2,53,22];
let result = findLargest(arr);
console.log(result);

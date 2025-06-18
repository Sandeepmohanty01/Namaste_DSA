function secondLargest(arr){
    if(arr.length < 2){
        return null;
    }
    let largest = -Infinity;
    let secondLargest = -Infinity;

    for(let i = 1; i < arr.length; i++){
        if(arr[i] > largest){
            secondLargest = largest;
            largest = arr[i];            
        }
        else if(arr[i] > secondLargest && arr[i] != largest){
            secondLargest = arr[i];
        }
    }
    return secondLargest;
}

let arr = [4,4,3];
let result = secondLargest(arr);
console.log(result);

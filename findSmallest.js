function findSmallest(arr){
    let smallest = Infinity;
    for (let i = 0 ; i < arr.length; i++){
        if (arr[i] < smallest){
            smallest = arr[i];
        }        
    }
    return smallest;
}

let arr = [1,43,0,2,6,-1,22];
let result = findSmallest(arr);
console.log(result);

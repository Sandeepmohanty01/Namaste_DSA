function searchAnElement(arr, n){
    for (let i = 0; i < arr.length; i++){
        if (arr[i] == n){
            return i;
        }
    }
    return -1;
}

let arr = [10, 3, 5, 2, 7, 6, 9];
let result = searchAnElement(arr,6);
console.log(result);

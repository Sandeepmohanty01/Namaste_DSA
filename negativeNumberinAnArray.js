function negativenumber(arr){
    let count = 0;
    for (let i = 0; i< arr.length; i++){        
        if (arr[i] < 0){
            count= count +1;
        }    
    }
    return count;    
}

let arr = [10, 3, -5, 2, 7, -6, 9];
let result = negativenumber(arr);
console.log(result);

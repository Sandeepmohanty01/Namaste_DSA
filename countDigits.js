function countDigits(n){
    let count = 0;
    if (n == 0) return 1;
    n = Math.abs(n);
    while( n > 0){
        n = Math.floor(n/10);
        count++;
    }
    return count; 
}

let num = -123;
let result = countDigits(num);
console.log(result);

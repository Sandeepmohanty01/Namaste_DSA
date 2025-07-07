function reverseInteger(num){
    let rev = 0;
    let numcopy = num;
    num = Math.abs(num);
    while( num > 0 ){
        let rem = num % 10;
        rev = (10 * rev)+ rem;
        num = Math.floor(num/10);
    }

    if( numcopy < 0)
        return -rev;
    else
        return rev;
}

let num = -123;
let result = reverseInteger(num);
console.log(result);

function palindrome(num){
    let temp = num;
    let reverse = 0;
    while(temp > 0){
        let rem = temp % 10;
        reverse = (reverse *10) + rem; 
        temp = Math.floor(temp/10);
    }
    if (reverse == num) {
        return true;
    }
    else
        return false;


}


let num = 121;
let result = palindrome(num);
console.log(result);

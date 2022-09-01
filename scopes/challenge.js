// Return a Boolean if a number is divisible by 10
// Here, you'll create a function that'll give you a "true" or "false" Boolean as its output. The inputted number should only return a "true" if it's divisible by . Otherwise, your program should return a "false" answer.

let optionOne = 3;
let optionTwo = 30;

function isDivisibleByTen(){
    let result = null;
    if((optionOne % 10) === 0){
         result = true;
    }else{
         result = false;
    }

    return result;
}

console.log(isDivisibleByTen());
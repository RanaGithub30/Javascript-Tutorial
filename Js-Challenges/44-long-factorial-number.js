/**
 * Q. Find the factorial of a number wich will return a very long digit
 * Example: factorial of 25 will return ==> 15511210043330985984000000
*/

function extraLongFactorials(n) {
    // Write your code here
    let fact = BigInt(1);
    
    for(let i=n;i>1;i--){
         fact = factorial(BigInt(i), fact);
    }
    
    console.log(fact.toString()); 
}

let factorial = (present, prev) => present * prev; 

extraLongFactorials(25); // 15511210043330985984000000
extraLongFactorials(32); // 263130836933693530167218012160000000
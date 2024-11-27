/**
 * An integer d is a divisor of an integer n if the remainder of n/d = 0 .
 * Given an integer, for each digit that makes up the integer determine whether it is a divisor. 
 * Count the number of divisors occurring within the integer.
 * 
 * 
 * Example - 1
 * ------------------------
 * 
 * n = 124
 * Check whether 1, 2 and 4 are divisors of 124. All 3 numbers divide evenly into 124 so return 3.
 * 
 * Example - 2
 * ------------------------
 * 
 * n = 1024
 * Check whether 1, 2 and 4 are divisors of 124. All 3 numbers divide evenly into 124 so return 3, but it is not divisible by 0 as division 
 * by zero is undefined.
*/


function findDigits(n) {
    
    let devisorNo = 0;
    let digits = n.toString().split("").map(Number);
    
    for(let i=0; i<digits.length; i++){
          if(digits[i] != 0 && n%digits[i] == 0){
              devisorNo += 1;
          }    
    }
    
    return devisorNo;
}

console.log(findDigits(12));
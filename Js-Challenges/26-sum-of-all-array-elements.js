/**
 * 
 *  It must return the sum of all array elements.
 *  Exxample - 
 *  /////////////////////////
 * 
 *  I/p - [1000000001, 1000000002, 1000000003, 1000000004, 1000000005]
 *  o/p - 5000000015 // sum of all elements
 */

function aVeryBigSum(ar) {
    var arr_length = ar.length;
    var res = 0;
    
    for(var i=0; i<arr_length; i++){
          res = (res + ar[i]);
    }
    
    return res;
}

arr = [1000000001, 1000000002, 1000000003, 1000000004, 1000000005];

result = aVeryBigSum(arr);
console.log(result);
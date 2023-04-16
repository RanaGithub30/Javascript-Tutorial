/**
 * Given a square matrix, calculate the absolute difference between the sums of its diagonals.
 * For example, the square matrix  is shown below:

  Example - 
  ---------------

    [1 2 3
     4 5 6
     9 8 9]  

    a) The left-to-right diagonal = [1 + 5 + 9] = 15. 
    b) The right to left diagonal = [3 + 5 + 9] = 17. 
    c) Their absolute difference is = | 15 - 17 | = 2.
*/

function diagonalDifference() {
    var arr = [
        [11, 2, 4],
        [4, 5, 6],
        [10, 8, -12]
    ];
    
    var arr_count = arr.length;
    var res1 = 0;
    var res2 = 0;
    
    // for left-to-right
    for(var i=0; i<arr_count;i++){
          res1 += arr[i][i]; 
    }
    
    // for right-to-left
    for(var j=0; j<arr_count; j++){
         count_ele = arr[j].length;
         res2 += arr[j][((count_ele - 1) - j)];
    }
    
    var diff = (res1 - res2);
    var abs_diff = Math.abs(diff);
    return abs_diff;
}


var result = diagonalDifference();
console.log(result);
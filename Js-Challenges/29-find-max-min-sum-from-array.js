/**
 * Given five positive integers, find the minimum and maximum values that can be calculated by 
 * summing exactly four of the five integers. Then print the respective minimum and maximum values 
 * as a single line of two space-separated long integers.
 * 
 * Example
 * ---------------
 * 
 * arr = [1,3,5,7,9]
 * max_sum = [3+5+7+9] = 24
 * min_sum = [1+3+5+7] = 16
 */

function plusMinus(){
    let arr = [1,3,5,7,9];
    let max = [];
    let min = [];
    let max_total = 0;
    let min_total = 0;
    
    // find max. no
    for(let i=1; i<5; i++){
        if(arr[0] < arr[i]){
            max.push(arr[i]);
        }
    }
    
    // for min. no
    for(let j=1; j<5; j++){
        min.push(Math.min(...arr));
        // Get the index of element
        var index = arr.indexOf(Math.min(...arr));
        arr.splice(index, 1);
    }
    
    // add all max. no
    for(let ma=0;ma<max.length;ma++){
          max_total = max_total + max[ma];
    }
    
    // add all min. no
    for(let mi=0;mi<min.length;mi++){
          min_total = min_total + min[mi];
    }
    
    var final_result = min_total+" "+max_total;
    return final_result;
    // return min;
}

let result = plusMinus();
console.log(result);
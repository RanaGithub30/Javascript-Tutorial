/**
 * Given an array of integers, calculate the ratios of its elements that are positive, negative, and zero.
 * Example - 
 * ---------------
 * i/p -
 * -----
 * 
 * arr = [-4, 3, -9, 0, 4, 1];
 * 
 * o/p -
 * -----------
 * 
 * total positive no = 3
 * total negative = 2
 * total zeros = 1
 * 
 * total array element = 6
 * 
 * positi ratio ==> 3/6 = 0.5000000
 * negative ratio ==> 2/6 = 0.333333
 * zero ratio ==> 1/6 = 0.166667
 */

function plusMinus() {
    var arr = [-4, 3, -9, 0, 4, 1];
    
    var positive = 0;
    var negative = 0;
    var zeros = 0;
    
    var total_ele = arr.length;
    
    for(var i=0; i<total_ele; i++){
         // positive
         if(arr[i] > 0){
              positive += 1;
         }
         else if(arr[i] < 0){
              negative += 1;
         }
         else{
              zeros += 1;
         }
    }
    
    var positive_ratio = parseFloat(positive/total_ele).toFixed(6);
    var negative_ratio = parseFloat(negative/total_ele).toFixed(6);
    var zeros_ratio = parseFloat(zeros/total_ele).toFixed(6);
    
    var final_result = [positive_ratio, negative_ratio, zeros_ratio];
    
    return final_result;
}


var result = plusMinus();
console.log(result);
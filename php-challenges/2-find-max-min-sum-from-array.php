<?php

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

 function plusMinus($arr){
    $max = [];
    $min = [];
    $max_total = 0;
    $min_total = 0;
    
    // find max. no
    for($i=1; $i<5; $i++){
        if($arr[0] < $arr[$i]){
            array_push($max, $arr[$i]);
        }
    }
    
    // for min. no
    for($j=1; $j<5; $j++){
        array_push($min, min($arr));
        $arr_key = array_keys($arr, min($arr));
        unset($arr[$arr_key[0]]);
    }
    
    // add all max. no
    foreach($max as $m){
          $max_total = $max_total + $m;
    }
    
    // add all min. no
    foreach($min as $mi){
          $min_total = $min_total + $mi;
    }
    
    $final_result = $min_total." ".$max_total; // 16 24
    return $final_result;
}

$arr = [1,3,5,7,9];
$result = plusMinus($arr);
print_r($result);
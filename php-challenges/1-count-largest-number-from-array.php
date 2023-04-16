<?php

/**
 *  Find out how many times a maximum numbers coms in an array
*/

function miniMaxSum() {
      $arr = [3, 2, 1, 3];
      $arr2 = [];

      // find max numbers
      $max = max($arr);
      
      // find array keys of max numbers
      $tmp = array_keys($arr, $max);

      // store the array keys in temporary array
      foreach($tmp as $tm){
       array_push($arr2, $tm);
      }
      
      // count number of array keys in the new array
      $max_count = count($arr2);
      return $max_count;
    
}

$result = miniMaxSum();
print_r($result);
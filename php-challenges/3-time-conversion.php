<?php

/****
 * 
 * 
 * Given a time in -hour AM/PM format, convert it to military (24-hour) time.

   Note: - 12:00:00AM on a 12-hour clock is 00:00:00 on a 24-hour clock.
   - 12:00:00PM on a 12-hour clock is 12:00:00 on a 24-hour clock.

   Example

   Return '12:01:00'.
   Return '00:01:00'.
 */

 function timeConversion($s) {
    
    // Convert the input time to a timestamp
    $timestamp = strtotime($s);
    
    // Format the timestamp in 24-hour format
    $result = date("H:i:s", $timestamp);
    return $result;
}

$time = '12:00:00AM';
$result = plusMinus($time);
print_r($result);
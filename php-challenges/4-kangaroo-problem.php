<?php

/**
 * You are choreographing a circus show with various animals. For one act, you are given two kangaroos on a number line ready to 
 * jump in the positive direction (i.e, toward positive infinity).
 * 
 * The first kangaroo starts at location x1 and moves at a rate of v1 meters per jump.
 * The second kangaroo starts at location x2 and moves at a rate of v2 meters per jump.
 * 
 * You have to figure out a way to get both kangaroos at the same location at the same time as part of the show. 
 * If it is possible, return YES, otherwise return NO.
 * 
 * Example: - 
 * 
 * x1=2, v1=1, x2=1, v2=2
 * 
 * After one jump, they are both at x=3 (x1+v1 = 1+2, x2+v2 = 1+2) so the answer is YES.
*/


function kangaroo($x1, $v1, $x2, $v2) {
    // Check if the kangaroos start at the same position with the same speed
    if ($x1 == $x2 && $v1 == $v2) {
        return "YES";
    }
    
    // Check if the kangaroos have the same speed, but different starting positions
    if ($v1 == $v2) {
        return "NO";
    }
    
    // Check if the relative distance between the kangaroos is divisible evenly by the difference in their speeds
    if (($x2 - $x1) % ($v1 - $v2) == 0 && ($x2 - $x1) / ($v1 - $v2) >= 0) {
        return "YES";
    } else {
        return "NO";
    }
}

$result = kangaroo(0,2,5,3);
print_r($result);
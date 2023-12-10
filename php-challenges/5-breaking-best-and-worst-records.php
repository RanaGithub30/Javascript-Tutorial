<?php

/**
 * Maria plays college basketball and wants to go pro. Each season she maintains a record of her play. 
 * She tabulates the number of times she breaks her season record for most points and least points in a game. 
 * Points scored in the first game establish her record for the season, and she begins counting from there.
*/

function breakingRecords($scores) {
    // Initialize variables to keep track of highest and lowest scores
    $minScore = $scores[0];
    $maxScore = $scores[0];
    
    // Initialize counters for the number of times records are broken
    $minCount = 0;
    $maxCount = 0;

    // Iterate through the array of scores
    foreach ($scores as $score) {
        // Check if the current score is lower than the current minimum score
        if ($score < $minScore) {
            // Update the minimum score
            $minScore = $score;
            // Increment the counter for breaking the record of the lowest score
            $minCount++;
        }
        // Check if the current score is higher than the current maximum score
        elseif ($score > $maxScore) {
            // Update the maximum score
            $maxScore = $score;
            // Increment the counter for breaking the record of the highest score
            $maxCount++;
        }
    }

    // Return an array containing the counts for breaking the highest and lowest records
    return [$maxCount, $minCount];
}

// Example usage:
$scores = [10, 5, 20, 20, 4, 5, 2, 25, 1];
$result = breakingRecords($scores);
print_r($result);  // Output: Array ( [0] => 2 [1] => 4 )
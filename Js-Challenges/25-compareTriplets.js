/**
 * 
 * The task is to find their comparison points by comparing a[0] with b[0], a[1] with b[1], and a[2] with b[2].

    If a[i] > b[i], then Alice is awarded 1 point.
    If a[i] < b[i], then Bob is awarded 1 point.
    If a[i] = b[i], then neither person receives a point.
    Comparison points is the total points a person earned.

    Given a and b, determine their respective comparison points.

    Example - 
    ---------------------------------

    i/p - [17,28,30], [99,16,8]
    o/p - [2,1]

    ///////////////
    Explanation 1
    -----------------------

    Comparing the  elements,  so Bob receives a point.
    Comparing the  and  elements,  and  so Alice receives two points.
    The return array is .
 */


// Online Javascript Editor for free
// Write, Edit and Run your Javascript code using JS Online Compiler

function compareTriplets(a, b){
    
    var res1 = 0;
    var res2 = 0;
    var res3 = 0;
    
    var f_arr = [];
    
    for(var i = 0; i<3; i++){
        if(a[i] > b[i]){
             res1 += 1;
        }
        else if(a[i] == b[i]){
             res2 += 0;
        }
        else{
             res3 += 1;
        }
        
    }
    
    //
    if(res1 != 0){
            f_arr.push(res1);
    }
    if(res2 != 0){
            f_arr.push(res2);
    }
    if(res3 != 0){
            f_arr.push(res3);
    }
    
    return f_arr;
}

var result = compareTriplets([2,1,0], [1,1,1]);
console.log(result);
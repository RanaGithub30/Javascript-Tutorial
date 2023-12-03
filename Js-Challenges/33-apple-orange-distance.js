/**
 * Sam's house has an apple tree and an orange tree that yield an abundance of fruit. Using the information given below, 
 * determine the number of apples and oranges that land on Sam's house.

    In the diagram below:

    a) The red region denotes the house, where  is the start point, and  is the endpoint. The apple tree is to the left of the house, 
    and the orange tree is to its right.

    b) Assume the trees are located on a single point, where the apple tree is at point , and the orange tree is at point .
    c) When a fruit falls from its tree, it lands  units of distance from its tree of origin along the -axis. *A negative value of  
    means the fruit fell  units to the tree's left, and a positive value of  means it falls  units to the tree's right. 

    //////////////////////////////////

    Example
    ----------------------------------

    For example, Sam's house is between s=7 and t=10 . The apple tree is located at a=4 and b=12 the orange at . 
    There are m=3 apples and n=3 oranges. Apples are thrown apples=[2,3,-4]  units distance from a, and oranges=[3,-2,-4] units 
    distance. Adding each apple distance to the position of the tree, they land at [4+2, 4+3, 4+ (-4)] = [6, 7, 0]. 
    Oranges land at [12+3,12+ (-2)+ 12+ (-4)] = [15, 10, 8]. One apple and two oranges land in the inclusive range 7-10 
    so we print

    1
    2
*/


function countApplesAndOranges(s, t, a, b, apples, oranges) {
    // Write your code here

    let noOfApples = 0;
    let noOfOranges = 0;

    // Count apples
    for (let i = 0; i < apples.length; i++) {
        const applePosition = a + apples[i];
        if (applePosition >= s && applePosition <= t) {
            noOfApples++;
        }
    }

    // Count oranges
    for (let i = 0; i < oranges.length; i++) {
        const orangePosition = b + oranges[i];
        if (orangePosition >= s && orangePosition <= t) {
            noOfOranges++;
        }
    }

    console.log(noOfApples);
    console.log(noOfOranges);
}

let result = countApplesAndOranges(7, 10, 4, 12, [2, -4, 5], [3, -2, -4]);
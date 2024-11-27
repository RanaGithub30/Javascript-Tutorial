/**
 * A teacher asks the class to open their books to a page number. A student can either start turning pages from 
 * the front of the book or from the back of the book. They always turn pages one at a time. When they open the book, 
 * page  is always on the right side
*/

function pageCount(n, p) {
    // Calculate the number of page flips from the front
    let flipsFromFront = Math.floor(p / 2);
    
    // Calculate the number of page flips from the back
    let flipsFromBack = Math.floor((n / 2) - (Math.floor(p / 2)));
    
    // Return the minimum number of page flips
    return Math.min(flipsFromFront, flipsFromBack);
}

console.log(pageCount(6, 5)); // Output: 1

/**
 * a) Calculated as Math.floor(p / 2), which represents the number of flips needed to reach page p starting from the front of the book.
 * b) Originally, Math.floor((n / 2) - (p / 2)) was incorrect because it didn't account for how the page counting from 
 * the back should work. The correct calculation is Math.floor((n / 2) - Math.floor(p / 2)), which takes into account 
 * the number of flips required from the back to reach page p.
 * 
 * c) Math.min(flipsFromFront, flipsFromBack) returns the minimum number of flips between the front and back calculations.
 * 
 * 
 * Example with (6, 5):
 * -----------------------------------------
 * 
   a) From Front: Math.floor(5 / 2) = 2 flips.
   b) From Back: Math.floor((6 / 2) - Math.floor(5 / 2)) = Math.floor(3 - 2) = 1 flip.

 */
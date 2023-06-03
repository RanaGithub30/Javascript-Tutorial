/**
 * HackerLand University has the following grading policy:

    Every student receives a  in the inclusive range from 0 to 100.
    Any grade less than 40 is a failing grade.
    Sam is a professor at the university and likes to round each student's  according to these rules:

    If the difference between the grade and the next multiple of 5 is less than 3, round  up to the next multiple of .
    If the value of grade is less than 38, no rounding occurs as the result will still be a failing grade.


    Examples

    grade = 84, round to 85 (85 - 84 is less than 3)
    grade = 29, do not round (result is less than 40)
    grade = 57, do not round (60 - 57 is 3 or higher)
*/

function gradingStudents(grades) {
    // Write your code here
    
    let nearly_rounded_no = (Math.ceil(grades/5) * 5);
    let diff_grade = (nearly_rounded_no - grades);
    let new_str="";
    
    if(diff_grade < 3){
        if(nearly_rounded_no >= 40){
             new_str = nearly_rounded_no;
        }else{
             new_str = grades;
        }
    }else{
            new_str = grades;
    }
    
    return new_str;
}
 
result = gradingStudents(38); // Returns 13:02:03
console.log(result);
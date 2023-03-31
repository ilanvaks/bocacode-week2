// 1. Create a function that takes in a number of 
// two-pointers (shots made that count as 2 points each) 
// and three-pointers (shots made that count as 3 points each) 
// made and returns a basketball team's total score. 
// Invoke the function and console.log the results.

function totalPoints(twoPoints, threePoints) {
  let total = twoPoints * 2 + threePoints * 3
  return total
}

console.log(totalPoints(5,2))
// 1. Write a function that takes an integer in 
// minutes and converts it to seconds.
// return the result.

// function totalTime(num) {
//   result = num * 60
//   return result 
// }

// console.log(totalTime(30))



// 2. Write a function that takes an array of 
// numbers and returns the sum of all even numbers.

const myArr = [1, 5, 6, 10, 2, 9, 2004, 2003]

function totalEvenSum() {
  let totalEven = 0
  for (let i = 0; i < myArr.length; i++) {
   if ( myArr[i] % 2 === 0) {
     totalEven += myArr[i]


    }
  }
  return totalEven
}

console.log(totalEvenSum())

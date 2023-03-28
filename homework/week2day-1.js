// 1. You are given the following "car" object:
 // let myCar = {brand: "Toyota", make: "Prius", color: "red"}. 
// Please use destructuring to access the color property.
// 2. Write a function that converts hours into seconds. 
// Return the result. Invoke the function.
// 3. Practice making entity relationship diagrams by building 
// one for a pet store, either on paper or on a website 
// such as draw.io. Include a table for pets, owners, and 
// services.

//1.

let myCar = {brand: "Toyota", make: "Prius", color: "red"}
const {color} = myCar 

//2. Write a function that converts hours into seconds. 
// Return the result. Invoke the function.

function getTotalSeconds(hours) {
  let result = 3600 * hours 
  return result  
}

console.log(getTotalSeconds(3))


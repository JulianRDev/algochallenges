/*
Write a function that returns the factorial of 
the provided integer(n). E.g
    factorial(5) // should return 120
*/

// a factorial is the product of an integer and all the integers below it 
// function factorial(n, memo) {
//     // if memo  doesnt exist make it an empty object 
//     memo = memo || {}
//     if(memo[n]){
//         return memo[n]
//     }  
//     if (n === 0) {
//         return 1
//     }
//     // where recursion is occuring
//     return memo[n] = n * factorial(n - 1, memo)
// }

function factorial(n) {
    let product = 1;
    for (let i = 1;i <= n;i++) {
      product *= i;
    }
    return product;
  }

module.exports = factorial
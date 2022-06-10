/* 
 Given two or more arrays, write a function that combines
 their elements into one array without any repetition. 
 E.g  mergeArrays([1,2,3,3,3], [1,4,5,2]) // should return [1,2,3,4,5]
*/


//P: we're given 2 parameters, 1 array and 1 number
// R: a nested array
// E: chunkArray([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13], 5)
// should return [[1, 2, 3, 4, 5], [6, 7, 8, 9, 10], [11, 12, 13]]
// P: declare an empty array
// utilize the for loop
// i += size - we are incrementing by the sub-array: 0, 5, 10
// push the new sub array into the array, and utilize the slice method (i, i+size) --> tells you where to start the slice and end it - slice = clean cut
// splice = messy fruit ninja
//return the newArray
function chunkArray(array, size) {
  let newArray = []
  //let newSize = size
  for(i = 0; i < array.length; i+= size) {
      newArray.push(array.slice(i, i+size)) //.push pushes the new item to the end of the array
  }
  console.log(newArray)
  return newArray
}

//Kelly's Method
// function chunkArray(array, size) {
//     let chunks = []
//     while (array.length > 0){
//         chunks.push(array.slice(0, size))
//         array.splice(0,size) //after push it to the new array AKA chunk, then she spliced it off the original
//     }
//     return chunks
// }


module.exports = chunkArray
/* CHALLENGE
Given a string of text, write an algorithm that returns the text received in a reversed format. 
E.g reverseString('algorithms') // should return 'smhtirogla'
*/



function reverseString(text) {
    // split the text by each letter
    // reverse those letters
    // join letters back together
    // return letters reversed
    return text.split('').reverse().join('')
}



module.exports = reverseString
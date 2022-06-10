/* CHALLENGE
Given a string of text, return true or false indicating whether or not the text is a palindrome.
e.g palindromeChecker('racecar') // will return true
*/




function palindromeChecker(text) {
    // set all text to lowercase
    // split the text
    // reverse the text
    // join text back together
    let reversedText =text.toLowerCase().split('').reverse().join('')
    // return true boolean 
    return text === reversedText
}



module.exports = palindromeChecker;
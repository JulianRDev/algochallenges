/* CHALLENGE
Given a two strings, write an algorithm to check if they are anagrams
of each other. Return true if the pass the test and false if they
don't. E.g
    isAnagram('silent', 'listen') // should return true
*/



function isAnagram(stringA, stringB) {
    // Code goes here
    // function should return boolean
    // check and compare lengths
    // sort theeee strings
    // compare the two sorted strings
      //Check if the two strings have different lengths
      if (stringA.length !== stringB.length) {
        return false;
    }
    
    //Sort the two strings
    let s1 = stringA.split('').sort().join('');
    let s2 = stringB.split('').sort().join('');
    //Compare the two sorted strings
    return (s1 === s2);
}




module.exports = isAnagram
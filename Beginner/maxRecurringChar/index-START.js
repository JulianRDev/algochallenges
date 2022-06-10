/* CHALLENGE
Given a string of text, find and return the most recurring character. 
e.g maxRecurringChar('aabacada') // will return 'a'
*/




    // Code goes here
    // P: parameter will be a string of characters
    // R: should return the character that appears the most in the string
    // E: return 'a'
    // P: set a counter variable to 0
    // set a variable = '' 
    // nested loop through the text to add to counter every time a letter equals itself 
    // return the number that appears the most using max
    function maxRecurringChar(str) {
      // set empty object
        const charMap = {};
        // setting base number to compare character count too
        let max = 0;
        // for character that appears most
        let maxChar = '';
      
        // create character map
        for (let char of str) {
          // will always be false the first time to give letter value of 1 
          // and every time it appears again 1 will be added
          if (charMap[char]) {
            // increment the character's value if the character existed in the map
            charMap[char]++;
          } else {
            // Otherwise, the value of the character will be increamented by 1
            charMap[char] = 1;
          }
        }
      
        // find the most commonly used character
        for (let char in charMap) {
          // max set to 0 to begin and becomes the string it is compared to if length is longer
          if (charMap[char] > max) {
            max = charMap[char];
            maxChar = char;
          }
        }
      
        return maxChar;
      }

    //   function maxRecurringChar(text){
    //     let max = 0,
    //     maxChar ='';
    //     text.split('').forEach(function(char){
    //         if (text.split(char).length > max){
    //             max =text.split(char).length;
    //             maxChar =char
    //         }
    //     })
    //     return maxChar
    // }


module.exports = maxRecurringChar;
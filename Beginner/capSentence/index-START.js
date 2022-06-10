/* CHALLENGE
Given a sentence containing two or more words, 
return the equivalent of the sentence when capitalised. E.g
  capSentence('the tales of scotch!') // would return 'The Tales Of Scotch!' 
*/




function capSentence(text) {
  // Code goes here
  //given astring that can contain two or more words
  //return the equivalent of that sentence when its capitalized
  //we take the string and split it by word
  //then we take each element and loop through to take the index of each one
  //we use the to uppercase method and then we join back with the join method

  // set new variable to lowercase and split text
  let newText = text.toLowerCase().split(' ');
  // loop through every word
  for (let i=0; i< newText.length; i++){
    // captilize the first index of every newText and 
    // then add the substring to it starting at the second letter or 1 index
    newText[i] = newText[i].charAt(0).toUpperCase() + newText[i].substring(1);
  }

  return newText.join(' ')
}


module.exports = capSentence
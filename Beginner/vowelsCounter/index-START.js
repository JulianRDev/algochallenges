/* CHALLENGE
Given a string of text, return the number of vowels found within the text
e.g vowelsCounter('anehizxcv') // will return 3
*/


function vowelsCounter(text) {
    // Code goes here

    // set a counter to zero
    let vowelsCount = 0;
    // set variable to all vowels lower and upper case
    let v = ["a","e","i","o","u","A","E","I","O","U"];
    // loop through text letters and variable w/ vowels
    for(let i = 0;i < text.length;i++){
      
      for(let s=0;s<v.length;s++){
        // compare to see if any are equal to each other
        if(text[i] === v[s]){
          // if equal add 1 to counter
          vowelsCount++;
        }
      }
    }
    // return counter
    return vowelsCount;
}



module.exports = vowelsCounter;

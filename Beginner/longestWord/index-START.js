/* CHALLENGE
Given a string of text, write an algorithm that returns the text received in a reversed format. 
E.g reverseString('algorithms') // should return 'smhtirogla'
*/



function longestWord(text) {
    // Code goes here
    // function that returns longest word in sentence
    // return as a single string
    
   
    
    // split the sentence 
    let newText = text.split(' ')

    let longest = ''
    //lopp through the length of each word
    for(let i = 0; i < newText.length; i++){
        console.log(longest)
        if(newText[i].length > longest.length){
            // longest becomes the newText word that is longest each time it is ran through
            // if the next index in the loop length is longer than the previous one it will become the new value of longest
            // when done looping longest word will be value of longest
            longest = newText[i]
            
        }
    }
    // return word with longest length
    return longest
}


module.exports = longestWord
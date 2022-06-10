/* CHALLENGE
Given two strings of equal length, calculate and return the the hamming distance.
E.g hammingDistance('rover', 'river') // should return 1
*/




function hammingDistance(stringA, stringB) {
	// set a counter 
	let diffCount = 0
	// loop through argument and compare if each letter not equal to one another
	for (let i = 0; i < stringA.length; i++) {
		if (stringA[i] !== stringB[i]) {
			// if not equal to one another add 1 to counter
			diffCount += 1
		}
	}
	// return final count
	return diffCount
}


module.exports = hammingDistance
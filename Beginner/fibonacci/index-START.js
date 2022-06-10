/*
Write a function to return the nth element in Fibonacci sequence,
where the sequence is:
    [1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144, …]
*/


function fibonacci(n) {
    let [a, b] = [0, 1];
    while (n-- > 0){
        [a, b] = [b, a+b];
        console.log(b)
    }
    return b;
}

module.exports = fibonacci
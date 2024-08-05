const fibonacci = function(index) {
    if (index <0) return "OOPS";

    let fibonacciNumber = 0;
    let nextNum = 1;
    let sumOfTwo = 0;
    for (let i = 1; i <= index; i++)
    {
        sumOfTwo = fibonacciNumber + nextNum;
        fibonacciNumber = nextNum;
        nextNum = sumOfTwo;
        sumOfTwo = 0;
    }
        return(fibonacciNumber);
};

// Do not edit below this line
module.exports = fibonacci;

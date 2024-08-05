const palindromes = function (inputStr) {
    const punctuation = `.!'", `;
    const str = inputStr.toLowerCase();
    const originalArray =[...str].filter((letter)=>!(punctuation.includes(letter)));
    const reverseArray = originalArray.toReversed();
    return originalArray.every((v,i) => v === reverseArray[i]);

};

// Do not edit below this line
module.exports = palindromes;

// const palindromes = function (inputStr) {
//     const punctuation = `.!'", `;
//     const str = inputStr.toLowerCase();
//     const originalArray =[...str].filter((letter)=>!(punctuation.includes(letter)));
//     const reverseArray = originalArray.toReversed();
//     return originalArray.every((v,i) => v === reverseArray[i]);
// };


//Another option
const punctuation = `.!'", `;
const palindromes = function(inputStr) {
    const cleanedString = inputStr.split("")
                   .filter(letter => !(punctuation.includes(letter)))
                   .map(letter => letter.toLowerCase());

    const reversedString = cleanedString.toReversed();

    return cleanedString.every((letter,index) => 
                letter === reversedString[index]);
}


// Do not edit below this line
module.exports = palindromes;
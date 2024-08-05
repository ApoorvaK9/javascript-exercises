const reverseString = function(str) {
    const myArray = str.split("");
    strLength = str.length-1;
    str = "";
    for (let i=strLength; i>=0; i--)
    str+= myArray[i];

    return(str);
};

// Do not edit below this line
module.exports = reverseString;

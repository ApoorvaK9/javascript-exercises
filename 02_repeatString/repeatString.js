const repeatString = function(str,number) {
    var output = '';
    if (number < 0)
        return "ERROR";
    else {
        for (let i = 0; i < number; i++)
        {
            output += str;
        }
        return output;
    }
};

// Do not edit below this line
module.exports = repeatString;

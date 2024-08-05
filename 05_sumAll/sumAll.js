const sumAll = function(firstNum,secondNum) {
    let sumStart = 0;
    let sumStop = 0;
    let finalSum = 0;

    if(firstNum<0 || secondNum<0 || !Number.isInteger(firstNum) || !Number.isInteger(secondNum) 
        || isNaN(firstNum) || isNaN(secondNum))
        return("ERROR")
    else {
        if (secondNum < firstNum) {
            sumStart = secondNum;
            sumStop = firstNum;
        }else {
            sumStart = firstNum;
            sumStop = secondNum;
        }

        for(let i=sumStart; i<=sumStop; i++){
            finalSum += i;
        }
        return(finalSum);
    }
};

// Do not edit below this line
module.exports = sumAll;

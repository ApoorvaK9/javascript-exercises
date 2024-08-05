const removeFromArray = function(arr,...str) 
{
    const inputArrayLength = arr.length;
    const strSorted = str.sort();
    const strToRemoveLength = str.length;

    for(let i=0 ; i< inputArrayLength; i++)
        for (let j=0; j<strToRemoveLength; j++)
            {
            if(arr[i] === strSorted[j])
                {
                arr.splice(i,1);
                i--;
                }
            }
    return(arr);
};

// Do not edit below this line
module.exports = removeFromArray;

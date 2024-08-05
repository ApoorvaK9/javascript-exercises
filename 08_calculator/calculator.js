const add = function(num1,num2) {
	return num1 + num2;
};

const subtract = function(num1,num2) {
	return  num1 - num2;
  
};

const sum = function(arr) {
  let sumOfArr = 0;
	for(let i = 0;  i < arr.length; i++)
    {sumOfArr += arr[i];
    }
  return sumOfArr;
};

const multiply = function(arr) {
 let outputOfMultiplication = 1;
 for (let i = 0; i < arr.length; i++) {
  outputOfMultiplication *= arr[i];
  }
  return outputOfMultiplication;
};

const power = function(num1,num2) {
	return num1**num2;
};

const factorial = function(num1) {
	if (num1 === 0) {
    return 1;
  } else {{
    let factorial = 1;
    for (let i = 1; i <= num1; i++) {
      factorial *= i;      
    }
    return factorial;
  }
  }
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};

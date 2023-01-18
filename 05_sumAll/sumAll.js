const sumAll = function (num1, num2) {
  if (
    num1 < 0 ||
    num2 < 0 ||
    typeof num1 !== 'number' ||
    typeof num2 !== 'number'
  )
    return 'ERROR';
  let total = 0;
  let largestNum;
  let smallestNum;
  if (num1 > num2) {
    largestNum = num1;
    smallestNum = num2;
  } else {
    largestNum = num2;
    smallestNum = num1;
  }
  for (let i = largestNum; i != smallestNum - 1; i--) {
    total += i;
  }
  return total;
};

// Do not edit below this line
module.exports = sumAll;

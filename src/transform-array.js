const CustomError = require("../extensions/custom-error");

module.exports = function transform(arr) {
  if (Array.isArray(arr)) {
    let newArr = [];
    for (let i = 0; i < arr.length; i++) {
      switch(arr[i]) {
        case '--discard-next':
          if (i === arr.length - 1) {
            continue;
          } else {
            i++;
          }
          break;
        case '--discard-prev':
          if (i === 0) {
            continue;
          } else if (arr[i - 2] === '--discard-next') {
            continue;
          } else {
            newArr.pop();
          }
          break;
        case '--double-next':
          if (i === arr.length - 1) {
            continue;
          } else {
            newArr.push(arr[i + 1]);
          }
          break;
        case '--double-prev':
          if (i === 0) {
            continue;
          } else if (arr[i - 2] === '--discard-next') {
              continue;
          } else {
            newArr.push(arr[i - 1]);
          }
          break;
        default:
          newArr.push(arr[i]);
          break; 
      }   
    }
    return newArr;
  } else {
    throw Error;
  }
};
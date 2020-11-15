function solve(array) {
  // create count of each number
  // look at highest counts
  // put numbers in order and add to target array
  // repeat for each count until done
  var countsObj = {};
  for (var i = 0; i < array.length; i++) {
    if (countsObj[array[i]] === undefined) {
      countsObj[array[i]] = 1;
    } else {
      countsObj[array[i]]++;
    }
  }
  var greatestFrequency = 0;
  var greatestKey = '';
  for (var key in countsObj) {
    if (countsObj[key] > greatestFrequency) {
      greatestFrequency = countsObj[key];
      greatestKey = key;
    }
  }
  var currFreqArr = [];
  for (var currentFrequency = greatestFrequency; currentFrequency > 0; currentFrequency--) {
    for (var keyAgain in countsObj) {
      if (countsObj[keyAgain] === currentFrequency) {
        currFreqArr.push(keyAgain);
      }
    }
  }
  // var result = currFreqArr.forEach(function(element) {
  //   array.filter(function(origElement) {
  //     return element === origElement;
  //   });
  // });
  // console.log(result);
  var result = [];
  for (var currOrderedIndex = 0; currOrderedIndex < currFreqArr.length; currOrderedIndex++) {
    for (var origIndex = 0; origIndex < array.length; origIndex++) {
      if (array[origIndex] === Number(currFreqArr[currOrderedIndex])) {
        result.push(array[origIndex]);
      }
    }
  }
  return result;
}

var output = solve([2,3,5,3,7,9,5,3,7]); // [3,3,3,5,5,7,7,2,9]
console.log(output);

var output = solve([3, 4, 67, 2, 3, 4, 2, 7, 8, 7, 8, 7, 3, 4]);
console.log(output); // [3, 3, 3, 4, 4, 4, 7, 7, 7, 2, 2, 8, 8, 67]

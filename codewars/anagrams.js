function anagrams(word, arrayOfWords) {
  var countingObj = {};
  for (var i = 0; i < word.length; i++) {
    if (countingObj[word[i]] === undefined) {
      countingObj[word[i]] = 1;
    } else {
      countingObj[word[i]]++;
    }
  }
  var result = arrayOfWords.filter(function(element) {
    var wordCountingObj = {};
    for (var j = 0; j < element.length; j++) {
      if (wordCountingObj[element[j]] === undefined) {
        wordCountingObj[element[j]] = 1;
      } else {
        wordCountingObj[element[j]]++;
      }
    }    
    var keys = true;
    var values = true;
    for (var key in wordCountingObj) {
      if (countingObj[key] === undefined) {
        keys = false;
      }
      if (countingObj[key] !== wordCountingObj[key]) {
        values = false;
      }
    }
    return keys && values;
  });
  return result;
}

var output = anagrams('abba', ['aabb', 'abcd', 'bbaa', 'dada']);
console.log(output);

var output = anagrams('racer', ['crazer', 'carer', 'racar', 'caers', 'racer']);
console.log(output);

/*
create count for each letter

iterate through array
  add each anagram to a new array
  (filter)

check if each letter count matches,
  if it does, return true
    else
  return false
*/

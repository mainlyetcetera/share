function getLengthOfLongestElement(arrOfWords) {
  if (arrOfWords.length === 0) {
    return 0;
  }
  var lngLength = arrOfWords[0].length;
  arrOfWords.forEach(function(element) {
    if (element.length > lngLength) {
      lngLength = element.length;
    }
  });
  return lngLength;
  // var longest = arrOfWords.filter(function(element) {
  //   return element.length === lngLength;
  // });
  //
  // return longest[0];
}

var output = getLengthOfLongestElement(['one', 'two', 'three', 'mainly et cetera']);
console.log(output); // 5

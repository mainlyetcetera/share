function repeats(arr){
  var singles = arr.filter(function(element, i) {
    var count = 0;
    console.log(i);
    arr.forEach(function(currElement, index) {
      // console.log(index, arr[index], element);
      if (currElement === element) {
        count++;
        console.log("count:", count);
      }
    });

    if (count === 1) {
      return element;
    }
  });
  console.log(singles);
  return singles.reduce(function(result, element) {
    return result + element;
  }, 0);
}

var output = repeats([4, 5, 7, 5, 4, 8]);
console.log(output); // 15

/*
arr.forEach(function(element, index) {
  if (arr[index] === element) {
    count++;
  }
});

for (var i = 0; i < arr.length; i++) {
  if (arr[i] === element) {
    count++;
  }
}
*/

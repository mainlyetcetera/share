function list(names){
  if (names.length === 0) {
    return '';
  }  
  var arrOfNames = names.map(function(element) {
    return element.name;
  });
  if (arrOfNames.length === 1) {
    return `${arrOfNames[0]}`;
  } else if (arrOfNames.length === 2) {
    return `${arrOfNames[0]} & ${arrOfNames[1]}`;
  } else if (arrOfNames.length > 2) {
    var lastTwo = arrOfNames.filter(function(element, index) {
      return index === arrOfNames.length - 1 || index === arrOfNames.length - 2;      
    });
    var moreThanTwo = arrOfNames.filter(function(element) {
      return lastTwo.indexOf(element) === -1;
    });
    var formattedString = ``;    
    moreThanTwo.forEach(function(element) {
      formattedString += `${element}, `;
    });
    formattedString += `${lastTwo[0]} & ${lastTwo[1]}`;
  }
  return formattedString;
}

var output = list([{name: 'Bart'},{name: 'Lisa'},{name: 'Maggie'}]);
console.log(output); // 'Bart, Lisa & Maggie'

var output = list([{name: 'Bart'},{name: 'Lisa'},{name: 'Maggie'},{name: 'Homer'},{name: 'Marge'}]);
console.log(output); // 'Bart, Lisa, Maggie, Homer & Marge'
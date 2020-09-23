function triangle(row) {
  var container = '';
  for (var i = 0; row.length !== 1; i++) {

    var pair = row[i] + row[i + 1];
    if (pair === 'GG') {
      container += 'G';
    } else if (pair === 'BG' || pair === 'GB') {
      container += 'R';
    } else if (pair === 'RG' || pair === 'GR') {
      container += 'B';
    } else if (pair === 'BR' || pair === 'RB') {
      container += 'G'
    } else if (pair === 'RR') {
      container += 'R';
    } else if (pair === 'BB') {
      container += 'B';
    }

    row = row.slice(1);
    if (row.length === 1) {
      row = container;
      container = '';
    }

    i--;
  }
  return row;
}

/*
no need test invalid input
if only one value in row, return given value

make a pair that iterates each time
populate a new string and add the corresponding value

once done, reset row to be string we made and remake new string

// 'RGBG' > 'BRR' > 'GR' > 'B'
*/

var output = triangle('GB');
console.log(output); // 'R'

var output = triangle('RRR');
console.log(output); // 'R'

var output = triangle('RGBG'); // 'B');
console.log(output);

var output = triangle('RBRGBRB');
console.log(output); // 'G'

var output = triangle('RBRGBRBGGRRRBGBBBGG');
console.log(output); // 'G'

var output = triangle('B');
console.log(output); // 'B'

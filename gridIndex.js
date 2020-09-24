function gridIndex(grid, indices) {
  grid = grid.flat(Infinity);
  var container = [];
  indices.forEach(function(element) {
    container.push(grid[element - 1]);
  });
  return container.join('');
}

var output = gridIndex([['m', 'y', 'e'], ['x', 'a', 'm'], ['p', 'l', 'e']], [1, 5, 6]);
console.log(output); // 'mam'

var output = gridIndex([['m', 'y', 'e'], ['x', 'a', 'm'], ['p', 'l', 'e']], [1, 3, 7, 8]);
console.log(output); // 'mepl'

var output = gridIndex([['h', 'e', 'l', 'l'], ['o', 'c', 'o', 'd'], ['e', 'w', 'a', 'r'], ['r', 'i', 'o', 'r']], [5, 7, 9, 3, 6, 6, 8, 8, 16, 13]);
console.log(output); // 'ooelccddrr'
// got 'locoderr'

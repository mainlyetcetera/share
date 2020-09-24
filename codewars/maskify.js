function maskify(cc) {
  if (cc.length <= 4) {
    return cc;
  }
  var lastFour = cc.slice(-4);
  var lengthSaveFour = cc.slice(0, -4).length;
  var result = ``;
  for (var i = 0; i < lengthSaveFour; i++) {
    result += '#';
  }
  return result += lastFour;
}


var output = maskify('4556364607935616');
console.log(output); // '############5616'

var output = maskify('1');
console.log(output); // '1'
//
var output = maskify('11111');
console.log(output); // '#1111'

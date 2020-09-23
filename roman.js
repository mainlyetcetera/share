function solution(roman){
  // if digit after current is greater than current, subtract twice
  let obj = {
    I : 1,
    V : 5,
    X : 10,
    L : 50,
    C : 100,
    D : 500,
    M : 1000
  }
  let total = 0;
  for (var i = 0; i < roman.length; i++) {
    total += obj[roman[i]];
  }
  for (var j = 0; j < roman.length; j++) {
    if (obj[roman[j]] < obj[roman[j + 1]]) {
      total -= obj[roman[j]] * 2;
    }
  }
  return total;
}

Test.assertEquals(solution('XXI'), 21)
Test.assertEquals(solution('I'), 1)
Test.assertEquals(solution('IV'), 4)
Test.assertEquals(solution('MMVIII'), 2008)
Test.assertEquals(solution('MDCLXVI'), 1666)
Test.assertEquals(solution('CDXCIX'), 499)

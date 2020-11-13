const automorphic = n => {
  const squared = squareN(n);
  const length = getLengthToCheck(n); 
  const digitsToCompare = isolateDigitsToCheck(getLengthToCheck(n), squareN(n));
  const compared = compare(n, digitsToCompare);
  return compared === true ? 'Automorphic' : 'Not!!';
};

const squareN = n => n * n;

const getLengthToCheck = n => {
  let stringified = n.toString();  
  return stringified.length;
};

const isolateDigitsToCheck = (length, sqN) => {  
  const stringified = sqN.toString();
  let neededLength = -length;
  let toCompareTo = stringified.slice(neededLength);  
  return toCompareTo;
}

const compare = (strNum, strSqNum) => {  
  strNum = strNum.toString();
  return strNum === strSqNum ? true : false;
}

automorphic(1); // 'Automorphic'
automorphic(5); // 'Automorphic'
automorphic(3); // 'Not!!'
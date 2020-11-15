const productFib = prod => {
  const fiboNums = getFiboNumsTo25();
  let findFiboNums = findProduct(fiboNums, prod);
  if ((findFiboNums[0] * findFiboNums[1]) === prod) {
    findFiboNums.push(true);
  } else {
    findFiboNums.push(false);
  }

  return findFiboNums;
}

const getFiboNumsTo25 = () => {
  let i = 0;
  let lastFiboNum = 0;
  let currFiboNum = 1;
  let fiboNums = [0, 1];  
  while (i < 100) {
    let fiboResult = lastFiboNum + currFiboNum;
    fiboNums.push(fiboResult);
    lastFiboNum = currFiboNum;
    currFiboNum = fiboResult;
    i++
  }

  return fiboNums;
}

const findProduct = (fiboNums, prod) => {  
  let neededNums = [];
  for (var i = 0; i < fiboNums.length; i++) {    
    let product = fiboNums[i] * fiboNums[i + 1];    
    if (prod === product || prod < product) {
      neededNums.push(fiboNums[i], fiboNums[i + 1]);
      return neededNums;
    }
  }
}

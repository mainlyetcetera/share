const findNb = volume => {
  let currNum = 0;  
  let total = 0;

  while (total < volume) {
    currNum++;
    let currNumCubed = cube(currNum);    
    total += currNumCubed;
  }
  
  return total === volume ? currNum : -1;
}

const cube = n => n ** 3;
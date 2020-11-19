const solve = (list1, list2) => {
  return list2.map(target => {
    let count = 0;
    list1.forEach(eToCheck => eToCheck === target ? count++ : count);    
    return count;
  });
}

// const solve = (a,b) => b.map(x => a.filter(n => n === x).length);
// const solve = (a,b) => b.map(x => a.reduce((p, c) => x == c ? ++p : p , 0))

// const solve = (list1, list2) => {
//   let result = [];
//   list2.forEach(target => {
//     let count = 0;
//     list1.forEach(eToCheck => {
//       eToCheck === target ? count++ : count;
//     });
    
//     result.push(count);
//   });
  
//   return result;
// }

// // const solve = (list1, list2) => {
// //   let result = [];
// //   for (let i = 0; i < list2.length; i++) {
// //     let count = 0;    
// //     for (let j = 0; j < list1.length; j++) {
// //       list1[j] === list2[i] ? count++ : count;
      
// //     }
    
// //     result.push(count);    
// //   }
  
// //   return result;
// // };


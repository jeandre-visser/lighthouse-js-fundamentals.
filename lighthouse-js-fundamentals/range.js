const range = (start, end, step) => {
  let rangeArray = [];
  for (let i = start; i <= end; i = i + step) {
    rangeArray.push(i)
  }
  return rangeArray;
  
} 

console.log(range(0, 10, -1));
console.log(range(10, 30, 5));
console.log(range(-5, 2, 3));
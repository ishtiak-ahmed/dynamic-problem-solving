const gridTraveller = (m, n) => {
  if(m === 1 && n === 1) return 1;
  if(m === 0 || n === 0) return 0;
  return gridTraveller(m -1, n) + gridTraveller(m, n - 1)
}
const gridTravellerOptimized = (m, n, memo = {}) => {
  const key = `${m},${n}`
  if (key in memo) return memo[key]
  if(m === 1 && n === 1) return 1;
  if(m === 0 || n === 0) return 0;
  memo[key] = gridTravellerOptimized(m -1, n, memo) + gridTravellerOptimized(m, n - 1, memo)
  return memo[key];
}

// console.log(gridTraveller(1,1));
// console.log(gridTraveller(1,3));
// console.log(gridTraveller(3,3));
console.log(gridTraveller(5,5));
console.log(gridTraveller(10,11));
console.log(new Date().toLocaleTimeString());
console.log(gridTravellerOptimized(180,180));
console.log(new Date().toLocaleTimeString());
const canSum = (target, nums) => {
  if(target === 0) return true;
  if(target < 0) return false;

  nums.forEach(num => {
    const newTarget = target - num;
    if(canSum(newTarget, nums) === true) return true;
  })

  return false;
}

console.log(canSum(5, [2,3,4]));
console.log(canSum(7, [5,3,4]));
console.log(canSum(5, [7,2,4]));
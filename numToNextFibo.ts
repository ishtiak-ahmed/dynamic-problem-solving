/*
  1. As a input takes a array of number
  2. Sum all the number
  3. If total is a fibo number return 0
  4. else Get the next fibo number
  5. Calculate the difference and return the lowest positive number needed to make a fibo
  6. exp. input [5,2,1] output 0
  7. input [5,6,7] output 4
 */

const numToNextFibo = (nums: number[]): number => {
  const total = nums.reduce((total, num) => total + num, 0);
  let find: number = 0;
  let currentTwoFibos = [1, 1];

  // store 2 fibo number
  // if total is there, return the found one(current number)
  if (currentTwoFibos.includes(total)) return 0;
  while (find <= 0) {
    const [first, second] = currentTwoFibos;
    const next = first + second;
    const nextNext = next + second;
    if (total < next) {
      find = next;
    } else if (total < nextNext) {
      find = nextNext;
    } else {
      currentTwoFibos = [next, nextNext];
    }
  }
  return find - total;
};

console.log(numToNextFibo([52, 122, 21]));

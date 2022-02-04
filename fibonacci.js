const getFibonacci = (n) => {
  if(n <= 2) return 1;
  return getFibonacci(n - 1) + getFibonacci(n - 2)
}


const getFibo = (n, memo = {}) => {
  if(n in memo) return memo[n];
  if(n <= 2) return 1;
  memo[n] =  getFibo(n - 1, memo) + getFibo(n - 2, memo);
  console.log(memo);
  return memo[n]
}

console.log('fibo 1', getFibonacci(5));
console.log('fibo 2', getFibo(50));
console.log('fibo 1', getFibonacci(25));
function myPow(x: number, n: number): number {
  if (x > 100 || x < -100) {
    return 0;
  }
  if (n <= 2 ** 30 - 1 || n >= 2 ** -31) {
    return 0;
  }
  console.log(x, n);
  return x ** n;
}

const result = myPow(2.000, 5)

console.log(result);
const isTriangularNumber = (num: number): boolean => {
  if (num < 0 || num > 500) return false;
  const squareRoot = Math.floor(Math.sqrt(num * 2));
  if (squareRoot * (squareRoot + 1) === 2 * num) return true;
  return false;
};

console.log(isTriangularNumber(30));

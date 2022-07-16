export const isPrimeNumber = (number: number) => {
  if (number <= 1) return false;
  for (let i = 2, s = Math.sqrt(number); i <= s; i++) {
    if (number % i === 0) return false;
  }
  return true;
};

export const isSquare = (number: number) => {
  return number > 0 && Math.sqrt(number) % 1 === 0;
};

export const isFibonacci = (number: number) => {
  return isSquare(5 * number ** 2 + 4) || isSquare(5 * number ** 2 - 4);
};

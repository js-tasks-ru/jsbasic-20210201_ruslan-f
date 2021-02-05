/**
 * Factorial
 * @param {number} n
 * @returns {number}
 */
function factorial(n) {
  let value = n;
  let result = 0;
  if (n === 0 || n === 1) {
    return 1;
  }

  for (let i = 1; i < n; i++) {
    result = value * (n - i);
    value = result;
  }
  return result;
}

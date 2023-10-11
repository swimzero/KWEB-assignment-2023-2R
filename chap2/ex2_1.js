const factorial = num => {
  let result = 1;
  for(let i = 0; i < num; i++) result = result*(i + 1);

  return result;
};

const permutation = (n, r) => {
  return factorial(n) / factorial(n - r);
};

const combination = (n, r) => {
  return permutation(n, r) / factorial(r);
};

const multiPermutation = (n, r) => {
  return n ** r;
};
const multiCombination = (n, r) => {
  return combination(n + r - 1, r);
};
module.exports = {
  combination,
  permutation,
  multiCombination,
  multiPermutation,
};

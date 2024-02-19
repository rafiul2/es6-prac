const add = (x, y) => x+y;
const result = add(5, 8);

const give5 = () => 5;
const result2 = give5();

const doMath = (x, y) => {
  const sum = x + y;
  const diff = x - y;
  const result = sum * diff;
  return result;
};
const result3 = doMath(7, 5);
console.log(result3);
// console.log(result2);
// console.log(result);
function sum(...rest) {
  return rest.reduce((args, sum) => args + sum, 0);
}
console.log(sum(1, 2, 3, 4, 5));
const arr = [1, 2, 3, 4, 5, 6, 7, 8];
const [first, second, ...rest] = arr;
console.log(first, second, rest);
const obj = {
  a: 1,
  b: 2,
  c: "sdfds",
  d: () => {
    console.log("Hello");
    return () => {
      console.log("World");
    };
  },
};
const { a, b, ...rest1 } = obj;
console.log(a, b);
rest1.d()();
(function () {
  console.log("Hello");
})();
// console.log(val2);
const ans = arr.slice(1, 2);
console.log(ans);
console.log(arr);
let z = Number.MAX_VALUE;
let y = Number.MIN_VALUE;
console.log(z, y);

const arr = [1, 2, 3, 4, 5, 6];
const newarr = [8, 9, 1, 6, 88, 66];
// val = arr.map((item) => [item, ...newarr]);
arr.map((items) => newarr.push(items));
console.log(newarr);
// console.log(newarr);
const obj = {
  a: 1,
  b: 2,
  c: "shah lucky",
};
console.log(JSON.stringify(obj));
const data = JSON.stringify(obj);
console.log(JSON.parse(data));

const p = new Promise((resolve, reject) => {
  setTimeout(() => {
    reject("shah lucky");
  }, 3000);
});
p.then((value) => {
  console.log(value + "promise resolved");
}).catch((error) => {
  console.log(error + " promise rejected");
});

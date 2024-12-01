/// learning spread operator
const arr1 = [1, 2, 3, 4, 5, 6];
const arr2 = [5, 6, 7, 8, 9, 10];
const merged = [...arr1, ...arr2];
console.log(merged);

const obj = [
  {
    name: "John",
    age: 30,
  },
];
const obj2 = [
  {
    occupation: "Developer",
    location: "New York",
  },
];

const objemerged = [...obj2, ...obj];
console.log(objemerged);
function sum(a, b, c) {
  return a + b + c;
}
setTimeout(() => {
  console.log(sum(...arr1));
}, 5000);

new Promise((resolve, reject) => {
  resolve(1);
})
  .then((e) => {
    console.log(e + "promise resolved");
  })
  .catch((error) => {
    console.log("error");
  });

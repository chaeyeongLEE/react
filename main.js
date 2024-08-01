const arr = [1, 2, 3, 4, 5];

console.log(arr);

arr.map((el, index) => {
  return el * 3;
});

const resultArr = arr.map((el, index) => el * 3);

console.log(resultArr);

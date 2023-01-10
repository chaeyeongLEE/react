// @ts-check

/*const arr = [1, 2, 3, 4, 5];
console.log(arr);

const copyArr = [...arr];
console.log(copyArr);

console.log(arr === copyArr); */

function foo(a, b, c, d, e, f, g) {}

const obj = {
  pororo: '뽀로로',
  lupy: '루피',
  crong: '크롱',
};

console.log('zm');

const copyObj = { ...obj, lupy: 'lupy' };

console.log(obj);
console.log(copyObj);
console.log(obj === copyObj);

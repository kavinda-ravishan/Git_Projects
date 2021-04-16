function add1(a, b) {
  return a + b;
}

console.log(add1(1, 2));

function add2(a) {
  return function (b) {
    return a + b;
  };
}

const add3 = add2(1);
console.log(add3(2));

console.log(add2(1)(2));

const add4 = (a) => (b) => a + b;
console.log(add4(1)(2));

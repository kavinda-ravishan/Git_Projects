//Immutability with array

const num = [0, 1, 2, 3];

const index = num.indexOf(2);
const newNum = [...num.slice(0, index), 4, ...num.slice(index)];

console.log(newNum);

//rm
const rmTwo = num.filter((n) => n !== 2);
console.log(rmTwo);

//update
const updateTwo = num.map((n) => (n === 2 ? 200 : n));
console.log(updateTwo);

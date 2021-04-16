//Immutability

const person = { name: "kavinda", color: "red", add: { city: "colombo" } };

const updated1 = Object.assign({}, person, { name: "ravishan", age: 23 });
updated1.add.city = "trinco";
console.log(person);

const updated2 = { ...person, name: "a", age: 24, add: { ...person.add } };
updated1.add.city = "colombo";

console.log(person);
console.log(updated1);
console.log(updated2);

//Immutability lib

const { Map } = require("immutable");

let book = Map({ title: "harry potter" });

console.log(book.get("title"));
console.log(book.toJS());

function publish(book) {
  return book.set("isPublish", true);
}

book = publish(book);

console.log(book.toJS());

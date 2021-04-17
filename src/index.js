//Immutability lib

const { produce } = require("immer");

let book = { title: "harry potter" };

function publish(book) {
  return produce(book, (draftBook) => {
    draftBook.isPublish = true;
  });
}

let updatedBook = publish(book);

console.log(book);
console.log(updatedBook);

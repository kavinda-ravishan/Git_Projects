import { compose, pipe } from "lodash/fp";

//function composition
const trim = (str) => str.trim();
//const wrap = (type, str) => `<${type}>${str}</${type}>`;
const wrap = (type) => (str) => `<${type}>${str}</${type}>`;
const toLowerCase = (str) => str.toLowerCase();

const transform = pipe(toLowerCase, trim, wrap("span"));
console.log(transform("  WoRlD   "));

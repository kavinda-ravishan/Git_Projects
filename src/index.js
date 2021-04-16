import { compose, pipe } from "lodash/fp";

//function composition
const trim = (str) => str.trim();
const wrapDiv = (str) => `<div>${str}<div>`;
const toLowerCase = (str) => str.toLowerCase();

console.log(wrapDiv(trim(toLowerCase("      loL   "))));

//composing and piping

const transform1 = compose(wrapDiv, trim, toLowerCase);
console.log(transform1("  HeLlo   "));

const transform2 = pipe(toLowerCase, trim, wrapDiv);
console.log(transform2("  WoRlD   "));

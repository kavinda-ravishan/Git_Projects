//function composition
const trim = (str) => str.trim();
const wrapDiv = (str) => `<div>${str}<div>`;
const toLowerCase = (str) => str.toLowerCase();

console.log(wrapDiv(trim(toLowerCase("      loL   "))));

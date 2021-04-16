//Pure functions
//same arg => same result

const { random } = require("lodash");

//not a pure function
function rand(num) {
  return num * Math.random();
}

//not a pure function
function mul(num) {
  return num * 2;
}

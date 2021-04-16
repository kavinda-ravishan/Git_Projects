function sayHello1() {
  return "hello1";
}

const fn1 = sayHello1;

//higher order function take function as arg or return function or both

//higher order function
function greet1(fnMessage) {
  console.log(fnMessage());
}

greet1(fn1);

//higher order function
function sayHello2() {
  return function () {
    return "hello2";
  };
}

const fn2 = sayHello2();

//higher order function
function greet2(fnMessage) {
  console.log(fnMessage());
}

greet2(fn2);

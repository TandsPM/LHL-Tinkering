const sayHello = function (name) {
  console.log("Hello, " + name);
};

sayHello("Caliban");
sayHello("Miranda");
sayHello("Ferdinand");


const sayHelloToConsole = function (name) {
  console.log("Hello, " + name);
};
sayHelloToConsole("John");


// this returns the string 'Hello, Beth' to a variable
// nothing will get output to the console
const returnSayHello = function (name) {
  return "Hello, " + name;
};
const greeting = returnSayHello("Beth");
//can still console.log later
console.log(greeting);
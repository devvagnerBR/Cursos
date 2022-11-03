let log = "log";
console[log]("Hello World 👽🌹");

const somar = (a, b) => {
  return a + b;
};

let operation = somar;
console.log(operation(4, 5)); // 9

operation = (a, b) => {
  return a - b;
};

console.log(operation(4, 5)); // -1


console.log("process.argv",process.argv)
let myArgv = process.argv.slice(2);

const estimate = require('../Exercise 3/additions');
console.log(estimate.Thermal(5))
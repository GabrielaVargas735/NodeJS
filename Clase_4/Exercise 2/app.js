console.log("process.argv",process.argv)
let myArgv = process.argv.slice(2);

const calc = require('./addition.js');
console.log(calc.Volume(Number(myArgv[0]),Number(myArgv[1])))
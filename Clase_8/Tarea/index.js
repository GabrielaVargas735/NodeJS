let lista = require("./lista");
console.log('process.argv', process.argv)
let myArgv = process.argv.slice(2);

console.log(lista.lista_frutas())

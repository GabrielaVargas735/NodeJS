console.log('process.argv', process.argv)
let myArgv = process.argv.slice(2);

const num1 = Number(myArgv[0]);
const num2 = Number(myArgv[1]);
const num3 = Number(myArgv[2]);
console.log(promedio(num1,num2,num3));

function promedio(num1, num2, num3){
    return (num1 + num2 + num3) / 3;
}


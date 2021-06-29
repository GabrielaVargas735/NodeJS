console.log('process.argv', process.argv)
let myArgv = process.argv.slice(2);

const num1 = Number(myArgv[0]);
const num2 = Number(myArgv[1]);
const num3 = Number(myArgv[2]);
console.log(old(num1,num2,num3));

function old(num1, num2, num3){
    let a = num1;
    let b = num2;
    let c = num3;

    if(a > b && a > c){
        return `El Número es: ${a}`;
    } else if(b > a && b > c){
        return `El Número es: ${b}`;
    } else if(c > a && c > b){
        return `El Número es: ${c}`;
    }
}

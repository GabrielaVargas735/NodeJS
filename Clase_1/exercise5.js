console.log('process.argv', process.argv)
let myArgv = process.argv.slice(2);

const num1 = Number(myArgv[0]);
const num2 = Number(myArgv[1]);
console.log(divition(num1,num2));

function divition(argv1, argv2){
    if(argv1 === 0 || argv2 === 0){
        return "ERROR";
    } else{
        return argv1 / argv2;
    }
}

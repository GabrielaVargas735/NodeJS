console.log('process.argv', process.argv)
let myArgv = process.argv.slice(2);

const num1 = Number(myArgv[0]);
console.log(det(num1));

function det(num){
    if(num < 0){
        return "El número es negativo";
    } else{
        return "El número es positivo";
    }    
}

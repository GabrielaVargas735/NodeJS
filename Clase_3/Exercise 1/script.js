let arg = process.argv.slice(2);
console.log( process.argv, 'process.argv');

function num(n){
    if( n > 0){
        for (let i = 0; i < n; i++) {
            return n (n+1) / 2;
        }
    } else{
        return "Ingrese un número positivo."
    }
}
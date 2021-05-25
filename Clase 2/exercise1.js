let num = parseFloat(prompt("Ingrese un número"));
let total = 1;

for(let i = 1; i <= num; i++){
    total = total * i; 
}
console.log("El factorial del número " + num + " es: " + total);

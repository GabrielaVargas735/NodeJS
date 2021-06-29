const colors = require('colors/safe')
const args = process.argv.slice(2);

const [nombre = "amigo"] = args; 
const hora = new Date().getHours();

if(hora >= 6 && hora < 12){
    console.log(colors.green(`Buenos dias ${nombre}`))
} else if(hora >= 12 && hora < 18){
    console.log(colors.bgYellow(`Buenas tardes ${nombre}`))
} else{
    console.log(colors.rainbow(`Buenas noches ${nombre}`))
}
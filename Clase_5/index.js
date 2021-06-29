const fs = require("fs");
let path = process.cwd();

let personas = ["Nombre", "Apellido", "Edad", "Oliver", "Brown", 20, "Jack", "Murphy", 35, "Charlie", "Rodriguez", 38, "George", "Smith", 22, "James", "Anderson", 23, "William", "Walsh", 25];

for (let i = 0; i < personas.length; i+=3) {
    fs.appendFile(`${path}/personas.txt`, `${personas[i]},${personas[i+1]},${personas[i+2]}\n`, function(err, data){
        if(err)
            return console.error(err);
   
    })
}

////////////////////////////////////////////////////////////////////////////////////////////////////////////////

fs.readFile(`${path}/disney_movies.txt`, "UTF8", function(err, movies){
    if(err)
        return console.error(err)

    const convertidor = movies.split(/\r?\n/);

    for (i in convertidor) {
        let pelicula = convertidor[i].split(';');
        fs.appendFile('disney_list.txt', `Movie: ${pelicula[0]}\nRelease Date: ${pelicula[1]}\nGenre: ${pelicula[2]}\n \n`, function (err) {
            if (err)
                return console.error(err)
        });
    }
});
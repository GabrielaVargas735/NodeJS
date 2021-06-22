exports.lista_frutas = function(fruta){
    let frutas = ["Manzana", "Pera", "Uva", "Sandía", "Banano", "Melocotón", "Piña", "Maracuyá", "Mandarina", "Mango"];
    let f = false;

    for(let i = 0; i < frutas.length; i++){
        if(frutas[i] == fruta){
            f = true;
        }
    }

    if(f = true){
        return ("La fruta si está en la lista")
    } else {
        return ("La fruta no está en la lista")
    }
}


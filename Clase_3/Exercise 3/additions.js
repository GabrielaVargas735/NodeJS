exports.Thermal = function temperature(num){
    if (num < 10){
        return 'La temperatura está a menos de 10 grados. Hace mucho frio'
    } else if (num >= 10  && num <= 15){
        return 'La temperatura está entre los 10 y los 15 grados. Hace poco frio'
    } else if (num >= 16  && num <= 24){
        return 'La temperatura está entre los 16 y 24 grados. Hace una temperatura normal'
    } else if (num >= 25  && num <= 30){
        return 'La temperatura está entre los 25 y 30 grados. Hace poco calor'
    } else if (num > 30){
        return 'La temperatura está a más de 30 grados. Hace mucho calor'
    }
}
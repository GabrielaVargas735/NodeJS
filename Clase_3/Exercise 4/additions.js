exports.Program = function calc(o){
    let a = 5;
    let b = 15;

    if (o == '+') {
        return o = a + b;
    } else if (o == '-'){
        return o = a - b;
    }else if (o == '*') {
        return o = a * b;
    }else if (o == '/'){
        if (a == 0 || b == 0){
            return 'ERROR';
        }else{
            return o = a / b;
        }
    }
}
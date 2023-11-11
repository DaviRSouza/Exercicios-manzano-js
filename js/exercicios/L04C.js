export function L04C(){
    let numero = 1;

    do {
        if (numero % 4 === 0) {
            console.log(numero);
        }
        numero++;
    } while (numero < 200);    
}
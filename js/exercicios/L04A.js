export function L04A(){
    let numero = 15;

    do {
        let quadrado = numero * numero;
        alert(`${numero} ao quadrado é ${quadrado}`);
        numero++;
    } while (numero <= 200);    
}
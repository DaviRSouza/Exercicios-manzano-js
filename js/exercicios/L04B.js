export function L04B(){
    let numero = 1;
    let somatorio = 0;
    
    do {
        if (numero % 2 === 0) {
            somatorio += numero;
        }
        numero++;
    } while (numero <= 500);
    
    alert(`O somatório dos valores pares de 1 a 500 é: ${somatorio}`);    
}
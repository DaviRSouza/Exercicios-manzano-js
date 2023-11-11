export function L03C(){
    alert("Somatório dos Valores Pares de 1 a 500");

    let somatorio = 0;
    let numero = 1;
    
    while (numero <= 500) {
        if (numero % 2 === 0) {
            somatorio += numero;
        }
        numero++;
    }

    alert(`O somatório dos valores pares de 1 a 500 é: ${somatorio}`);
}
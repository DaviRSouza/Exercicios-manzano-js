export function L04G(){
    let numero = 1;
    let resultadoFatorial = 1;
    
    do {
        let fatorial = 1;
        let contador = 1;
    
        do {
            fatorial *= contador;
            contador++;
        } while (contador <= numero);
    
        resultadoFatorial *= fatorial;
        numero += 2;
    } while (numero <= 10);
    
    console.log(`O resultado do fatorial dos valores ímpares de 1 a 10 é: ${resultadoFatorial}`);
}    
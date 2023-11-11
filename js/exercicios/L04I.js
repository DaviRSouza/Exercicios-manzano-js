export function L04I(){
    let valor;
    let maiorValor = Number.NEGATIVE_INFINITY;
    let menorValor = Number.POSITIVE_INFINITY;
    
    do {
        valor = parseInt(prompt("Digite um valor positivo (ou um valor negativo para encerrar):"));
    
        if (valor >= 0) {
            if (valor > maiorValor) {
                maiorValor = valor;
            }
    
            if (valor < menorValor) {
                menorValor = valor;
            }
        }
    
    } while (valor >= 0);
    
    console.log(`Maior valor informado: ${maiorValor}`);
    console.log(`Menor valor informado: ${menorValor}`);    
}    
export function L03L(){
    alert("Encontre o Maior e o Menor Valor");

    let maiorValor = Number.MIN_SAFE_INTEGER;
    let menorValor = Number.MAX_SAFE_INTEGER;
    
    while (true) {
        let valor = parseInt(prompt("Digite um valor positivo (ou um valor negativo para encerrar):"));
    
        if (valor < 0) {
            break;
        }
    
        if (valor > maiorValor) {
            maiorValor = valor;
        }
    
        if (valor < menorValor) {
            menorValor = valor;
        }
    }
    alert(`Maior Valor: ${maiorValor}\nMenor Valor: ${menorValor}`);
}
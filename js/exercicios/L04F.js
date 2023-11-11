export function L04F(){
    let totalValores = 0;
    let somaValores = 0;
    let mediaAritmetica = 0;
    let valor;
    
    do {
        valor = parseFloat(prompt("Digite um valor positivo (ou um valor negativo para encerrar):"));
    
        if (valor >= 0) {
            totalValores++;
            somaValores += valor;
        }
    } while (valor >= 0);
    
    if (totalValores > 0) {
        mediaAritmetica = somaValores / totalValores;
        console.log(`Total de valores lidos: ${totalValores}`);
        console.log(`Somatório dos valores: ${somaValores}`);
        console.log(`Média aritmética: ${mediaAritmetica}`);
    } else {
        console.log("Nenhum valor positivo foi fornecido.");
    }    
}    
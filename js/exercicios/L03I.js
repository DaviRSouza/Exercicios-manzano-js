export function L03I(){
    alert("Soma e Média de 10 Valores");

    let soma = 0;
    let contador = 0;
    
    while (contador < 10) {
        let valor = parseFloat(prompt("Digite um valor:"));
    
        if (!isNaN(valor)) {
            soma += valor;
            contador++;
        } else {
            alert("Digite um valor numérico válido.");
        }
    }
    
    let media = soma / 10;
    
    alert(`Total da Soma: ${soma}\nMédia Aritmética: ${media.toFixed(2)}`);
}
export function L01E(){
    alert("Cálculo de Prestação em Atraso");
    let valorOriginal = parseFloat(prompt("Digite o valor original da prestação:"));
    let taxaJuros = parseFloat(prompt("Digite a taxa de juros (em porcentagem):"));
    let tempoAtraso = parseFloat(prompt("Digite o tempo em atraso (em meses):"));
    let prestacaoAtraso = valorOriginal + (valorOriginal * (taxaJuros / 100) * tempoAtraso);
    alert(`O valor da prestação em atraso é: R$ ${prestacaoAtraso.toFixed(2)}`);
}
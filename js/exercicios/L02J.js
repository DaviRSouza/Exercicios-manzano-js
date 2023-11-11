export function L02J(){
    alert("Verificação de Valor na Faixa Permitida");

    let valor = parseInt(prompt("Digite um valor entre 1 e 9:"));
    
    if (valor >= 1 && valor <= 9) {
        alert("O valor está na faixa permitida.");
    } else {
        alert("O valor está fora da faixa permitida.");
    }
}
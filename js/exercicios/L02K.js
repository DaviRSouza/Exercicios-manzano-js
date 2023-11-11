export function L02K(){
    alert("Verificação de Valor Menor ou Igual a Três");

    let valor = parseInt(prompt("Digite um valor inteiro:"));
    
    if (valor <= 3) {
        alert(`O valor ${valor} não é maior que três.`);
    }    
}
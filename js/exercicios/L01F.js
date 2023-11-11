export function L01F(){
    alert("Troca de Valores entre Variáveis A e B");

    let A = prompt("Digite o valor para a variável A:");
    
    let B = prompt("Digite o valor para a variável B:");
    
    let temp = A;
    A = B;
    B = temp;
    
    alert(`Valores trocados: A = ${A} e B = ${B}`);
}
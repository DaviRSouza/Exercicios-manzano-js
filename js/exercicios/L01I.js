export function L01I() {
    alert("Cálculo do Quadrado da Diferença");

    let A = parseInt(prompt("Digite o valor de A (inteiro):"));
    
    let B = parseInt(prompt("Digite o valor de B (inteiro):"));
    
    let resultado = Math.pow(A - B, 2);
    
    alert(`O quadrado da diferença entre A e B é: ${resultado}`);
}
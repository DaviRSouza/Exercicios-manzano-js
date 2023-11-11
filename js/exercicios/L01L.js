export function L01L() {
    alert("Soma dos Quadrados de Três Valores");

    let A = parseFloat(prompt("Digite o valor de A:"));
    
    let B = parseFloat(prompt("Digite o valor de B:"));
    
    let C = parseFloat(prompt("Digite o valor de C:"));
    
    let somaQuadrados = Math.pow(A, 2) + Math.pow(B, 2) + Math.pow(C, 2);
    
    alert(`A soma dos quadrados de A, B e C é: ${somaQuadrados}`);
}
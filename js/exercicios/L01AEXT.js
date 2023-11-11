export function L01AEXT() {
    alert("Operações com Quatro Valores Inteiros");

    let A = parseInt(prompt("Digite o valor de A (inteiro):"));
    let B = parseInt(prompt("Digite o valor de B (inteiro):"));
    let C = parseInt(prompt("Digite o valor de C (inteiro):"));
    let D = parseInt(prompt("Digite o valor de D (inteiro):"));
    
    let P1 = A * C;
    let P2 = B * D;
    let S = B + D;
    
    alert(`Produto do primeiro com o terceiro valor (P1): ${P1}`);
    alert(`Produto do segundo com o quarto valor (P2): ${P2}`);
    alert(`Soma do segundo com o quarto valor (S): ${S}`);
}
export function L01M() {
    alert("Quadrado da Soma de Três Valores");

    let A = parseFloat(prompt("Digite o valor de A:"));
    let B = parseFloat(prompt("Digite o valor de B:"));
    let C = parseFloat(prompt("Digite o valor de C:"));
    
    let soma = A + B + C;
    let quadradoDaSoma = Math.pow(soma, 2);
    
    alert(`O quadrado da soma de A, B e C é: ${quadradoDaSoma}`);
}
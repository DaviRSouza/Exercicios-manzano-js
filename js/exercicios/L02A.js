export function L02A(){
    alert("Diferença entre o Maior e o Menor Valor");

    let valor1 = parseInt(prompt("Digite o primeiro valor inteiro:"));
    
    let valor2 = parseInt(prompt("Digite o segundo valor inteiro:"));
    
    let diferenca = Math.abs(valor1 - valor2);
    
    alert(`A diferença entre o maior e o menor valor é: ${diferenca}`);
}
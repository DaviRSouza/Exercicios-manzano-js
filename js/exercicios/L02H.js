export function L02H(){
    alert("Identificação do Maior e Menor Valores");

    let numero1 = parseInt(prompt("Digite o primeiro número inteiro:"));
    let numero2 = parseInt(prompt("Digite o segundo número inteiro:"));
    let numero3 = parseInt(prompt("Digite o terceiro número inteiro:"));
    let numero4 = parseInt(prompt("Digite o quarto número inteiro:"));
    let numero5 = parseInt(prompt("Digite o quinto número inteiro:"));
    
    let maior = Math.max(numero1, numero2, numero3, numero4, numero5);
    let menor = Math.min(numero1, numero2, numero3, numero4, numero5);
    
    alert(`O maior valor é: ${maior}\nO menor valor é: ${menor}`);    
}
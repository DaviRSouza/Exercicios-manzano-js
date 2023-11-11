export function L01C(){
    alert("Cálculo do Volume de uma Lata de Óleo");

    let raio = parseFloat(prompt("Digite o valor do raio da lata (em centímetros):"));
    
    let altura = parseFloat(prompt("Digite o valor da altura da lata (em centímetros):"));
    
    let volume = 3.14159 * Math.pow(raio, 2) * altura;
    
    alert(`O volume da lata de óleo é: ${volume.toFixed(2)} centímetros cúbicos`);
}
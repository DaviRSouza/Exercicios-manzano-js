export function L01H() {
    alert("Cálculo de Volume de uma Caixa Retangular");

    let comprimento = parseFloat(prompt("Digite o comprimento da caixa (em unidades de medida):"));
    
    let largura = parseFloat(prompt("Digite a largura da caixa (em unidades de medida):"));
    
    let altura = parseFloat(prompt("Digite a altura da caixa (em unidades de medida):"));
    
    let volume = comprimento * largura * altura;
    
    alert(`O volume da caixa retangular é: ${volume} unidades cúbicas`);
}
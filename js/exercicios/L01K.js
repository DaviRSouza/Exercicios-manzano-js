export function L01K() {
    alert("Conversão de Real para Dólar");

    let cotacaoDolar = parseFloat(prompt("Digite a cotação do dólar (valor em reais por dólar):"));
    
    let quantidadeReais = parseFloat(prompt("Digite a quantidade de reais disponíveis:"));
    
    let valorEmDolares = quantidadeReais / cotacaoDolar;
    
    alert(`O valor em dólares é: $ ${valorEmDolares.toFixed(2)}`);
}
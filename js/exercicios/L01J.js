export function L01J() {
    alert("Conversão de Dólar para Real");

    let cotacaoDolar = parseFloat(prompt("Digite a cotação do dólar (valor em reais por dólar):"));
    
    let quantidadeDolares = parseFloat(prompt("Digite a quantidade de dólares disponíveis:"));
    
    let valorEmReais = quantidadeDolares * cotacaoDolar;
    
    alert(`O valor em reais é: R$ ${valorEmReais.toFixed(2)}`);
}
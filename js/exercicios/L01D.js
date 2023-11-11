export function L01D(){
    alert("Cálculo de Consumo de Combustível em uma Viagem");

    let tempo = parseFloat(prompt("Digite o tempo gasto na viagem (em horas):"));
    
    let velocidade = parseFloat(prompt("Digite a velocidade média durante a viagem (em Km/h):"));
    
    let distancia = tempo * velocidade;
    
    let litrosUsados = distancia / 12;
    
    alert(`Velocidade Média: ${velocidade} Km/h`);
    alert(`Tempo Gasto na Viagem: ${tempo} horas`);
    alert(`Distância Percorrida: ${distancia} Km`);
    alert(`Quantidade de Litros Usados: ${litrosUsados.toFixed(2)} litros`);
}
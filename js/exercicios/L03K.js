export function L03K(){
    alert("Cálculo da Área Total de uma Residência");

    let areaTotal = 0;
    
    while (true) {
        let nomeComodo = prompt("Digite o nome do cômodo:");
        let largura = parseFloat(prompt(`Digite a largura do(a) ${nomeComodo}:`));
        let comprimento = parseFloat(prompt(`Digite o comprimento do(a) ${nomeComodo}:`));
    
        let areaComodo = largura * comprimento;
    
        alert(`Área do(a) ${nomeComodo}: ${areaComodo.toFixed(2)} metros quadrados`);
    
        areaTotal += areaComodo;
    
        let continuar = prompt("Deseja calcular outro cômodo? (SIM/NAO)").toUpperCase();
    
        if (continuar !== "SIM") {
            break;
        }
    }
    alert(`Área Total da Residência: ${areaTotal.toFixed(2)} metros quadrados`);
    
}
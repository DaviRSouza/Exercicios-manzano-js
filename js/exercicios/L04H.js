export function L04H(){
    let areaTotal = 0;

    do {
        let nomeComodo = prompt("Informe o nome do cômodo:");
        let largura = parseFloat(prompt("Informe a largura do cômodo em metros:"));
        let comprimento = parseFloat(prompt("Informe o comprimento do cômodo em metros:"));
    
        let areaComodo = largura * comprimento;
        areaTotal += areaComodo;
    
        console.log(`A área do ${nomeComodo} é: ${areaComodo} metros quadrados.`);
    
        let continuar = prompt("Deseja calcular a área de outro cômodo? (Digite SIM ou NAO)").toUpperCase();
        
        if (continuar !== "SIM" && continuar !== "NAO") {
            console.log("Opção inválida. O programa será encerrado.");
            break;
        }
    
        if (continuar === "NAO") {
            console.log(`A área total da residência é: ${areaTotal} metros quadrados.`);
        }
    
    } while (true);    
}    
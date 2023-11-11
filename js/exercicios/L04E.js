export function L04E(){
    let contador = 1;
    let somaFatoriais = 0;
    
    do {
        let valor = parseInt(prompt(`Digite o ${contador}º valor:`));
        let fatorial = 1;
    
        for (let i = 1; i <= valor; i++) {
            fatorial *= i;
        }
    
        somaFatoriais += fatorial;
        contador++;
    } while (contador <= 15);
    
    console.log(`Total do somatório das fatoriais: ${somaFatoriais}`);
}    
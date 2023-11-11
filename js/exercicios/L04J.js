export function L04J(){
    let dividendo = parseInt(prompt("Digite o dividendo:"));
    let divisor = parseInt(prompt("Digite o divisor:"));
    
    let quociente = 0;
    let resto = dividendo;
    
    while (resto >= divisor) {
        resto -= divisor;
        quociente++;
    }
    
    console.log(`Resultado inteiro da divisão: ${quociente}`);    
}    
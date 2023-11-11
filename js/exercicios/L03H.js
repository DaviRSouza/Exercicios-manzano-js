export function L03H(){
    alert("Conversão de Graus Celsius para Fahrenheit de 10 em 10 graus");
    let celsius = 10;
    
    while (celsius <= 100) {
        let fahrenheit = (celsius * 9/5) + 32;
        
        alert(`Celsius: ${celsius} | Fahrenheit: ${fahrenheit.toFixed(2)}`);
    
        celsius += 10;
    }
}
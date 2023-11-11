export function L01B(){
    alert("Conversão de Temperatura de Fahrenheit para Celsius");

    let temperaturaFahrenheit = parseFloat(prompt("Digite a temperatura em graus Fahrenheit:"));
    
    let temperaturaCelsius = (temperaturaFahrenheit - 32) * (5/9);
    
    alert(`A temperatura em graus Celsius é: ${temperaturaCelsius.toFixed(2)}°C`);    
}
export function L01A(){
    alert("Conversão de Temperatura de Celsius para Fahrenheit");

    let temperaturaCelsius = parseFloat(prompt("Digite a temperatura em graus Celsius:"));
    
    let temperaturaFahrenheit = (9 * temperaturaCelsius + 160) / 5;
    
    alert(`A temperatura em graus Fahrenheit é: ${temperaturaFahrenheit.toFixed(2)}°F`);    
}
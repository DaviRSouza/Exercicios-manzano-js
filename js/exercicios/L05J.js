export function L05J(){
    for (let celsius = 10; celsius <= 100; celsius += 10) {
        let fahrenheit = (9 / 5) * celsius + 32;
        alert(`${celsius} °C\n${fahrenheit.toFixed(2)} °F`);
    }
}
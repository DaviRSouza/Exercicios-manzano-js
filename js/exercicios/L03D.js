export function L03D(){
    alert("Valores Numéricos Ímpares de 0 a 20");
    let numero = 0;
    
    while (numero <= 20) {
        if (numero % 2 !== 0) {
            alert(`Número ímpar: ${numero}`);
        }
        numero++;
    }    
}
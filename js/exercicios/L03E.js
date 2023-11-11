export function L03E(){
    alert("Potências de 3 de 0 a 15");
    let expoente = 0;
    let resultado = 1;
    
    while (expoente <= 15) {
        alert(`3^${expoente} = ${resultado}`);
        resultado *= 3;
        expoente++;
    }
}
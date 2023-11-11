export function L05F(){
    let resultado = "";

    for (let i = 1; i < 200; i++) {
        if (i % 4 === 0) {
            resultado += i + "\n";
        }
    }

    alert("Números divisíveis por 4 menores que 200:\n" + resultado);
}
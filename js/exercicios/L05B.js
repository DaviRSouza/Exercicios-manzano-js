export function L05B(){
    let numero = parseInt(prompt("Digite um número para ver a tabuada:"));

    if (!isNaN(numero)) {
        for (let i = 1; i <= 10; i++) {
            let resultado = numero * i;
            alert(`${numero} x ${i} = ${resultado}`);
        }
    } else {
        alert("Por favor, insira um número válido.");
    }
}  
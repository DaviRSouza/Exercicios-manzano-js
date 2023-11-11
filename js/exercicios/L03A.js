export function L03A(){
    alert("Tabuada de Multiplicar usando While");

    let numero = parseInt(prompt("Digite o número para a tabuada:"));
    
    let contador = 1;
    
    while (contador <= 10) {
        let resultado = numero * contador;
        alert(`${numero} x ${contador} = ${resultado}`);
        contador++;
    }
    
}
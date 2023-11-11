export function L03G(){
    alert("Série de Fibonacci até o Décimo Quinto Termo");

    let termoAtual = 1;
    let termoAnterior = 0;
    let resultado = 0;
    let contador = 0;
    
    while (contador < 15) {
        alert(resultado);
    
        termoAnterior = termoAtual;
        termoAtual = resultado;
        resultado = termoAtual + termoAnterior;
    
        contador++;
    }
}
export function L05K(){
    function calcularFatorial(numero) {
        let fatorial = 1;
        for (let i = 1; i <= numero; i++) {
            fatorial *= i;
        }
        return fatorial;
    }


    for (let valor = 1; valor <= 10; valor += 2) {
        let fatorial = calcularFatorial(valor);
        alert(`${valor}! = ${fatorial}`);
    }
}
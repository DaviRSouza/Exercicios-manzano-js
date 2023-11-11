export function L05I(){
    let termos = 15;
    let primeiroTermo = 1;
    let segundoTermo = 1;

    alert("Série de Fibonacci até o décimo quinto termo:");

    alert(primeiroTermo);
    alert(segundoTermo);

    for (let i = 3; i <= termos; i++) {
        let proximoTermo = primeiroTermo + segundoTermo;
        alert(proximoTermo);
        primeiroTermo = segundoTermo;
        segundoTermo = proximoTermo;
    }
}
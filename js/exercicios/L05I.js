export function L05I(){
    let termos = 15;
    let primeiroTermo = 1;
    let segundoTermo = 1;

    console.log("Série de Fibonacci até o décimo quinto termo:");

    console.log(primeiroTermo);
    console.log(segundoTermo);

    for (let i = 3; i <= termos; i++) {
        let proximoTermo = primeiroTermo + segundoTermo;
        console.log(proximoTermo);
        primeiroTermo = segundoTermo;
        segundoTermo = proximoTermo;
    }
}
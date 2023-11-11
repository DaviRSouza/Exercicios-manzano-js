export function L03B(){
    alert("Soma dos Cem Primeiros Números Inteiros usando While");
    let total = 0;
    let numero = 1;
    while (numero <= 100) {
        total += numero;
        numero++;
    }
    
    alert(`A soma dos cem primeiros números inteiros é: ${total}`);
    
}
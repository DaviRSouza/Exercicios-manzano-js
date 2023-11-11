export function L03J(){
    alert("Soma e Média dos Valores Pares entre 50 e 70");

    let soma = 0;
    let contador = 0;
    
    for (let i = 50; i <= 70; i++) {
        if (i % 2 === 0) {
            soma += i;
            contador++;
        }
    }
    
    let media = soma / contador;
    
    alert(`Total da Soma dos Pares: ${soma}\nMédia Aritmética dos Pares: ${media.toFixed(2)}`);
}
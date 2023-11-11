export function L02G(){
    alert("Números Divisíveis por 2 e 3");

    let numero1 = parseInt(prompt("Digite o primeiro número inteiro:"));
    let numero2 = parseInt(prompt("Digite o segundo número inteiro:"));
    let numero3 = parseInt(prompt("Digite o terceiro número inteiro:"));
    let numero4 = parseInt(prompt("Digite o quarto número inteiro:"));
    
    if (numero1 % 2 === 0 && numero1 % 3 === 0) {
        alert(`O número ${numero1} é divisível por 2 e 3.`);
    }
    
    if (numero2 % 2 === 0 && numero2 % 3 === 0) {
        alert(`O número ${numero2} é divisível por 2 e 3.`);
    }
    
    if (numero3 % 2 === 0 && numero3 % 3 === 0) {
        alert(`O número ${numero3} é divisível por 2 e 3.`);
    }
    
    if (numero4 % 2 === 0 && numero4 % 3 === 0) {
        alert(`O número ${numero4} é divisível por 2 e 3.`);
    }
}
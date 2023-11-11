export function L02I(){
    alert("Verificação de Número Par ou Ímpar");

    let numero = parseInt(prompt("Digite um número inteiro:"));
    
    if (numero % 2 === 0) {
        alert(`O número ${numero} é par.`);
    } else {
        alert(`O número ${numero} é ímpar.`);
    }  
}
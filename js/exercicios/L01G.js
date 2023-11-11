export function L01G() {
    alert("Adição e Multiplicação com Propriedade Distributiva");

    let A = parseInt(prompt("Digite o valor de A:"));
    let B = parseInt(prompt("Digite o valor de B:"));
    let C = parseInt(prompt("Digite o valor de C:"));
    let D = parseInt(prompt("Digite o valor de D:"));
    
    let resultado1 = A * (B + C + D);
    let resultado2 = (A + B) * (C + D);
    let resultado3 = (A + B + C) * D;
    let resultado4 = A * B * C * D;
    let resultado5 = (A + B) * C * D;
    let resultado6 = A * (B + C) * D;
    
    alert(`Resultado 1 (A * (B + C + D)): ${resultado1}`);
    alert(`Resultado 2 ((A + B) * (C + D)): ${resultado2}`);
    alert(`Resultado 3 ((A + B + C) * D): ${resultado3}`);
    alert(`Resultado 4 (A * B * C * D): ${resultado4}`);
    alert(`Resultado 5 ((A + B) * C * D): ${resultado5}`);
    alert(`Resultado 6 (A * (B + C) * D): ${resultado6}`);
}
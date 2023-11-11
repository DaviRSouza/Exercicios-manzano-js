export function L02F(){
    alert("Ordenação Crescente de Três Valores");

    let A = parseFloat(prompt("Digite o valor de A:"));
    let B = parseFloat(prompt("Digite o valor de B:"));
    let C = parseFloat(prompt("Digite o valor de C:"));
    
    let temp;
    if (A > B) {
        temp = A;
        A = B;
        B = temp;
    }
    if (B > C) {
        temp = B;
        B = C;
        C = temp;
    }
    if (A > B) {
        temp = A;
        A = B;
        B = temp;
    }
    alert(`Os valores em ordem crescente são: ${A.toFixed(2)}, ${B.toFixed(2)}, ${C.toFixed(2)}`);
}
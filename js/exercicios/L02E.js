export function L02E(){
    alert("Cálculo das Raízes da Equação de Segundo Grau");

    let A = parseFloat(prompt("Digite o valor de A (deve ser diferente de zero):"));
    let B = parseFloat(prompt("Digite o valor de B:"));
    let C = parseFloat(prompt("Digite o valor de C:"));
    
    if (A !== 0) {
        let delta = B**2 - 4 * A * C;
    
        if (delta >= 0) {
            let raiz1 = (-B + Math.sqrt(delta)) / (2 * A);
            let raiz2 = (-B - Math.sqrt(delta)) / (2 * A);
    
            alert(`As raízes da equação são: ${raiz1.toFixed(2)} e ${raiz2.toFixed(2)}`);
        } else {
            alert("Não é possível calcular as raízes reais, pois o discriminante é negativo.");
        }
    } else {
        alert("A variável A deve ser diferente de zero para calcular as raízes.");
    }
}
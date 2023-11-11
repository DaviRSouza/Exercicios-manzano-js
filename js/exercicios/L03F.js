export function L03F(){
    alert("Cálculo de Potência usando While");
    let base = parseInt(prompt("Digite o valor da base (B):"));
    let expoente = parseInt(prompt("Digite o valor do expoente (E):"));
    
    let resultado = 1;
    let contador = 0;
    
    while (contador < expoente) {
        resultado *= base;
        contador++;
    }
    
    alert(`O resultado de ${base}^${expoente} é: ${resultado}`);    
}
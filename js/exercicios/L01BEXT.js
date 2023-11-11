export function L01BEXT() {
    alert("Cálculo do Novo Salário com Reajuste");

    let SM = parseFloat(prompt("Digite o valor do salário mensal:"));
    
    let PR = parseFloat(prompt("Digite o percentual de reajuste (em porcentagem):"));
    
    let NS = SM + (SM * (PR / 100));
    
    alert(`O novo salário com reajuste é: R$ ${NS.toFixed(2)}`);
}
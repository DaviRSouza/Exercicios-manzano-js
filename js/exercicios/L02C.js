export function L02C(){
    alert("Verificação de Aprovação Escolar");
    let nota1 = parseFloat(prompt("Digite a primeira nota:"));
    let nota2 = parseFloat(prompt("Digite a segunda nota:"));
    let nota3 = parseFloat(prompt("Digite a terceira nota:"));
    let nota4 = parseFloat(prompt("Digite a quarta nota:"));
    
    let media = (nota1 + nota2 + nota3 + nota4) / 4;
    
    if (media >= 5) {
        alert(`Parabéns! Você foi aprovado com média ${media.toFixed(2)}`);
    } else {
        alert(`Infelizmente, você não foi aprovado. Sua média é ${media.toFixed(2)}`);
    }
}
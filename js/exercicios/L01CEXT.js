export function L01CEXT() {
    alert("Resultado da Eleição Sindical");

    let votosCandidatoA = parseInt(prompt("Digite a quantidade de votos válidos para o Candidato A:"));
    let votosCandidatoB = parseInt(prompt("Digite a quantidade de votos válidos para o Candidato B:"));
    let votosCandidatoC = parseInt(prompt("Digite a quantidade de votos válidos para o Candidato C:"));
    
    let votosNulos = parseInt(prompt("Digite a quantidade de votos nulos:"));
    
    let votosBranco = parseInt(prompt("Digite a quantidade de votos em branco:"));
    
    let totalEleitores = votosCandidatoA + votosCandidatoB + votosCandidatoC + votosNulos + votosBranco;
    
    let percentualVotosValidos = ((votosCandidatoA + votosCandidatoB + votosCandidatoC) / totalEleitores) * 100;
    let percentualCandidatoA = (votosCandidatoA / totalEleitores) * 100;
    let percentualCandidatoB = (votosCandidatoB / totalEleitores) * 100;
    let percentualCandidatoC = (votosCandidatoC / totalEleitores) * 100;
    let percentualVotosNulos = (votosNulos / totalEleitores) * 100;
    let percentualVotosBranco = (votosBranco / totalEleitores) * 100;
    
    alert(`Número total de eleitores: ${totalEleitores}`);
    alert(`Percentual de votos válidos em relação à quantidade de eleitores: ${percentualVotosValidos.toFixed(2)}%`);
    alert(`Percentual de votos válidos do Candidato A: ${percentualCandidatoA.toFixed(2)}%`);
    alert(`Percentual de votos válidos do Candidato B: ${percentualCandidatoB.toFixed(2)}%`);
    alert(`Percentual de votos válidos do Candidato C: ${percentualCandidatoC.toFixed(2)}%`);
    alert(`Percentual de votos nulos em relação à quantidade de eleitores: ${percentualVotosNulos.toFixed(2)}%`);
    alert(`Percentual de votos em branco em relação à quantidade de eleitores: ${percentualVotosBranco.toFixed(2)}%`);
}
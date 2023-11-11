export function L02L(){
    alert("Saudação com Nome e Sexo");

    let nome = prompt("Digite o seu nome:");
    
    let sexo = prompt("Digite o seu sexo (M para masculino, F para feminino):").toUpperCase();
    
    if (sexo === "M") {
        alert(`Ilmo Sr. ${nome}`);
    } else if (sexo === "F") {
        alert(`Ilma Sra. ${nome}`);
    } else {
        alert("Sexo inválido. Por favor, digite M para masculino ou F para feminino.");
    }
}
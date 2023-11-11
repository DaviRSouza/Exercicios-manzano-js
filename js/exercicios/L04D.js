export function L04D(){
    let quadro = 1;
    let totalDeGraos = 0;
    do {
        let graosNoQuadro = Math.pow(2, quadro - 1);
        totalDeGraos += graosNoQuadro;
    
        alert(`Quadro ${quadro}: ${graosNoQuadro} grãos`);
        quadro++;
    } while (quadro <= 64);
    alert(`Total de grãos: ${totalDeGraos}`);     
}
export function L04D(){
    let quadro = 1;
    let totalDeGraos = 0;
    do {
        let graosNoQuadro = Math.pow(2, quadro - 1);
        totalDeGraos += graosNoQuadro;
    
        console.log(`Quadro ${quadro}: ${graosNoQuadro} grãos`);
        quadro++;
    } while (quadro <= 64);
    console.log(`Total de grãos: ${totalDeGraos}`);     
}